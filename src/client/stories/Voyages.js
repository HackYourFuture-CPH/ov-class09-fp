import React from "react";
import VoyageList from "../components/VoyageList";
import { object } from "@storybook/addon-knobs";

export function VoyageListStory() {
  const voyageList = object("vessels", [
    {
      id: 1,
      vesselName: "Yeniser River",
      departFrom: "Sabetta",
      arriveAt: "Rotterdam",
      departureTime: "2012-08-17 21:18",
      targetArrivalTime: "2012-08-24 06:43"
    },
    {
      id: 2,
      vesselName: "Serenade of the seas",
      departFrom: "Alesund",
      arriveAt: "Kristiansand",
      departureTime: "2019-08-22 19:57",
      targetArrivalTime: "2019-08-24 07:36"
    },
    {
      id: 3,
      vesselName: "Msc Meraviglia",
      departFrom: "St Petersbrug",
      arriveAt: "Kiel",
      departureTime: "2019-08-22 20:18",
      targetArrivalTime: "2019-08-24 10:54"
    }
  ]);

  return <VoyageList voyages={voyageList} />;
}
