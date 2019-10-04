import React, { Component } from "react";
import SuggestedRouteDetails from "./SuggestedRouteDetails";
import SuggestedRouteSummary from "./SuggestedRouteSummary";

export default class SuggestedRouteCard extends Component {
  render() {
    return (
      <div>
        <SuggestedRouteSummary props={this.props} />
        <SuggestedRouteDetails />
      </div>
    );
  }
}
