import React from "react";
import SuggestedRouteSummary from "../../components/SuggestedRoutes/SuggestedRouteSummary";
import { number, boolean } from "@storybook/addon-knobs";

export function suggestedRouteSummary() {
  return (
    <SuggestedRouteSummary
      time={number("Time", "26h / +6")}
      price={number("Price", "$104.207/ -$6.208")}
      isSelected={(boolean("Is Selected"), false)}
      handleClick={() => console.log("It Works ;)")}
    />
  );
}
export default suggestedRouteSummary;
