import React from "react";
import SuggestedRouteCard from "../../components/SuggestedRoutes/SuggestedRouteCard";
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
      time={text("Time")}
      price={text("Price")}
      eta={text("ETA")}
      sailDays={text("Sail days")}
      maxWaveHs={text("Max wave HS")}
      avgSpeed={text("Average speed")}
      hireCost={text("Hire cost")}
      consumption={text("Consumption")}
    />
  );
}

export default suggestedRouteCard;
