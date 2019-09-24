import React from "react";
import VesselsDetails from "../components/VesselsDetails";
import { withKnobs, text, number } from "@storybook/addon-knobs";
export function VesselsDetailsStory() {
  const vesselName = text("Vessel Name", "Yeniser River");
  const departureFrom = text("Departure From", "Sabetta");
  const arrivesAt = text("Arrives At", "Rotterdam");
  const etd = text("ETD", "2012-08-17 21:18");
  const eta = text("ETA", "2012-08-24 06:43");
  const date = text("DATE", "2019-08-23");
  const lat = number("LATTITUDE", "55.26214");
  const lon = text("LONGITUDE", "5.38395E");
  const hsfo = number("HSFO", 25);
  const lsfo = number("ISFO", 7);
  return (
    <VesselsDetails
      vesselName={vesselName}
      departureFrom={departureFrom}
      arrivesAt={arrivesAt}
      etd={etd}
      eta={eta}
      date={date}
      lat={lat}
      lon={lon}
      hsfo={hsfo}
      lsfo={lsfo}
    />
  );
}
