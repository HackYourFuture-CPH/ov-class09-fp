import React from "react";
import MapComponent from "../components/MapComponent";
import mapApi from "./data/mapApi";
import MapMarker from "../components/MapMarker";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function VesselsOnMapStory() {
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

  return <MapComponent options={options} />;
}

/*
 //centerMapCoordinates={centerMapCoordinates}
      //zoom={zoom}
      // pathColor={pathColor}
      // displayMarkers={displayMarkers}
      // waypoints={vessels}
      //suggestedRoute={suggestedRoute}
      //elapsedRoute={elapsedRoute}
*/
/* const displayMarkers = boolean("displayMarkers", true);
  const voyagesData = object("vessels", mapApi.voyages);
  let vessels = voyagesData.map(({ vessel_id, vessel_reports }) => {
    return {
      id: vessel_id,
      latitude: vessel_reports.latitude,
      longitude: vessel_reports.longitude
    };
  });*/
