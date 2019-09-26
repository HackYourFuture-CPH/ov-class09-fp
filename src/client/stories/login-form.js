import React from "react";
import LoginForm from "../components/login-form/login-form";
import { Button } from "@storybook/react/demo";
import { withKnobs, text } from "@storybook/addon-knobs";

export function LoginFormStory() {
  const email = text("Email", "test@test.com");
  const password = text("password", "test");

  return (
    <div>
      <LoginForm Email={email} Password={password} />
      <Button>Login</Button>
    </div>
  );
}
