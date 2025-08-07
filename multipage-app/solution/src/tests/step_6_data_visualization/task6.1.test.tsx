import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Transaction, TransactionsProvider } from "../../TransactionsContext";
import App from "../../components/App";


test("renders no-summary element when loading App with initialEntries of /summary", () => {
  const testTransactions: Transaction[] = [];

  render(
    <MemoryRouter initialEntries={["/summary"]}>
      <TransactionsProvider initialTransactions={testTransactions}>
        <App />
      </TransactionsProvider>
    </MemoryRouter>
  );

  const noSummaryElement = screen.getByTestId("no-summary");
  expect(noSummaryElement).toBeInTheDocument();
});
