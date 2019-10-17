import React from "react";
import VoyageList from "../components/VoyageList";
import { withKnobs, text, object } from "@storybook/addon-knobs";
export function VoyageListStory() {
  const voyageList = object("vessels", [
    {
      id: 1,
      vessel_Name: "Yeniser River",
      depart_from: "Sabetta",
      arrive_at: "Rotterdam",
      departure_time: "2012-08-17 21:18",
      vessel_reports: [{ eta: "2012-08-24 06:43" }]
    },
    {
      id: 2,
      vessel_Name: "Serenade of the seas",
      depart_from: "Alesund",
      arrive_at: "Kristiansand",
      departure_time: "2019-08-22 19:57",
      vessel_reports: [{ eta: "2019-08-24 07:36" }]
    },
    {
      id: 3,
      vessel_Name: "Msc Meraviglia",
      depart_from: "St Petersbrug",
      arrive_at: "Kiel",
      departure_time: "2019-08-22 20:18",
      vessel_reports: [{ eta: "2019-08-24 10:54" }]
    }
  ]);

  return <VoyageList voyages={voyageList} />;
}
