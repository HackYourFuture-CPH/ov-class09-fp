import React from "react";
import UserDetail from "../components/UserDetail";
import { text } from "@storybook/addon-knobs";

export function UserDetailStory() {
  const email = text("email", "test@test.com");
  const date = text("Date", "2018-12-02");

  return (
    <div>
      <UserDetail
        email={"EMAIL"}
        email={email}
        created={"CREATED DATE"}
        date={date}
        btnTitle={"Update"}
      />
    </div>
  );
}
