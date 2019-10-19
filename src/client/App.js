import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainRouter from "./routes/main-router";

//import CSS
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <MainRouter />
      </div>
    );
  }
}

export default withRouter(App);
