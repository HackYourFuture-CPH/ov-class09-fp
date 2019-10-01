import React from "react";
import RouteCard from "./RouteCard";
import RouteInfo from "./RouteInfo";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function RouteTable() {
  return (
    <div>
      <RouteCard />
      <RouteInfo />
    </div>
  );
}

export default RouteTable;
