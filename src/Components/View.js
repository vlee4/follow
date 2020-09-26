import React from "react";
// import SingleExpense from "./SingleExpense";
import Expenses from "./Expenses";
import Accounts from "./Accounts";
import Categories from "./Categories";
import { connect } from "react-redux";

class View extends React.Component {
  render() {
    // const mockData = [
    //   {
    //     id: 1,
    //     Date: "10 13 95",
    //     Account: "Acct #1337",
    //     Category: "Entertainment",
    //     Amount: 100,
    //   },
    //   {
    //     id: 2,
    //     Date: "9 12 95",
    //     Account: "Acct #0613",
    //     Category: "Art",
    //     Amount: 1030,
    //   },
    //   {
    //     id: 3,
    //     Date: "12 31 95",
    //     Account: "Acct #1337",
    //     Category: "Drama",
    //     Amount: 10330,
    //   },
    // ];
    if (!this.props.tab) {
      return <div>Please select how you would like to view your expenses</div>;
    } else if (this.props.tab === "Accounts") {
      return <Accounts />;
    } else if (this.props.tab === "Categories") {
      return <Categories />;
    } else {
      return <Expenses />;
    }
  }
}
export default connect()(View);
