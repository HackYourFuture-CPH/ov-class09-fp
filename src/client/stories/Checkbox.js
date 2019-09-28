import React from "react";
import Checkbox from "../components/Checkbox";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function CheckboxStory() {
  const label = text("label", "This is a test");
  return <Checkbox label={label} />;
}
