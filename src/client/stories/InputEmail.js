import React from "react";
import InputEmail from "../components/InputEmail";
import { text } from "@storybook/addon-knobs";

export function InputEmailStory() {
  const label = text("label", "Email");

  return <InputEmail label={label} />;
}
