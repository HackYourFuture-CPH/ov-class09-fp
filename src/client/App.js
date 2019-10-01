import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainRouter from "./routes/main-router";
import VesselsRouter from "./routes/vessels-router";

class App extends Component {
  render() {
    return (
      <div>
        <MainRouter />
        <VesselsRouter />
      </div>
    );
  }
}

export default withRouter(App);
