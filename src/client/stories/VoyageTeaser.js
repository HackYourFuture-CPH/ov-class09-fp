import React from "react";
import VoyageTeaser from "../components/VoyageTeaser";
import { text } from "@storybook/addon-knobs";
export function VoyageTeaserStory() {
  return (
    <VoyageTeaser
      vesselName={text("Vessel Name", "Yeniser River")}
      departFrom={text("Departure From", "Sabetta")}
      arriveAt={text("Arrives At", "Rotterdam")}
      departureTime={text("ETD", "2012-08-17 21:18")}
      targetArrivalTime={text("ETA", "2012-08-24 06:43")}
      link={text("Link to", "#home")}
    />
  );
}
