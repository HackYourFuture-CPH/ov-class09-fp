import React from "react";
import SuggestedRouteSummary from "../../components/SuggestedRoutes/SuggestedRouteSummary";
import { number, boolean } from "@storybook/addon-knobs";

export function suggestedRouteSummary() {
  return (
    <SuggestedRouteSummary
      id={number("id", 1)}
      time={number("Time", 24)}
      price={number("Price", 104)}
      isSelected={(boolean("Is Selected"), false)}
      handleClick={() => console.log("It Works ;)")}
    />
  );
}
export default suggestedRouteSummary;
