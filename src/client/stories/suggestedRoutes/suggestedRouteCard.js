import React from "react";
import SuggestedRouteCard from "../../components/SuggestedRoutes/SuggestedRouteCard";
import { text, number } from "@storybook/addon-knobs";

export function suggestedRouteCard() {
  return (
    <SuggestedRouteCard
      id={number("id", 1)}
      time={number("Time", 24)}
      price={number("Price", 104.207)}
      eta={text("ETA", "2020-03-02 06:50:33")}
      sailDays={number("Sail days", 6.5)}
      maxWaveHs={number("Max wave HS", 11.52)}
      avgSpeed={number("Average speed", 23.52)}
      hireCost={number("Hire cost", 66.808)}
      consumption={number("Consumption", 60.6)}
    />
  );
}

export default suggestedRouteCard;
