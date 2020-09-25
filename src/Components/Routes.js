import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Tracker from "./ExpenseTracker";

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/tracker" component={Tracker} />
    </Switch>
  );
}

export default Routes;
