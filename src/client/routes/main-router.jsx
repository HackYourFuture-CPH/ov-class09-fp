import React from "react";

import { Route, withRouter, Link, Redirect } from "react-router-dom";

import Home from "./../Home";
import LoginForm from "./../components/login-form";

const MainRouter = props => {
  const isLoggedin = localStorage.getItem("token");
  return (
    <React.Fragment>
      <div className="container">
        <Route
          exact
          path="/"
          component={() =>
            isLoggedin ? <Redirect to="/home" /> : <Redirect to="/login" />
          }
        />
        <Route exact path="/login" component={LoginForm} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
