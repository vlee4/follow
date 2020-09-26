import React from "react";
import SingleExpense from "./SingleExpense";

class Expenses extends React.Component {
  render() {
    const mockData = [
      {
        id: 1,
        Date: "10 13 95",
        Account: "Acct #1337",
        Category: "Entertainment",
        Amount: 100,
      },
      {
        id: 2,
        Date: "9 12 95",
        Account: "Acct #0613",
        Category: "Art",
        Amount: 1030,
      },
      {
        id: 3,
        Date: "12 31 95",
        Account: "Acct #1337",
        Category: "Drama",
        Amount: 10330,
      },
    ];

    return (
      <div className="expensesWindow">
        <h3>EXPENSES</h3>
        <table>
          <thead>
            <tr>
              {Object.keys(mockData[0]).map((key, idx) => {
                return <td key={`${key}_${idx}`}>{key}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {mockData.map((entry, idx) => {
              let { id, Date, Account, Category, Amount } = entry;
              return (
                <SingleExpense
                  key={`${id}_${idx}`}
                  id={id}
                  date={Date}
                  account={Account}
                  category={Category}
                  amount={Amount}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Expenses;
