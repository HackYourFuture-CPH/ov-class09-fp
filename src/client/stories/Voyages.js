import React from "react";
import VoyageList from "../components/VoyageList";
import { withKnobs, text, object } from "@storybook/addon-knobs";
export function VoyageListStory() {
  const voyageList = object("vessels", [
    {
      id: 1,
      vesselName: "Yeniser River",
      departureFrom: "Sabetta",
      arrivesAt: "Rotterdam",
      departure_time: "2012-08-17 21:18",
      target_arrival_time: "2012-08-24 06:43"
    },
    {
      id: 2,
      vesselName: "Serenade of the seas",
      departureFrom: "Alesund",
      arrivesAt: "Kristiansand",
      departure_time: "2019-08-22 19:57",
      target_arrival_time: "2019-08-24 07:36"
    },
    {
      id: 3,
      vesselName: "Msc Meraviglia",
      departureFrom: "St Petersbrug",
      arrivesAt: "Kiel",
      departure_time: "2019-08-22 20:18",
      target_arrival_time: "2019-08-24 10:54"
    }
  ]);

  return <VoyageList voyages={voyageList} />;
}
