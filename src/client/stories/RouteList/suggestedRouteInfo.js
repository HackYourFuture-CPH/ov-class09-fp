import React from "react";
import SuggestedRouteInfo from "../../components/RoutesList/SuggestedRouteInfo";
import { text } from "@storybook/addon-knobs";

export function suggestedRouteInfo() {
  return (
    <SuggestedRouteInfo
      eta={text("ETA")}
      sailDays={text("SAIL DAYS")}
      maxWaveHs={text("MAX WAVE HS")}
      avgSpeed={text("AVG SPEED")}
      hireCost={text("HIRE COST")}
      consumption={text("CONSUMPTION")}
    />
  );
}

export default suggestedRouteInfo;
