import React from "react";
import VoyageTeaser from "../components/VoyageTeaser";
import { withKnobs, text, number } from "@storybook/addon-knobs";
export function VoyageTeaserStory() {
  const id = number("id", 10);
  const vesselName = text("Vessel Name", "Yeniser River");
  const departFrom = text("Departure From", "Sabetta");
  const arriveAt = text("Arrives At", "Rotterdam");
  const departureTime = text("Departure Time", "2012-08-17 21:18");
  const eta = text("ETA", "2012-08-24 06:43");

  return (
    <VoyageTeaser
      id={id}
      vessel_name={vesselName}
      depart_from={departFrom}
      arrive_at={arriveAt}
      departure_time={departureTime}
      eta={eta}
    />
  );
}
