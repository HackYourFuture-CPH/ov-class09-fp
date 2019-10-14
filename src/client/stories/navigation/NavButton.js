import React from "react";
import NavButton from "../../components/NavButton";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function NavButtonStory() {
  const label = text("label", "Button");
  return <NavButton label={label} />;
}
