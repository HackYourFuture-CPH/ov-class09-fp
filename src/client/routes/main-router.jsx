import React from "react";

import { Route, withRouter, Link, Redirect } from "react-router-dom";

import Home from "./../Home";
import LoginForm from "./../components/login-form";
import PrivateRoute from "./../components/PrivateRoute";
import AppLayout from "./../components/AppLayout";
import VoyageContainer from "./../components/VoyageContainer";

const MainRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LoginForm} />
        <PrivateRoute path="/app" component={AppLayout} />
        <Route path="/voyage" component={VoyageContainer} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
