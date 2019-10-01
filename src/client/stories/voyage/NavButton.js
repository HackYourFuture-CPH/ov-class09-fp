import React from "react";
import NavButton from ".././../components/voyage/NavButton";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function NavButtonStory() {
  const label = text("label", "This is test");
  return <NavButton label={label} />;
}
