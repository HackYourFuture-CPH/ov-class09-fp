import React from "react";

import { Route, withRouter, Link } from "react-router-dom";

import VesselsDetails from "./../components/VesselsDetails";

const VesselsRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/vessels" component={VesselsDetails} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(VesselsRouter);
