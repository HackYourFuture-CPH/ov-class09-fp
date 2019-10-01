import React from "react";
import data from ".././../components/voyage/data";
import StartVoyage from ".././../components/voyage/StartVoyage";

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function StartVoyageStory() {
  // input field props
  const min_Draft = number("min_Draft", data.min_Draft);
  const max_Draft = number("max_Draft", data.max_Draft);
  const draft_StepSize = number("draft_StepSize", data.draft_StepSize);
  const draft_Unit = text("draft_Unit", data.draft_Unit);
  const min_fuelCost = number("min_fuelCost", data.min_fuelCost);
  const max_fuelCost = number("max_fuelCost", data.max_fuelCost);
  const fuelCost_stepSize = number("fuelCost_stepSize", data.fuelCost_stepSize);
  const fuelCost_Unit = text("fuelCost_Unit", data.fuelCost_Unit);
  const min_rate = number("min_fuelCost", data.min_rate);
  const max_rate = number("max_fuelCost", data.max_rate);
  const rate_stepSize = number("fuelCost_stepSize", data.rate_stepSize);
  const rate_Unit = text("fuelCost_Unit", data.rate_Unit);
  //const accuracy = number("accuracy", 2.00);
  // vessels list
  const vessels = object("vesselList", data.vessels);
  // harbour list info
  const ports = object("ports", data.ports);
  // optimisation type
  const optimisationType = object("optimisationType", data.optimisationType);
  return (
    <StartVoyage
      ports={ports}
      vessels={vessels}
      optimisationType={optimisationType}
      min_Draft={min_Draft}
      max_Draft={max_Draft}
      draft_StepSize={draft_StepSize}
      draft_Unit={draft_Unit}
      min_fuelCost={min_fuelCost}
      max_fuelCost={max_fuelCost}
      fuelCost_stepSize={fuelCost_stepSize}
      fuelCost_Unit={fuelCost_Unit}
      min_rate={min_rate}
      max_rate={max_rate}
      rate_stepSize={rate_stepSize}
      rate_Unit={rate_Unit}
      //accuracy={accuracy}
    />
  );
}
