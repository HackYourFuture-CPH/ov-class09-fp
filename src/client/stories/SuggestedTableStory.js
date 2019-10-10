import React from "react";
import "@storybook/addon-knobs/register";
import SelectedTableComponent from "../components/SelectedTable";

import { object } from "@storybook/addon-knobs";

export function SuggestedTableStory() {
  const data = object("Data", [
    {
      date: "2019-02-21 01:58:33",
      latitude: 37.1270988,
      longitude: -8.2439177,
      speed: 16,
      estimated_rpm: 67
    },
    {
      date: "2018-12-31 15:08:42",
      latitude: 26.630845,
      longitude: 106.750625,
      speed: 19,
      estimated_rpm: 93
    },
    {
      date: "2019-01-01 09:08:50",
      latitude: 28.650932,
      longitude: 86.435767,
      speed: 19,
      estimated_rpm: 61
    }
  ]);
  return <SelectedTableComponent data={data} />;
}