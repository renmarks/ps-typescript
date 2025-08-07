import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../../components/App";
import fetchMock from "jest-fetch-mock";

fetchMock.enableMocks();

test("verifies currency conversion appears when cuurnecy change", async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify([
      {
        id: "nzd",
        conversion: 0.61,
      },
    ])
  );

  render(
    <MemoryRouter initialEntries={["/transactions"]}>
      <App />
    </MemoryRouter>
  );

  // Click on the "+ New Transaction" button
  fireEvent.click(screen.getByText("+ New Transaction"));

  // Verify that the form with labels is displayed
  expect(screen.getByLabelText("Name")).toBeInTheDocument();
  expect(screen.getByLabelText("Amount")).toBeInTheDocument();
  expect(screen.getByTestId("currency")).toBeInTheDocument();
  expect(screen.getByTestId("category")).toBeInTheDocument();

  // Fill the form with details
  fireEvent.change(screen.getByLabelText("Name"), {
    target: { value: "Walmart" },
  });
  fireEvent.change(screen.getByTestId("amount"), {
    target: { value: "100" },
  });

  // Change the Currency radio option to NZD
  fireEvent.click(screen.getByTestId("currency_nzd"));

  // Verify that the amount changes to the previously selected amount * 0.61
  await waitFor(() => {
    const amountInput = screen.getByTestId("amount") as HTMLInputElement;
    expect(amountInput.value).toBe("61");
    const expectedDiv = screen.getByTestId("currency-conversion-label");
    expect(expectedDiv).toHaveTextContent("(1 NZD = 0.61 USD)");
  });
});
