## Enable Currency Conversion
It is common these days to pay for services in different currencies. For example, if you are in the US and you are paying for a service that is based in Canada, you will pay in CAD. If you are in US and pay for services in New Zealand, you will pay in NZD.
 At any given time an amount in one currency is equivalent to an amount in another currency. This is called the exchange rate. Exchange rates change all the time. 

 We are going to be updating our project to use a function that exchanges rate between two currencies.

 > Insert Task 4

## Tasks
### Task 4.1: Calculate exchange rate
Head over to file `src/lib/api.ts`. Here, you will find a function called `getConversionRate`. This function takes one parameter, `currency`. This function returns conversion rate between the currency passed in and USD. For example, if you pass in `CAD`, it will return the exchange rate between CAD and USD. If you pass in `NZD`, it will return the exchange rate between NZD and USD.

Currently, it returns `1`. Your task is to implement this method correctly. All the currencies are available in the `currencies` array. You can use this array to get the exchange rate between any 
two currencies.

If you are interested in finding out the data, head over to file `db.json` in the root of the project. This file contains the exchange rates between all the currencies. You can use this file to find the exchange rate between any two currencies.

#### Validate command
```bash
npm test task4.1.test.ts
```

### Task 4.2: Enable Currency Conversion
Head over to `src/components/Transactions.tsx` . Locate the constant called `ENABLE_CURRENCIES`. Set its value to `true`. This will enable the currency conversion feature.


#### Validate command
```bash
npm test task4.2.test.tsx
```

Now, when you click on the `+ New Transaction` button, you will see a new radio button called `Currency`. This will allow you to choose a currency for each transaction. The way this works is known as Conditional Rendering. We are rendering the `Currency` radio button only when the `ENABLE_CURRENCIES` constant is set to `true`.
