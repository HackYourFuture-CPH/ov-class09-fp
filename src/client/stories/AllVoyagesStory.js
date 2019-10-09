import React from "react";
import "@storybook/addon-knobs/register";
import AllVoyagesComponent from "../components/AllVoyages";

import { object } from "@storybook/addon-knobs";

export function AllVoyagesStory() {
  const ongoingvoyages = object("ONGOING VOYAGES", [
    {
      estimated_arrival: "2019-04-01 14:34:05",
      name: "Klocko Inc",
      departure: "Rath-Ortiz",
      destination: "Hickle LLC",
      cost: 279046.8
    },
    {
      estimated_arrival: "2019-03-14 17:52:44",
      name: "Brakus-Dickens",
      departure: "MacGyver Group",
      destination: "Kuhlman Group",
      cost: 296969.61
    },
    {
      estimated_arrival: "2019-07-01 18:35:16",
      name: "Schneider, Green and Ratke",
      departure: "Marvin, Marks and Stroman",
      destination: "Hauck-Denesik",
      cost: 125184.2
    }
  ]);

  const completedvoyages = object("COMPLETED VOYAGES", [
    {
      estimated_arrival: "2019-02-15 16:46:16",
      name: "Considine, Fay and Watsica",
      departure: "Kreiger, Beier and Wilkinson",
      destination: "Metz, Batz and Frami",
      cost: 177307.0
    },
    {
      estimated_arrival: "2018-10-11 09:22:28",
      name: "Corkery LLC",
      departure: "Wisozk-Mann",
      destination: "Upton LLC",
      cost: 117720.9
    },
    {
      estimated_arrival: "2019-01-01 07:35:21",
      name: "Hintz, Beatty and Stamm",
      departure: "Mante, Mosciski and Willms",
      destination: "Hegmann-Schmidt",
      cost: 212517.04
    }
  ]);
  return (
    <AllVoyagesComponent
      ongoingVoyages={ongoingvoyages}
      completedVoyages={completedvoyages}
    />
  );
}
