import React, { Component } from "react";
import SuggestedRouteCard from "./SuggestedRouteCard";
import SuggestedRouteInfo from "./SuggestedRouteInfo";

export default class SuggestedRouteBox extends Component {
  render() {
    // console.log(this.props);
    return (
      <div>
        <SuggestedRouteCard props={this.props} />
        <SuggestedRouteInfo />
      </div>
    );
  }
}
