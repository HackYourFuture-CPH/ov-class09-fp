import React from "react";
import SuggestedRouteBox from "../../components/RoutesList/SuggestedRouteBox";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function suggestedRouteBox() {
  return (
    <SuggestedRouteBox
      theTime={text("theTime")}
      thePrice={text("thePrice")}
      eta={text("ETA")}
      sailDays={text("SAIL DAYS")}
      maxWaveHs={text("MAX WAVE HS")}
      avgSpeed={text("AVG SPEED")}
      hireCost={text("HIRE COST")}
      consumption={text("CONSUMPTION")}
    />
  );
}

export default suggestedRouteBox;