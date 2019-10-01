import React, { Component } from "react";
import SuggestedRouteCard from "../components/SuggestedRouteCard";

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function RouteCard() {
  return (
    <SuggestedRouteCard theTime={text("theTime")} thePrice={text("thePrice")} />
  );
}
export default RouteCard;
