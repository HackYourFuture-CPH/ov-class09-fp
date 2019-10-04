import React from "react";
import SuggestedRouteDetails from "../../components/SuggestedRoutes/SuggestedRouteDetails";
import { text } from "@storybook/addon-knobs";

export function suggestedRouteDetails() {
  return (
    <SuggestedRouteDetails
      eta={text("ETA")}
      sailDays={text("SAIL DAYS")}
      maxWaveHs={text("MAX WAVE HS")}
      avgSpeed={text("AVG SPEED")}
      hireCost={text("HIRE COST")}
      consumption={text("CONSUMPTION")}
    />
  );
}

export default suggestedRouteDetails;
