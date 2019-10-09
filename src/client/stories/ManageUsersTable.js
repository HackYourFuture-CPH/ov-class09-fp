import React from "react";
import ManageUsersTable from "../components/ManageUsersTable";
import { text } from "@storybook/addon-knobs";

export function ManageUsersTableStory() {
  const email = text("Email", "EMAIL");
  const data = text("data", "test@test.com");
  const created = text("Created-At", "CREATED DATE");
  const date = text("Date", "2018-12-02");
  const btn = text("Button", "Update");

  return (
    <div>
      <ManageUsersTable users={[1, 2, 3, 4]} />
    </div>
  );
}
