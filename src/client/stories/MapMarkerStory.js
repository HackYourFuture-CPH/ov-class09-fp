import React from "react";
import MapMarker from "../components/MapMarker";
import { color, boolean, select } from "@storybook/addon-knobs";

export function MapMarkerStory() {
  const fillColor = color("Fill Color", "#1353F8");
  const isSelected = boolean("Is selected", false);
  const size = select("Size", { Small: "sm", Medium: "md", Large: "lg" }, "md");

  return (
    <MapMarker fillColor={fillColor} size={size} isSelected={isSelected} />
  );
}
