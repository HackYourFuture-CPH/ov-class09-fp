import React from "react";
import SuggestedRouteDetails from "../../components/SuggestedRoutes/SuggestedRouteDetails";
import { text, number } from "@storybook/addon-knobs";

export function suggestedRouteDetails() {
  return (
    <SuggestedRouteDetails
      eta={text("ETA", "2020-03-02 06:50:33")}
      maxWaveHs={number("Max wave HS", 11.52)}
      avgSpeed={number("Average speed", 14.3)}
      hireCost={number("Hire COST", 66.808)}
      hfo={number("HFO consumption", 6.5)}
      lsfo={number("LSFO consumtion", 60.6)}
    />
  );
}

export default suggestedRouteDetails;
