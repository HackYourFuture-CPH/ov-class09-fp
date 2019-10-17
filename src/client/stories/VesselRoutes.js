import React from "react";
import Map from "../components/RoutesMap";
import mapApi from "./data/mapApi";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function VesselRoutesStory() {
  const centerMapCoordinates = array("centerMapCoordinates", [
    55.698478,
    12.604377
  ]);
  const pathColor = text("pathColor", "red");
  const suggestedRouteColor = text("suggestedRouteColor", "orange");
  const elapsedRouteColor = text("elapsedRouteColor", "blue");
  const displayMarkers = boolean("displayMarkers", true);
  const voyageData = object("voyageData", mapApi.voyage);
  const routesData = object("routesData", mapApi.routes);
  const suggestedRoute = [];
  const elapsedRoute = [];

  return (
    <Map
      centerMapCoordinates={centerMapCoordinates}
      //pathColor={pathColor}
      displayMarkers={displayMarkers}
      suggestedRoute={suggestedRoute}
      elapsedRoute={elapsedRoute}
      suggestedRouteColor={suggestedRouteColor}
      elapsedRouteColor={elapsedRouteColor}

      //waypoints={waypoints}
      //suggestedRoute={suggestedRoute}
      //elapsedRoute={elapsedRoute}
    />
  );
}
