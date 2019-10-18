import React from "react";
import data from "./data/data";
import StartVoyage from "../components/StartVoyage";

import { object } from "@storybook/addon-knobs";

export function StartVoyageStory() {
  const vessels = object("vesselList", data.vessels);
  const ports = object("ports", data.ports);
  const voyages = object("optimisationType", data.voyages);
  return <StartVoyage ports={ports} vessels={vessels} voyages={voyages} />;
}
