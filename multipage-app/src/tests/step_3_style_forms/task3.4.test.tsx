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
  const appElement = getByTestId("cancelButton");
  const classNames = appElement.className;

  expect(classNames).toContain("border");
  expect(classNames).toContain("rounded");
  expect(classNames).toContain("border-black");
  expect(classNames).toContain("bg-white");
  expect(classNames).toContain("hover:bg-gray-100");
  expect(classNames).toContain("text-black");
});
