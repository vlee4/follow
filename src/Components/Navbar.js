import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <Link className="title" to="/">
        <h1 className="title">Follow Your Money</h1>
      </Link>
      <div className="navLinks">
        <Link to="/follow/"> Home </Link>
        <Link to="/follow/tracker"> Expense Tracker </Link>
      </div>
    </div>
  );
}

export default NavBar;
