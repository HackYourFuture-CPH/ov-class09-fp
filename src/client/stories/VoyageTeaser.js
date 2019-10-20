import React from "react";
import VoyageTeaser from "../components/VoyageTeaser";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
export function VoyageTeaserStory() {
  const vesselName = text("Vessel Name", "Yeniser River");
  const departureFrom = text("Departure From", "Sabetta");
  const arrivesAt = text("Arrives At", "Rotterdam");
  const departure_time = text("ETD", "2012-08-17 21:18");
  const target_arrival_time = text("ETA", "2012-08-24 06:43");

  return (
    <VoyageTeaser
      vesselName={vesselName}
      departureFrom={departureFrom}
      arrivesAt={arrivesAt}
      departure_time={departure_time}
      target_arrival_time={target_arrival_time}
      activeDetails={boolean("activeDetails", false)}
    />
  );
}
