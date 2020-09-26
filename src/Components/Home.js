import React from "react";
import { connect } from "react-redux";

function Home() {
  return (
    <div>
      <h2>Welcome Home</h2>
      <div>This is the homepage to be!</div>
    </div>
  );
}

export default connect()(Home);
