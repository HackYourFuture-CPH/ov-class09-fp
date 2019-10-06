import React from "react";
import SuggestedRouteDetails from "../../components/SuggestedRoutes/SuggestedRouteDetails";
import { text } from "@storybook/addon-knobs";

export function suggestedRouteDetails() {
  return (
    <SuggestedRouteDetails
      eta={text("ETA")}
      sailDays={text("Sail days")}
      maxWaveHs={text("Max wave HS")}
      avgSpeed={text("Average speed")}
      hireCost={text("Hire cost")}
      consumption={text("Consumption")}
    />
  );
}

export default suggestedRouteDetails;
