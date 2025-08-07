import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from '../../components/App';

test('check tailwind classes on Transactions headline', () => {
    const { getByTestId } = render(
        <MemoryRouter initialEntries={['/transactions']}>
            <App />
        </MemoryRouter>
    );

    const appElement = getByTestId('transactions');
    const classNames = appElement.className;

    expect(classNames).toContain('font-bold');
    expect(classNames).toContain('text-3xl');
});
