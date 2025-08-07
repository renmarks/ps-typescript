## Visualizing Transaction Data
Now that we have the ability to add transactions, including the transactions in different currencies, we should now work on visualizing the data. The most common way to see expenses is by which cateegory they belong to.
In our form, there are 3 categories: `Food`, `Transportation` and `Entertainment`.

The most simple and effective way to visualize this data is by using a bar chart. We will be using [recharts](https://recharts.org/en-US/) for this purpose. Recharts is a charting library built on top of React and D3. It is very easy to use and has a lot of features.

This project is already using recharts. If you are curious, you can check out the code in `src/components/Summary.tsx` and look at `ShowBarChart` component. The visualization happens on a `/summary` route. We added this route in the first step. We will be using the same route to show the bar chart.

The `/summary` route is gets the Transaction data from the `TransactionContext` and passes it to the `ShowBarChart` component. There are 2 situations that can happen when we visit the `/summary` route:
1. There are no transactions
2. There are transactions

We need to handle both situations

> Insert task here

## Tasks
### Task 6.1: Show No Summary When No Transactions Exist
Head over to `src/components/Summary.tsx` and add a condition to check if there are no transactions. After the heading `<h1>` ends, insert a conditional rendering block. If there are no transactions (`transactions.length == 0`), render `<ShowNoSummary />`. 

Remember that we have used Conditional Rendering before in this lab.

Now, we need to handle the case when there are transactions. We will be using the `ShowBarChart` component for this purpose.

### Task 6.2: Show Bar Chart When Transactions Exist
Head over to `src/components/Summary.tsx`.
First, replace the `data` variable implementation. Instead of making it an empty array `[]`, populate the values by calling `createDataForBarChart` function. Pass the `transactions` variable to this function. This function is responsible for creating the data that is required by the bar chart. Specifically, it groups the transactions by category and then calculates the total amount for each category.

Next, add a condition render block after your previous conditional render ends. The code checked if there are transactions (`transactions.length > 0`), render `<ShowBarChart />`.

With this, now when you visit the `/summary` route, you should see a bar chart. If you don't see a bar chart, it might be likely that you have not added any transactions. Add some transactions and then visit the `/summary` route.

Remember to not do a page reload between changing routes. This will cause the state to reset and you will not see any transactions. This can be fixed with multiple strategies that are not in the scope of this lab.

That's it! You have successfully completed this lab.

