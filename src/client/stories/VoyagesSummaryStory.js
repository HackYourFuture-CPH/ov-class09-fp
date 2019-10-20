import React from "react";
import "@storybook/addon-knobs/register";
import VoyageSummary from "../components/VoyagesSummary";

import { object } from "@storybook/addon-knobs";

export function VoyagesSummaryStory() {
  const data = object("Data", [
    {
      date: "2019-02-21 01:58:33",
      name: "SS Martha",
      departure: 1,
      destination: 3,
      cost: 67.1231
    },
    {
      date: "2018-12-31 15:08:42",
      name: "MS Marie",
      departure: 2,
      destination: 2,
      cost: 93.3123
    },
    {
      date: "2019-01-01 09:08:50",
      name: "Boaty Mcboatface",
      departure: 3,
      destination: 1,
      cost: 61.0976
    }
  ]);
  return [
    <VoyageSummary
      data={data}
      name="Ongoing Voyages"
      tableNames={[
        "ESTIMATED ARRIVAL",
        "NAME",
        "DEPARTURE",
        "DESTINATION",
        "COST"
      ]}
    />,
    <VoyageSummary
      data={data}
      name="Completed Voyages"
      tableNames={["ARRIVED", "NAME", "DEPARTURE", "DESTINATION", "COST"]}
    />,
    <VoyageSummary
      data={data}
      name="Started Voyages"
      tableNames={[
        "ESTIMATED ARRIVAL",
        "NAME",
        "DEPARTURE",
        "DESTINATION",
        "COST"
      ]}
    />
  ];
}
