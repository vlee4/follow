import React from "react";
import SingleExpense from "./SingleExpense";
import AddExpense from "./AddExpense";
import { findExpenses } from "../Store/expenseReducer";
import { connect } from "react-redux";

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      adding: false,
      expenses: [],
    };
    this.handleAddition = this.handleAddition.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  handleAddition() {
    this.setState({ adding: true });
  }

  cancel() {
    this.setState({ adding: false });
  }

  componentDidMount() {
    const exp = this.props.getExp();
    console.log("Here's the expenses", exp);
    if (exp) {
      this.setState({ expenses: exp });
    }
  }

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
    if (this.state.expenses.length === 0) {
      return (
        <div>
          <h3>EXPENSES</h3>
          <div>
            There are currently no expenses to be displayed. Please add an entry
            to begin tracking your expenses.
          </div>
        </div>
      );
    }

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
        {this.state.adding ? <AddExpense /> : ""}
        {this.state.adding ? (
          <button type="button" onClick={this.cancel}>
            Cancel
          </button>
        ) : (
          <button name="addExpense" onClick={this.handleAddition}>
            +
          </button>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    expenses: state.expenses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getExp: () => dispatch(findExpenses()),
  };
};

export default connect(mapState, mapDispatch)(Expenses);
