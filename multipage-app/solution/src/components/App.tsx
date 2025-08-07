import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";
import Transactions from "./Transactions";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Summary />} />
        {/* Task 1: Start Block */}
        <Route path="/summary" element={<Summary />} />
        <Route path="/transactions" element={<Transactions />} />
        {/* Task 1: End Block */}
      </Routes>
    </div>
  );
}
