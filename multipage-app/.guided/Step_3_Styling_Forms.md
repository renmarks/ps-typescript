## Styling Forms
As you may have noticed, the form we created in the previous step is not very pretty. Let's fix that.

We are going to leverage Tailwind CSS to style our form. Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces. It is a very popular framework and is used by many companies, including Amazon, Microsoft, and Atlassian.

The nice thing about Tailwind CSS is that it is very easy to use. You don't need to know CSS to use it. You just need to know how to add classes to your HTML elements.

This project already has Tailwind CSS installed. Let's use it to style our form.

First, we need to make title `Transactions` look like a heading. Currently, it looks like a regular text.

> Insert Task 3

## Tasks
### Task 3.1: Style the Transactions title
Head over to `src/components/Transactions.tsx` . Locate the `h2` element with the text `Transactions`. Add the following classes to the `className` - `font-bold`, `text-3xl`. This will make the text bold and increase its size.

#### Validate command
```bash
npm test task3.1.test.tsx
```


Now, as you click on the `+ New Transaction` button, you will notice that the `Name` and `Amount` labels are not looking bold, while the `Category` label is. Let's fix that.

### Task 3.2: Style the Name Label
In the same file, `span` element with value `Name`. Add the following classes to the `className` - `font-bold`. This will make the text bold and increase its size.

#### Validate command
```bash
npm test task3.2.test.tsx
```


Now, let's repeat the same for the `Amount` label.

### Task 3.3: Style the Amount Label
In the same file, `span` element with value `Amount`. Add the following classes to the `className` - `font-bold`. This will make the text bold and increase its size.

#### Validate command
```bash
npm test task3.3.test.tsx
```

Great! This all looks good. Finally, if you look at the `Cancel` button, it looks more like a link than a button. Let's fix that.

### Task 3.4: Style the Cancel Button
In the same file, `button` element with value `Cancel`. Add the following classes to the `className` - `border`, `rounded`, `border-black`, `bg-white` `hover:bg-gray-100`, `text-black`

#### Validate command
```bash
npm test task3.4.test.tsx
```

This will add a rounded border to the button and change its background color to white. It will also change the background color to gray when you hover over it.

Fantastic. So as you can see, Tailwind CSS is very easy to use and using a few utility classes, you can create a beautiful UI for any app. If you are interested in learning more about Tailwind CSS, you can check out their [documentation](https://tailwindcss.com/docs).
