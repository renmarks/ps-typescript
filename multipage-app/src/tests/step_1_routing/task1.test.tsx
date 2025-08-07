import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App";

test("transaction route exists", () => {
  render(
    <MemoryRouter initialEntries={["/transactions"]}>
      <App />
    </MemoryRouter>
  );

  const routeElement = screen.getByTestId("transactions");
  expect(routeElement).toBeInTheDocument();
})

test("summary route exists", () => {
  render(
    <MemoryRouter initialEntries={["/summary"]}>
      <App />
    </MemoryRouter>
  );

  const routeElement = screen.getByTestId("summary");
  expect(routeElement).toBeInTheDocument();
});
