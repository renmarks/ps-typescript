import { Transaction } from "../TransactionsContext";

type ShowTransactionsProps = {
  transactions: Transaction[];
};

export const ShowTransactions = ({ transactions }: ShowTransactionsProps) => {
  return (
    <div className="flex flex-col bg-gray-50 p-6 my-4 max-w-3xl">
      <div className="flex justify-start">
        <table className="table-auto" role="table">
          <thead>
            <tr>
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Category</th>
              <th className="px-4 py-2">Date Added</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{transaction.name}</td>
                <td className="border px-4 py-2">{transaction.amount}</td>
                <td className="border px-4 py-2">{transaction.category}</td>
                <td className="border px-4 py-2">
                  {transaction.dateAdded.toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
