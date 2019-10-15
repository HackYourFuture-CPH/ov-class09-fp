import React from "react";

import { Route, withRouter, Switch, Redirect } from "react-router-dom";

import Home from "./../Home";
import LoginForm from "./../components/login-form";
import PrivateRoute from "./../components/PrivateRoute";
import AppLayout from "./../components/AppLayout";
import VoyagesContainer from "../components/VoyagesContainer";
import VoyagesSummaryContainer from "../components/VoyagesSummaryContainer";
import AdminContainer from "../components/AdminContainer";
import VoyageDetailsContainer from "../components/VoyageDetailsContainer";
import UnMatch from "../components/UnMatch";

const MainRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <PrivateRoute path="/app" component={AppLayout} />
          <PrivateRoute exact path="/voyages" component={VoyagesContainer} />
          <PrivateRoute
            path="/voyages-summary"
            component={VoyagesSummaryContainer}
          />
          <PrivateRoute path="/admin" component={AdminContainer} />
          <PrivateRoute
            path="/voyages/:voyage_id"
            component={VoyageDetailsContainer}
          />
          <Route
            exact
            path="/"
            component={() => <Redirect from="/" to="/voyages" />}
          />
          <Route path="*" component={UnMatch} />
        </Switch>
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
