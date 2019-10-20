import React from "react";
import MapComponent from "../components/MapComponent";
import { number, array, object } from "@storybook/addon-knobs";

export function MapVoyagesList() {
  const vesselReports = [
    {
      id: 1,
      longitude: 12.60955810546875,
      latitude: 55.697711785689854
    },
    {
      id: 2,
      longitude: 12.71392822265625,
      latitude: 55.77039358162004
    },
    {
      id: 3,
      longitude: 12.601318359374998,
      latitude: 55.94458588614092
    },
    {
      id: 4,
      longitude: 12.645263671875,
      latitude: 56.05516872561129
    },
    {
      id: 5,
      longitude: 12.28546142578125,
      latitude: 56.19295271544726
    },
    {
      id: 6,
      longitude: 11.1181640625,
      latitude: 58.03137242177637
    },
    {
      id: 7,
      longitude: 5.42724609375,
      latitude: 56.992882804633986
    },
    {
      id: 8,
      longitude: 3.44970703125,
      latitude: 52.64306343665892
    },
    {
      id: 9,
      longitude: 3.955078125,
      latitude: 51.83577752045248
    }
  ];

  const mapOptions = {
    centerMapCoordinates: [12.5244140625, 55.640398956687356],
    zoom: 1,
    style: {
      color: {
        suggestedRoute: "#F8AA13",
        elapsedRoute: "#1353F8"
      },
      marker: {
        markerComponent: null,
        color: "blue",
        fill: true,
        fillColor: "blue",
        fillOpacity: 0.8,
        radius: 4
      },
      polyline: {
        dashArray: "10,5",
        lineJoin: "round",
        weight: 5,
        opacity: 0.7,
        color: "blue",
        stroke: true
      }
    }
  };

  return <MapComponent vesselReports={vesselReports} options={mapOptions} />;
}
