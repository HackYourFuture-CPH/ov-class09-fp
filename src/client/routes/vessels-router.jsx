import React from "react";

import { Route, withRouter, Link } from "react-router-dom";

import VesselDetails from "./../components/VesselDetails";

const VesselRouter = props => {
  return (
    <React.Fragment>
      <div className="container">
        <Route exact path="/vessels" component={VesselDetails} />
      </div>
    </React.Fragment>
  );
};

export default withRouter(VesselRouter);
