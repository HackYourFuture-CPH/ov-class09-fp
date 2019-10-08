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
      etd: "2012-08-17 21:18",
      eta: "2012-08-24 06:43"
    },
    {
      id: 2,
      vesselName: "Serenade of the seas",
      departureFrom: "Alesund",
      arrivesAt: "Kristiansand",
      etd: "2019-08-22 19:57",
      eta: "2019-08-24 07:36"
    },
    {
      id: 3,
      vesselName: "Msc Meraviglia",
      departureFrom: "St Petersbrug",
      arrivesAt: "Kiel",
      etd: "2019-08-22 20:18",
      eta: "2019-08-24 10:54"
    }
  ]);
  return <VoyageList voyages={voyageList} />;
}
