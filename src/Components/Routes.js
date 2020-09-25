import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Tracker from "./ExpenseTracker";

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} />
        <Route exat path="/tracker" component={Tracker} />
      </Switch>
    </Router>
  );
}

export default Routes;
