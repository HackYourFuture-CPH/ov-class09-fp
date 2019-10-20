import React from "react";
import SuggestedRouteSummary from "../../components/SuggestedRoutes/SuggestedRouteSummary";
import { number, boolean, text } from "@storybook/addon-knobs";

export function suggestedRouteSummary() {
  return (
    <SuggestedRouteSummary
      id={number("id", 1)}
      duration={text("Time", "24h")}
      price={number("Price", 104)}
      isSelected={boolean("Is Selected", true)}
      handleClick={() => console.log("It Works ;)")}
    />
  );
}
export default suggestedRouteSummary;
