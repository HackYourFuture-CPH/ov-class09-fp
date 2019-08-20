import React from "react";

import { Route, withRouter, Link } from "react-router-dom";

// <Route exact path="/signup" component={SignUp} />

import Home from "./../Home";

const MainRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
          <Route exact path="/" component={Home} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(MainRouter);
