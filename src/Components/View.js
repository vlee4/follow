import React from "react";
import SingleExpense from "./SingleExpense";

class View extends React.Component {
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
        {/* if there are no entries, there should be a prompt to add expenses */}
        <table>
          <thead>
            <tr>
              <th>Dates</th>
              <th>Account #</th>
              <th>Category</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* once there's mock data, can map it out into single component rows */}
            {mockData.map((entry) => {
              let { id, Date, Account, Category, Amount } = entry;
              return (
                <SingleExpense
                  key={id}
                  date={Date}
                  account={Account}
                  category={Category}
                  amount={Amount}
                />
              );
            })}

            {/* <SingleExpense />
          <SingleExpense /> */}
          </tbody>
        </table>
      </div>
    );
  }
}

export default View;
