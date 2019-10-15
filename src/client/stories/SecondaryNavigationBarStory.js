import React from "react";
import SecondaryNavigationBar from "../components/SecondaryNavigationBar";
import { withKnobs, text } from "@storybook/addon-knobs";

export function SecondaryNavigationBarStory() {
  const userName = text("User Name", "Fowad");
  const userRole = text("User Role", "admin");

  return (
    <div>
      <SecondaryNavigationBar userName={userName} userRole={userRole} />
    </div>
  );
}
