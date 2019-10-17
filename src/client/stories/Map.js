import React from "react";
import Map from "../components/Map";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function MapStory() {
  const centerMapCoordinates = array("centerMapCoordinates", [
    55.698478,
    12.604377
  ]);
  // const pathColor = text("pathColor", "red");
  const displayMarkers = boolean("displayMarkers", true);
  const vessels = object("vessels", [
    {
      vessel_name: "Seven Seas",
      vessel_reports: [
        {
          latitude: 45.24234,
          longitude: 101.323
        }
      ]
    },
    {
      vessel_name: "abcd",
      vessel_reports: [
        {
          latitude: 40.14423,
          longitude: 45.2711
        }
      ]
    },
    {
      vessel_name: "efgs",
      vessel_reports: [
        {
          latitude: 38.46613,
          longitude: 68.80533
        }
      ]
    }
  ]);
  // const suggestedRoute = object("suggestedRoute", [
  //   { latitude: 55.721114, longitude: 12.646547 },
  //   { latitude: 55.698478, longitude: 12.604377 },
  //   { latitude: 55.687535, longitude: 12.601538 },
  //   { latitude: 55.679846, longitude: 12.596304 },
  //   { latitude: 55.677632, longitude: 12.592699 }
  // ]);
  // const elapsedRoute = object("elapsedRoute", [
  //   { latitude: 55.721114, longitude: 12.646547 },
  //   { latitude: 55.698478, longitude: 12.604377 },
  //   { latitude: 55.687535, longitude: 12.601538 }
  // ]);
  return (
    <Map
      centerMapCoordinates={centerMapCoordinates}
      // pathColor={pathColor}
      displayMarkers={displayMarkers}
      vessels={vessels}
      // suggestedRoute={suggestedRoute}
      // elapsedRoute={elapsedRoute}
    />
  );
}
