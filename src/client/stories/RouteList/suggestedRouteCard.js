import React from "react";
import SuggestedRouteCard from "../../components/RoutesList/SuggestedRouteCard";

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function suggestedRouteCard() {
  return (
    <SuggestedRouteCard theTime={text("theTime")} thePrice={text("thePrice")} />
  );
}
export default suggestedRouteCard;
