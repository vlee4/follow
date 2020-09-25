import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Tracker from "./ExpenseTracker";

function Routes() {
  return (
    <Switch>
      <Route exact path="/follow/" component={Home} />
      <Route path="/follow/tracker" component={Tracker} />
    </Switch>
  );
}

export default Routes;
