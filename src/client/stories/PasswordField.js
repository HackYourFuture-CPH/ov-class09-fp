import React from "react";
import PasswordField from "../components/PasswordField";
import { text, name } from "@storybook/addon-knobs";

export function PasswordFieldStory() {
  const label = text("label", "Password");

  return <PasswordField label={label} />;
}
