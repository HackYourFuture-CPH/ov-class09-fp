import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import MainRouter from "./routes/main-router";
import LoginForm from "./components/login-form";
class App extends Component {
  render() {
    return (
      <div>
        <LoginForm />
        <MainRouter />
      </div>
    );
  }
}

export default withRouter(App);
