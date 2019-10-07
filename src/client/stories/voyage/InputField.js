import React from "react";
import InputField from ".././../components/voyage/InputField";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function InputFieldStory() {
  const label = text("label", "Numerical Input");
  const step = number("step", 0.01);
  const unit = text("unit", "kr");
  return <InputField label={label} step={step} unit={unit} />;
}
