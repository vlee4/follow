import React from "react";
import SingleExpense from "./SingleExpense";
import AddExpense from "./AddExpense";
import { findExpenses, toggleEntry } from "../Store/expenseReducer";
import { connect } from "react-redux";

class Expenses extends React.Component {
  constructor() {
    super();
    this.state = {
      adding: false,
      // expenses: [],
    };
    //   this.handleAddition = this.handleAddition.bind(this);
    //   this.cancel = this.cancel.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
  }

  // handleAddition() {
  //   this.setState({ adding: true });
  // }

  // cancel() {
  //   this.setState({ adding: false });
  // }
  toggleForm(event) {
    console.log("TOGGLE", event.target.value);
    this.setState({ adding: event.target.value });
    this.props.toggleStatus(event.target.value);
  }

  componentDidMount() {
    const exp = this.props.getExp();
    console.log("Here's the expenses", exp);
    // if (exp) {
    //   this.setState({ expenses: exp });
    // }
  }

  render() {
    console.log("PROPS", this.props);
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
    if (!this.props.expenses || this.props.expenses.length === 0) {
      return (
        <div>
          <h3>EXPENSES</h3>
          <div>
            There are currently no expenses to be displayed. Please add an entry
            to begin tracking your expenses.
          </div>

          {this.state.adding ? (
            <div className="expHeader">
              <div className="expLabels">
                <div>Entry #</div>
                <div>Date</div>
                <div>Account</div>
                <div>Category</div>
                <div>Amount</div>
              </div>
              <AddExpense />
            </div>
          ) : (
            ""
          )}
          {this.state.adding ? (
            <button type="button" onClick={this.toggleForm} value={false}>
              Close
            </button>
          ) : (
            <button name="addExpense" value={true} onClick={this.toggleForm}>
              +
            </button>
          )}
        </div>
      );
    }
    return (
      <div className="expensesWindow">
        <h3>EXPENSES</h3>
        <div>
          <div className="expLabels">
            <div>Entry #</div>
            <div>Date</div>
            <div>Account</div>
            <div>Category</div>
            <div>Amount</div>
          </div>
          <div>
            {this.props.expenses.map((entry, idx) => {
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
          </div>
        </div>
        {this.props.adding ? <AddExpense /> : ""}
        {this.props.adding ? (
          <button type="button" onClick={this.toggleForm} value={false}>
            Cancel
          </button>
        ) : (
          <button name="addExpense" value={true} onClick={this.toggleForm}>
            +
          </button>
        )}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    expenses: state.record.expenses,
    adding: state.record.adding,
  };
};

const mapDispatch = (dispatch) => {
  return {
    getExp: () => dispatch(findExpenses()),
    toggleStatus: (stat) => dispatch(toggleEntry(stat)),
  };
};

export default connect(mapState, mapDispatch)(Expenses);
