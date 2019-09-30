import React from "react";
//import React, { Component } from "react";
import StartVoyage from "../routes/StartVoyage";
import data from "../components/voyage/data";

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

console.log(data);

export function StartVoyageStory() {
  // input field props
  const min_Draft = number("min_Draft", data.min_Draft);
  const max_Draft = number("max_Draft", data.max_Draft);
  const draft_StepSize = number("draft_StepSize", data.draft_StepSize);
  const draft_Unit = text("draft_Unit", data.draft_Unit);
  const min_fuelCost = number("min_fuelCost", data.min_fuelCost);
  const max_fuelCost = number("max_fuelCost", data.max_fuelCost);
  const fuelCost_stepSize = number("fuelCost_stepSize", data.fuelCost_stepSize);
  //const accuracy = number("accuracy", 2.00);
  const fuelCost_Unit = text("fuelCost_Unit", data.fuelCost_Unit);
  // vessels list
  const vessels = object("vesselList", data.vessel);

  // harbour list info
  const portNames = object("harbour", data.harbour);
  return (
    <StartVoyage
      portNames={portNames}
      vessels={vessels}
      min_Draft={min_Draft}
      max_Draft={max_Draft}
      draft_StepSize={draft_StepSize}
      draft_Unit={draft_Unit}
      min_fuelCost={min_fuelCost}
      max_fuelCost={max_fuelCost}
      fuelCost_stepSize={fuelCost_stepSize}
      //accuracy={accuracy}
      fuelCost_Unit={fuelCost_Unit}
    />
  );
}
