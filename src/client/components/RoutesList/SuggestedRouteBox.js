import React, { Component } from "react";
import SuggestedRouteCard from "./SuggestedRouteCard";
import SuggestedRouteInfo from "./SuggestedRouteInfo";

export default class SuggestedRouteBox extends Component {
  render() {
    return (
      <div>
        <SuggestedRouteCard />
        <SuggestedRouteInfo />
      </div>
    );
  }
}
