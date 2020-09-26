import React from "react";
import View from "./View";
import { connect } from "react-redux";

class ExpenseTracker extends React.Component {
  constructor() {
    super();
    this.state = {
      tab: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    this.setState({ tab: e.target.value });
  }
  render() {
    return (
      <div className="tracker">
        <h2>EXPENSE TRACKER</h2>
        <div>Choose what you want to view</div>
        <div className="trackerView">
          <button value="Expenses" onClick={this.handleClick}>
            Expenses
          </button>
          <button value="Accounts" onClick={this.handleClick}>
            Accounts
          </button>
          <button value="Categories" onClick={this.handleClick}>
            Categories
          </button>
        </div>
        <View tab={this.state.tab} />
      </div>
    );
  }
}

export default connect()(ExpenseTracker);
