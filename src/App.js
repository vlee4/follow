import React from "react";
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Routes from "./Components/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes />
      </Router>
      <footer className="foot">
        <div>Created: September 2020</div>
        <div>
          Source Code: <a href="https://github.com/vlee4/follow/">Github</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
