import React from "react";
import RouteInfo from "../components/RouteInfo";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function InfoRoute() {
  return (
    <RouteInfo
      eta={text("ETA")}
      sailDays={text("SAIL DAYS")}
      maxWaveHs={text("MAX WAVE HS")}
      avgSpeed={text("AVG SPEED")}
      hireCost={text("HIRE COST")}
      consumption={text("CONSUMPTION")}
    />
  );
}

export default InfoRoute;
