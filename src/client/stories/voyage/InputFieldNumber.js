import React from "react";
import InputFieldNumber from "../../components/voyage/InputFieldNumber";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function InputFieldNumberStory() {
  const label = text("label", "Numerical Input");
  const step = number("step", 0.01);
  const unit = text("unit", "kr");
  return <InputFieldNumber label={label} step={step} unit={unit} />;
}
