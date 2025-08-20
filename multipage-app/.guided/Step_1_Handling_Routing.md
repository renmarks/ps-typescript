## Handling Routing
In this lab we are going to create a simple personal finance tracker using ReactJS and TypeScript. At the minimum, we will need two different pages - one for creating a new transaction, listing transactions and another to visualize the expenses. We will also need a way to navigate between these two pages. We will use React Router for this purpose.

Please remember that the app can be run at anytime by clicking the Run button or by running the `npm run dev -- --host` command in the Terminal. You can view the application's webpage in the Web Browser tab by refreshing the page.

To make the process easier, the necessary dependencies have already been added to the project. So, in order to enable routing, we just need to add the necessary code to the App.tsx file.

> Insert Task 1

## Tasks
### Task 1: Add the necessary code to enable routing
Open file `src/components/App.tsx`. Here, we are defining routes that will be available when the app starts. Here, you see an entry for the index page `/` that renders `<Summary/>` component on the page load. 

Your task is to add the two new `Route`s to enable routing for the two pages we need.

`
<Route path="/summary" element={<Summary />} />
`  
`
<Route path="/transactions" element={<Transactions />} />
`

You also need to add the following import  
`
import Transactions from './Transactions';
`

 This will enable the routing for the two pages.


### Validation
```
npm test task1.test.tsx
```