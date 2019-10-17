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
export function MapVoyageDetails() {
  const options = object("options", {
    centerMapCoordinates: array("centerMapCoordinates", [55.698478, 12.604377]),
    zoom: number("zoom", 1),
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
          latitude: 46.24234,
          longitude: 111.323,
          suggested_routes: [
            {
              suggested_route_id: 22,
              waypoints: [
                {
                  latitude: 27.52434,
                  longitude: 87.2323
                },
                {
                  latitude: 29.52434,
                  longitude: 87.2323
                }
              ]
            },
            {
              suggested_route_id: 23,
              waypoints: [
                {
                  latitude: 27.52434,
                  longitude: 87.2323
                },
                {
                  latitude: 29.52434,
                  longitude: 87.2323
                }
              ]
            },
            {
              suggested_route_id: 24,
              waypoints: [
                {
                  latitude: 27.52434,
                  longitude: 87.2323
                },
                {
                  latitude: 29.52434,
                  longitude: 87.2323
                }
              ]
            }
          ]
        },
        {
          latitude: 55.24234,
          longitude: 110.323,
          suggested_routes: [
            {
              suggested_route_id: 22,
              waypoints: [
                {
                  latitude: 27.52434,
                  longitude: 87.2323
                },
                {
                  latitude: 29.52434,
                  longitude: 87.2323
                }
              ]
            }
          ]
        },
        {
          latitude: 40.24234,
          longitude: 121.323,
          suggested_routes: []
        },
        {
          latitude: 65.24234,
          longitude: 100.323,
          suggested_routes: []
        }
      ]
    }
  ];

  return <Map options={options} voyages={voyages} />;
}
