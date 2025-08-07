## State Management using Hooks
We now need need to make use currency conversion when adding a transaction. Currently, if you add a transaction, and select a different currency, the amount does not change. This is because we are not calling the exchange rate function and using it in our calculations. You just need to use it in the right place.

> Insert Task 5

## Tasks
### Task 5.1: Get the exchange rate
Head over to `src/components/Transactions.tsx` . Locate the `handleCurrencyChange` function. This function is called when the currency is changed.

Currently, the `rate` variable is set to `1` by default. We need to change that to the exchange rate. When the value is not USD, we need to call a function to get the exchange rate. You need to import the `getConversionRate` function from `src/lib/api.ts`. Set the `rate` variable to the value returned by the `getConversionRate` function by passing in the currency `value`.

This rate is used to calculate `convertedAmount` which takes the amount in `USD` and multiplied by the `rate` to get the equivalent amount in the USD. We use this `convertedAmount` and save in the state using `setTransaction`. The `setTrasaction` method is created by the `useState` hook. It takes in the new value for the state and updates it.

Now that we have a conversion working, it would be great if we can also "see" the conversion rate when the currency is not USD. Let's do that next.


### Task 5.2: Set the rate in the state
Head over to `src/components/Transactions.tsx` . Locate the `handleCurrencyChange` function. This function is called when the currency is changed. Inside this function we create an `updatedTransaction` object. This object is used to update the state using `setTransaction` method. We need to add the `rate` to this object.
With the `rate` that you calculated in the previous task, add it to the `updatedTransaction` object. The key for this value is `rate`. The value will be defined based on whether the currency is USD or not. If the currency is USD, the value will be `undefined`. If the currency is not USD, the value will be the `rate` that you calculated in the previous task.

Now, when you add a new transaction, the default currency is still USD. However, with the change we made now, whenever you change the currency, the amount will be converted into equivalent USD amount and saved in the state. We will also be able to see the conversion rate when the currency is not USD.