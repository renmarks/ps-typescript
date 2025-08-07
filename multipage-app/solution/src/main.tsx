import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App.tsx";
import "./index.css";
import { TransactionsProvider } from "./TransactionsContext.tsx";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <TransactionsProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TransactionsProvider>
  </React.StrictMode>
);
