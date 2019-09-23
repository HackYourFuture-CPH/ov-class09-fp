import React from "react";
import VesselsUI from "../components/VesselsUI";
import { withKnobs, text } from "@storybook/addon-knobs";
export function VesselsStory() {
  const vesselName = text("Vessel Name", "Yeniser River");
  const departureFrom = text("Departure From", "Sabetta");
  const arrivesAt = text("Arrives At", "Rotterdam");
  const etd = text("ETD", "2012-08-17 21:18");
  const eta = text("ETA", "2012-08-24 06:43");

  return (
    <VesselsUI
      vesselName={vesselName}
      departureFrom={departureFrom}
      arrivesAt={arrivesAt}
      etd={etd}
      eta={eta}
    />
  );
}
