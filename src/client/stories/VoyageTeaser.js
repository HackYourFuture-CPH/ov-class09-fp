import React from "react";
import VoyageTeaser from "../components/VoyageTeaser";
import { withKnobs, text } from "@storybook/addon-knobs";
export function VoyageTeaserStory() {
  const vesselName = text("Vessel Name", "Yeniser River");
  const departureFrom = text("Departure From", "Sabetta");
  const arrivesAt = text("Arrives At", "Rotterdam");
  const etd = text("ETD", "2012-08-17 21:18");
  const eta = text("ETA", "2012-08-24 06:43");

  return (
    <VoyageTeaser
      vessel_name={vesselName}
      depart_from={departureFrom}
      arrive_at={arrivesAt}
      departure_time={etd}
      target_arrival_time={eta}
    />
  );
}
