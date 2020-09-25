import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Follow Your Money</h1>
      <Home />
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
