import React from "react";
import CreateUser from "../components/CreateUser";
import { text } from "@storybook/addon-knobs";

export function CreateUserStory() {
  const email = text("Email", "EMAIL");
  const data = text("data", "test@test.com");
  const created = text("Created-At", "CREATED DATE");
  const date = text("Date", "2018-12-02");
  const btn = text("Button", "Update");

  return (
    <div>
      <CreateUser />
    </div>
  );
}
