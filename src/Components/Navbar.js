import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="title" to="/">
        <h1 className="title">Follow Your Money</h1>
      </Link>
      <div className="navLinks">
        <Link to="/"> Home </Link>
        <Link to="/tracker"> Expense Tracker </Link>
      </div>
    </div>
  );
}

export default NavBar;
