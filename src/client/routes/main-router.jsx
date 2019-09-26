import React from "react";

import { Route, withRouter, Link } from "react-router-dom";

import Home from "./../Home";
import LoginForm from "./../components/login-form";

const MainRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
