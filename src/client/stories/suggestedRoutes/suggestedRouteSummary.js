import React from "react";
import SuggestedRouteSummary from "../../components/SuggestedRoutes/SuggestedRouteSummary";
import { text, boolean } from "@storybook/addon-knobs";

export function suggestedRouteSummary() {
  console.log("hi");
  return (
    <SuggestedRouteSummary
      time={text("Time", "26h / +6")}
      price={text("Price", "$104.207/ -$6.208")}
      isSelected={(boolean("Is Selected"), false)}
    />
  );
}
export default suggestedRouteSummary;
