import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainRouter from "./routes/main-router";

import { MyProvider } from "./context";

class App extends Component {
  render() {
    return (
      <MyProvider>
        <MainRouter />
      </MyProvider>
    );
  }
}

export default withRouter(App);
