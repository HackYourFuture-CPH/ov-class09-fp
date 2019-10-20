import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainRouter from "./routes/main-router";
import NavBar from "./components/NavBar";
class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <MainRouter />
      </div>
    );
  }
}

export default withRouter(App);
