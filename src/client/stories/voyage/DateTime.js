import React from "react";
import DateTime from ".././../components/voyage/DateTime";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function DateTimeStory() {
  const label = text("label", "DateTime Component");
  return <DateTime label={label} />;
}
