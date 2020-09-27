import React from "react";
import { connect } from "react-redux";

function SingleExpense(props) {
  //formatting dates
  const options = {
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  let DATE = new Date(props.date).toLocaleDateString("en-US", options);
  // var d = new Date("10 12 14").toLocaleDateString("en-US",options);

  //formatting currency
  const currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  let AMOUNT = currencyFormatter.format(props.amount);
  return (
    <div className="expense">
      <div>{props.id || "ID"}</div>
      <div>{DATE || `January 3, 2020`}</div>
      <div>{props.account || `Acct #1337`}</div>
      <div>{props.category || "Entertainment"}</div>
      <div>{AMOUNT || "$100"}</div>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
}

export default connect()(SingleExpense);
