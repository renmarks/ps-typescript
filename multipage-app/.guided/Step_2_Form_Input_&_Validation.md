## Form Input & Validation
Now your app is running and you will see two links on the header, called Transactions and Summary. Click on Transactions and you wil see Transactions page. Since there are no transactions added yet, you will see the button called `+ New Transaction`. Click on it and you will see the form to add a new transaction.

At this time, if you click on Submit button, you will see that it adds a new transaction with empty values. You can confirm this by the table on the Transactions page. The `Name` is empty and the `Amount` is 0. This is not what we want. We only want to enable the Submit button when the form is valid.

> Insert Task 2

## Tasks
### Task 2.1: Add logic to enable/disable Submit button
Head over to to file called `Transactions.tsx` and locate the function called `shouldEnableSubmitButton`. At this time, it returns `true`. This means enable button at all times. You need to update the logic to enable the button only when the form is valid. To check the validity, ensure that the transaction `name` should not be empty and the `amount` should be greater than `0`.

If the values are valid, return `true` else return `false`.


### Validation
```
npm test task2.1.test.tsx
```