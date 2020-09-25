import React from "react";
import Expenses from "./Expenses";

function ExpenseTracker() {
  return (
    <div className="tracker">
      <h2>EXPENSES</h2>
      <div>Choose what you want to view</div>
      <div className="trackerView">
        <div>Expenses</div>
        <div>Accounts</div>
        <div>Categories</div>
      </div>
      <Expenses />
    </div>
  );
}

export default ExpenseTracker;
