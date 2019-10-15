import React from "react";
import Map from "../components/VesselsOnMap";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function VesselsOnMapStory() {
  const centerMapCoordinates = array("centerMapCoordinates", [
    55.698478,
    12.604377
  ]);
  const pathColor = text("pathColor", "red");
  const displayMarkers = boolean("displayMarkers", true);
  const vessels = object("vessels", [
    { latitude: 55.721114, longitude: 12.646547, vessel_name: "waypoint 1" },
    { latitude: 55.698478, longitude: 12.604377, vessel_name: "waypoint 2" },
    { latitude: 55.687535, longitude: 12.601538, vessel_name: "waypoint 3" },
    { latitude: 55.679846, longitude: 12.596304, vessel_name: "waypoint 4" },
    { latitude: 55.677632, longitude: 12.592699, vessel_name: "waypoint 5" }
  ]);
  const suggestedRoute = object("suggestedRoute", [
    { latitude: 55.721114, longitude: 12.646547, vessel_name: "waypoint 1" },
    { latitude: 55.698478, longitude: 12.604377, vessel_name: "waypoint 2" },
    { latitude: 55.687535, longitude: 12.601538, vessel_name: "waypoint 3" },
    { latitude: 55.679846, longitude: 12.596304, vessel_name: "waypoint 4" },
    { latitude: 55.677632, longitude: 12.592699, vessel_name: "waypoint 5" }
  ]);
  const elapsedRoute = object("elapsedRoute", [
    { latitude: 55.721114, longitude: 12.646547, vessel_name: "waypoint 1" },
    { latitude: 55.698478, longitude: 12.604377, vessel_name: "waypoint 2" },
    { latitude: 55.687535, longitude: 12.601538, vessel_name: "waypoint 3" }
  ]);
  return (
    <Map
      centerMapCoordinates={centerMapCoordinates}
      pathColor={pathColor}
      displayMarkers={displayMarkers}
      vessels={vessels}
      suggestedRoute={suggestedRoute}
      elapsedRoute={elapsedRoute}
    />
  );
}
