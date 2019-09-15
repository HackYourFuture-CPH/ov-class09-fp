import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import Map from "../components/Map";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello there Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

const centerMapCoordinates = [55.698478, 12.604377];
const pathColor = "red";
const displayMarkers = true;
const waypoints = [
  { lat: 55.721114, lng: 12.646547, waypointMessage: "waypoint 1" },
  { lat: 55.698478, lng: 12.604377, waypointMessage: "waypoint 2" },
  { lat: 55.687535, lng: 12.601538, waypointMessage: "waypoint 3" },
  { lat: 55.679846, lng: 12.596304, waypointMessage: "waypoint 4" },
  { lat: 55.677632, lng: 12.592699, waypointMessage: "waypoint 5" }
];

storiesOf("Map", module).add("MapComponent", () => (
  <Map
    centerMapCoordinates={centerMapCoordinates}
    pathColor={pathColor}
    displayMarkers={displayMarkers}
    waypoints={waypoints}
  />
));
