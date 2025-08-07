import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../components/App';

describe('Form Validation', () => {
    beforeEach(() => {
        render(
            <MemoryRouter initialEntries={["/transactions"]}>
              <App />
            </MemoryRouter>
          );
        fireEvent.click(screen.getByText('+ New Transaction'));
    });

    test('Submit button should be disabled when name is empty and amount is 0', () => {
        const nameInput = screen.getByLabelText('Name');
        const amountInput = screen.getByLabelText('Amount');
        const submitButton = screen.getByRole('button', { name: 'Submit' });

        expect(submitButton).toBeDisabled();

        fireEvent.change(nameInput, { target: { value: 'Walmart' } });
        fireEvent.change(amountInput, { target: { value: '199.99' } });

        expect(submitButton).toBeEnabled();
    });
});

