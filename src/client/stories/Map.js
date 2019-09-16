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
  const pathColor = text("pathColor", "red");
  const displayMarkers = boolean("displayMarkers", true);
  const waypoints = object("waypoints", [
    { lat: 55.721114, lng: 12.646547, waypointMessage: "waypoint 1" },
    { lat: 55.698478, lng: 12.604377, waypointMessage: "waypoint 2" },
    { lat: 55.687535, lng: 12.601538, waypointMessage: "waypoint 3" },
    { lat: 55.679846, lng: 12.596304, waypointMessage: "waypoint 4" },
    { lat: 55.677632, lng: 12.592699, waypointMessage: "waypoint 5" }
  ]);
  return (
    <Map
      centerMapCoordinates={centerMapCoordinates}
      pathColor={pathColor}
      displayMarkers={displayMarkers}
      waypoints={waypoints}
    />
  );
}
