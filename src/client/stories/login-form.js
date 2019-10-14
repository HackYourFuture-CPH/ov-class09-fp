import React from "react";
import LoginForm from "../components/login-form";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

export function LoginFormStory() {
  const email = text("Email", "test@test.com");
  const password = text("password", "test");
  const isLoggedIn = boolean("isLoggedIn", false);

  return (
    <div>
      <LoginForm email={email} password={password} isLoggedIn={isLoggedIn} />
    </div>
  );
}
