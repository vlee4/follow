import React from "react";
import { connect } from "react-redux";
import { postExpense } from "../Store/expenseReducer";

class AddExpense extends React.Component {
  constructor() {
    super();
    this.state = {
      id: "-",
      date: "",
      account: "",
      category: "",
      amount: 0,
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("form values:", this.state);
    this.setState({ adding: false });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="addExpenseForm">
        <div>4</div>
        <input
          name="date"
          type="date"
          value={this.state.date}
          onChange={this.handleChange}
          required
        />
        <input
          name="account"
          placeholder="Account#"
          value={this.state.account}
          onChange={this.handleChange}
          required
        />
        <input
          name="category"
          placeholder="Category"
          value={this.state.category}
          onChange={this.handleChange}
          autoComplete="on"
          required
        />
        <input
          name="amount"
          placeholder="Amount"
          type="currency"
          value={this.state.amount}
          onChange={this.handleChange}
          required
        />
        <div>
          <button type="submit">Submit</button>
          <button type="button" onClick={this.cancel}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addExpenseForm: (exp) => dispatch(postExpense(exp)),
  };
};

export default connect(null, mapDispatch)(AddExpense);
