import React from "react";
import "@storybook/addon-knobs/register";
import SuggestedRouteTable from "../components/SuggestedRouteTable";

import { object } from "@storybook/addon-knobs";

export function SuggestedRouteTableStory() {
  const data = object("Data", [
    {
      createdAt: "2019-02-21 01:58:33",
      latitude: 37.1270988,
      longitude: -8.2439177,
      speed: 16,
      rpm: 67
    },
    {
      createdAt: "2018-12-31 15:08:42",
      latitude: 26.630845,
      longitude: 106.750625,
      speed: 19,
      rpm: 93
    },
    {
      createdAt: "2019-01-01 09:08:50",
      latitude: 28.650932,
      longitude: 86.435767,
      speed: 19,
      rpm: 61
    }
  ]);
  return (
    <SuggestedRouteTable
      data={data}
      tableNames={["DATE", "LATITUDE", "LONGTIDUE", "SPEED", "EST.RPM"]}
    />
  );
}
