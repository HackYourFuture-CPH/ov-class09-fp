import React from "react";
import Checkbox from ".././../components/voyage/Checkbox";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function CheckboxStory() {
  const label = text("label", "Checkbox");
  return <Checkbox label={label} />;
}
