import React from "react";
import data from "../data/data";
import StartVoyage from ".././../components/voyage/StartVoyage";

import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";

export function StartVoyageStory() {
  const vessels = object("vesselList", data.vessels);
  const ports = object("ports", data.ports);
  const voyages = object("optimisationType", data.voyages);
  return <StartVoyage ports={ports} vessels={vessels} voyages={voyages} />;
}
