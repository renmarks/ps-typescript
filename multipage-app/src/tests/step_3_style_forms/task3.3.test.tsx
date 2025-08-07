import { MemoryRouter } from "react-router-dom";
import App from "../../components/App";
import { fireEvent, render, screen } from '@testing-library/react';

test("check tailwind classes on Name Label component", () => {

  const { getByTestId } = render(
    <MemoryRouter initialEntries={["/transactions"]}>
      <App />
    </MemoryRouter>
  );

  fireEvent.click(screen.getByText("+ New Transaction"));
  const appElement = getByTestId("amountLabel");
  const classNames = appElement.className;

  expect(classNames).toContain("font-bold");
});
