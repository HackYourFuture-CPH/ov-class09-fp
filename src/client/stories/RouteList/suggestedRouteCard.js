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
    <SuggestedRouteCard
      time={text("Time", "26h / +6")}
      price={text("Price", "$104.207/ -$6.208")}
      isSelected={boolean("Is Selected", false)}
    />
  );
}
export default suggestedRouteCard;
