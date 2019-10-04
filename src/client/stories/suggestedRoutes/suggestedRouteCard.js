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
      time={text("theTime")}
      price={text("thePrice")}
      eta={text("ETA")}
      sailDays={text("SAIL DAYS")}
      maxWaveHs={text("MAX WAVE HS")}
      avgSpeed={text("AVG SPEED")}
      hireCost={text("HIRE COST")}
      consumption={text("CONSUMPTION")}
    />
  );
}

export default suggestedRouteCard;
