import React from "react";

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
    <tr>
      <td>{DATE || `January 3, 2020`}</td>
      <td>{props.account || `Acct #1337108049384039 839doj odsf 82`}</td>
      <td>{props.category || "Entertainment"}</td>
      <td>{AMOUNT || "$100"}</td>
    </tr>
  );
}

export default SingleExpense;
