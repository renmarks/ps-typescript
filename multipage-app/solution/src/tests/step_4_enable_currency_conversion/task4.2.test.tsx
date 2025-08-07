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

    test('Currencies is available on the transactions page', () => {
        const currenciesElement = screen.getByTestId('currencies');
        expect(currenciesElement).toBeVisible();
    });
});

