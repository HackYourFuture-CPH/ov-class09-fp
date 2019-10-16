import React from "react";
import CostWidget from "../components/CostWidget";
import { number } from "@storybook/addon-knobs";

export function CostWidgetStory() {
  return (
    <CostWidget
      totalCost={number("Total Cost", 200)}
      hfoCost={number("hfo Cost", 10)}
      lsfoCost={number("lsfo Cost", 10)}
      hfoConsumption={number("hfo Consumption", 10)}
      lsfoConsumption={number("lsfo Consumption", 10)}
    />
  );
}
