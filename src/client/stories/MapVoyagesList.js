import React from "react";
import Map from "../components/Map";
import MapMarker from "../components/Marker";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function MapVoyagesList() {
  const options = object("options", {
    centerMapCoordinates: array("centerMapCoordinates", [55.698478, 12.604377]),
    zoom: number("zoom", 12),
    style: object(
      "color",
      {
        suggestedRoute: "#F8AA13",
        elapsedRoute: "#1353F8"
      },
      "marker",
      {
        MarkerComponent: MapMarker,
        defaultSize: "sm",
        selectedSize: "md"
      }
    )
  });

  const voyages = [
    {
      vessel_id: 23,
      vessel_reports: [
        {
          latitude: 55.721114,
          longitude: 12.646547
        }
      ]
    },
    {
      vessel_id: 24,
      vessel_reports: [
        {
          latitude: 55.698478,
          longitude: 12.604377
        }
      ]
    },
    {
      vessel_id: 25,
      vessel_reports: [
        {
          latitude: 55.687535,
          longitude: 12.601538
        }
      ]
    }
  ];

  return <Map options={options} voyages={voyages} />;
}
