import React from "react";
import SuggestedRouteCard from "../../components/SuggestedRoutes/SuggestedRouteCard";
import { text, number } from "@storybook/addon-knobs";

export function suggestedRouteCard() {
  return (
    <SuggestedRouteCard
      time={number("Time", "26h / +6")}
      price={number("Price", "$104.207/ -$6.208")}
      eta={text("ETA", "2020-03-02 06:50:33")}
      sailDays={number("Sail days", "6.5")}
      maxWaveHs={number("Max wave HS", "11.52")}
      avgSpeed={number("Average speed", "23.52")}
      hireCost={number("Hire cost", "$66.808")}
      consumption={number("Consumption", "$60.600")}
    />
  );
}

export default suggestedRouteCard;
