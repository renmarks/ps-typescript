import Transactions from './Transactions';


import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Summary />} />
        <Route path="/summary" element={<Summary />} />
        <Route path="/transactions" element={<Transactions />} />
        {/* Task 1: Start Block */}
        {/* Task 1: End Block */}
      </Routes>
    </div>
  );
}
