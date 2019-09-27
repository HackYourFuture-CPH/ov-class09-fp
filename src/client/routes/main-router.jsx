import React from "react";

import { Route, withRouter, Link } from "react-router-dom";

import Home from "./../Home";
import StartVoyage from "./StartVoyage";

const MainRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/" component={Home} />
        <Route exact path="/StartVoyage" component={StartVoyage} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
