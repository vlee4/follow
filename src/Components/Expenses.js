import React from "react";

function Expenses() {
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
          <tr>
            <td>January 3, 2020</td>
            <td>Acct #1337108049384039 839doj odsf 82</td>
            <td>Entertainment</td>
            <td>$100</td>
          </tr>
          <tr>
            <td>February 12, 2020</td>
            <td>Acct #1337</td>
            <td>Food</td>
            <td>$140</td>
          </tr>
          <tr>
            <td>December 3, 2020</td>
            <td>Acct #1337</td>
            <td>Toys</td>
            <td>$30</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Expenses;
