import React from "react";
import SecondaryNavigationBar from "../components/SecondaryNavigationBar";
import { withKnobs, text } from "@storybook/addon-knobs";
//import { getTokenData } from "../utilities/getTokenData";

export function SecondaryNavigationBarStory() {
  const userName = text("User Name", "Fowad");
  const userRole = text("User Role", "admin");

  //let userData = getTokenData();

  return (
    <div>
      <SecondaryNavigationBar userName={userName} userRole={userRole} />
    </div>
  );
}
