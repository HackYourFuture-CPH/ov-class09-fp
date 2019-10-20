import React from "react";
import InputText from "../components/InputText";
import { text } from "@storybook/addon-knobs";

export function InputTextStory() {
  const label = text("label", "Email");

  return <InputText label={label} />;
}
