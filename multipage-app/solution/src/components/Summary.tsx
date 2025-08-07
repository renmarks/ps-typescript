import React, { useContext } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Transaction, TransactionsContext } from "../TransactionsContext";
import Layout from "./Layout";
import { Link } from "react-router-dom";

const ShowBarChart: React.FC<{ data: { name: string; amount: number }[] }> = ({
  data,
}) => {
  return (
    <div className="bg-gray-100 mt-4 py-4 max-w-3xl" data-testid="graph">
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="amount"
          fill="#8884d8"
          activeBar={<Rectangle fill="pink" stroke="blue" />}
        />
      </BarChart>
    </div>
  );
};

const ShowNoSummary = () => {
  return (
    <div className="flex flex-col bg-gray-50 p-6 my-6 max-w-3xl" data-testid="no-summary">
      <div className="flex flex-col justify-center items-center">
        <p className="text-sm py-4">
          You have no transactions hence no summary!
        </p>
        <Link
          to="/transactions"
          className="text-sm text-indigo-600 hover:text-indigo-500"
        >
          Go to transactions
        </Link>
      </div>
    </div>
  );
};

const createDataForBarChart = (transactions: Transaction[]) => {
  const categoryToAmount = transactions.reduce((acc, transaction) => {
    if (acc[transaction.category] === undefined) {
      acc[transaction.category] = Number(transaction.amount);
    } else {
      acc[transaction.category] += Number(transaction.amount);
    }

    return acc;
  }, {} as { [key: string]: number });

  return Object.keys(categoryToAmount).map((category) => ({
    name: category,
    amount: categoryToAmount[category],
  }));
};

const Summary: React.FC = () => {
  const { transactions } = useContext(TransactionsContext);
  // Task 6.2: Create data for bar chart
  const data = createDataForBarChart(transactions);

  return (
    <Layout>
      <h1 className="font-bold text-3xl" data-testid="summary">
        Summary
      </h1>
      {/* Task 6.1 */}
      {transactions.length === 0 && <ShowNoSummary />}

      {/* Task 6.2 */}
      {transactions.length > 0 && <ShowBarChart data={data} />}
    </Layout>
  );
};

export default Summary;
