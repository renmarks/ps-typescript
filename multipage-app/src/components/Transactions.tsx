import React, { useContext, useState } from "react";
import Layout from "./Layout";
import { Transaction, TransactionsContext } from "../TransactionsContext";
import { ShowTransactions } from "./ShowTransactions";
import { Currencies } from "./Currencies";
import { Categories } from "./Categories";

// Task 4.2
const ENABLE_CURRENCIES = true;

const Transactions: React.FC = () => {
  const { transactions, addTransaction } = useContext(TransactionsContext);
  const [showAddTransactionForm, setShowAddTransactionForm] =
    useState<boolean>(false);
  const [transaction, setTransaction] = useState<
    Omit<Transaction, "dateAdded">
  >({
    name: "",
    amount: 0,
    category: "Food",
    currency: "USD",
  });

  const shouldEnableSubmitButton = () => {
    return transaction.name.trim() !== "" && transaction.amount > 0;
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setTransaction((prevTransaction) => ({
      ...prevTransaction,
      [name]: value,
    }));
  };

  const handleCurrencyChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = event.target;
    let rate: number = 1;

    if (value !== "USD") {
      console.log(`Currency conversion needed from USD => ${value}`);
      // Task 5.1: calculate the conversion rate by calling getConversionRate method
      // and passing in the value
    }

    const convertedAmount = transaction.amount * rate;

    const updatedTransaction = {
      ...transaction,
      amount: convertedAmount,
      currency: value,
      // Task 5.2: set the rate property
    };
    setTransaction(updatedTransaction);
  };

  const handleCategoryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleInputChange(event);
  };

  const handleCancel = () => {
    setTransaction({
      name: "",
      amount: 0,
      category: "Food",
      currency: "USD",
    });
    setShowAddTransactionForm(false);
  };

  const handleSubmit = () => {
    addTransaction({ ...transaction, dateAdded: new Date() });

    setTransaction({
      name: "",
      amount: 0,
      category: "Food",
      currency: "USD",
    });
    setShowAddTransactionForm(false);
  };

  const ShowEmptyTransaction = () => {
    return (
      <div className="flex flex-col bg-gray-50 p-6 my-6 max-w-3xl">
        <div className="flex justify-center">
          <p className="text-sm py-4">You have no transactions!</p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => setShowAddTransactionForm(true)}
            className="border-1 rounded border-indigo-600 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1"
          >
            + New Transaction
          </button>
        </div>
      </div>
    );
  };

  return (
    <Layout>
      {/* Task 3.1: Update the className with font-bold and text-3xl */}
      <h2 className="font-bold text-3xl" data-testid="transactions">
        Transactions
      </h2>

      {!showAddTransactionForm && transactions.length === 0 && (
        <ShowEmptyTransaction />
      )}
      {!showAddTransactionForm && transactions.length > 0 && (
        <div className="flex flex-col bg-gray-50 mt-6 p-4 max-w-3xl">
          <div className="flex justify-end pb-1">
            <button
              onClick={() => setShowAddTransactionForm(true)}
              className="border rounded  border-indigo-600 text-indigo-600 font-medium hover:text-white hover:bg-indigo-600 px-4 py-1"
            >
              + New Transaction
            </button>
          </div>
          <ShowTransactions transactions={transactions} />
        </div>
      )}

      {showAddTransactionForm && (
        <div className="max-w-3xl flex flex-col bg-gray-50 p-6 my-4">
          <label className="flex gap-10">
            {/* Task 3.2: Update the className with font-bold */}
            <span className="font-bold" data-testid="nameLabel">
              Name
            </span>
            <input
              type="text"
              name="name"
              value={transaction.name}
              onChange={handleInputChange}
              className="border-2 pl-2"
            />
          </label>
          <br />
          <label className="flex gap-6">
            {/* Task 3.3: Update the className with font-bold */}
            <span className="font-bold" data-testid="amountLabel">
              Amount
            </span>
            <input
              type="number"
              name="amount"
              value={transaction.amount}
              onChange={handleInputChange}
              className="border-2 pl-2"
              data-testid="amount"
            />
          </label>

          {ENABLE_CURRENCIES && (
            <>
              <br />
              <Currencies
                currency={transaction.currency}
                handleInputChange={handleCurrencyChange}
                rate={transaction?.rate}
              />
            </>
          )}
          <>
            <br />
            <Categories
              category={transaction.category}
              handleCategoryChange={handleCategoryChange}
            />
          </>
          <br />
          <div className="flex justify-end gap-5">
            <button
              data-testid="cancelButton"
              onClick={handleCancel}
              // Task 3.4: Update the className with 'border rounded border-black bg-white hover:bg-gray-100 text-black'
              className="border rounded border-black bg-white hover:bg-gray-100 text-black"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!shouldEnableSubmitButton()}
              className="border-2 rounded border-indigo-600 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
};

export default Transactions;
