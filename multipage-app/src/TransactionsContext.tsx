import React, { createContext, useState } from "react";

export interface Transaction {
  name: string;
  amount: number;
  category: string;
  dateAdded: Date;
  currency: string;
  rate?: number;
}

interface TransactionsContextProps {
  transactions: Transaction[];
  addTransaction: (transaction: Transaction) => void;
}

export const TransactionsContext = createContext<TransactionsContextProps>({
  transactions: [],
  addTransaction: () => {},
});

export const TransactionsProvider: React.FC<{ children: React.ReactNode, initialTransactions?: Transaction[] }> = ({
  children,
  initialTransactions = [],
}) => {
  const [transactions, setTransactions] = useState<Transaction[]>(initialTransactions);

  const addTransaction = (transaction: Transaction) => {
    setTransactions([transaction, ...transactions]);
  };

  return (
    <TransactionsContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
};
