import React from "react";
import VoyageDetails from "../components/VoyageDetails";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export function VoyageDetailsStory() {
  const vesselName = text("Vessel Name", "Yeniser River");
  const departsFrom = text("Departs From", "Sabetta");
  const arrivesAt = text("Arrives At", "Rotterdam");
  const etd = text("ETD", "2012-08-17 21:18");
  const eta = text("ETA", "2012-08-24 06:43");
  const date = text("Date", "2019-08-23");
  const latitude = number("Latitude", "55.26214");
  const longitude = text("Longitude", "5.38395E");
  const hsfo = number("HSFO", 25);
  const ulsfo = number("ULSFO", 7);
  return (
    <VoyageDetails
      vesselName={vesselName}
      departureFrom={departsFrom}
      arrivesAt={arrivesAt}
      etd={etd}
      eta={eta}
      date={date}
      latitude={latitude}
      longitude={longitude}
      hsfo={hsfo}
      ulsfo={ulsfo}
    />
  );
}
