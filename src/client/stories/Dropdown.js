import React from "react";
import Dropdown from "../components/Dropdown";
import {
  withKnobs,
  text,
  boolean,
  number,
  array,
  object
} from "@storybook/addon-knobs";
export function DropdownStory() {
  const label = text("label", "This is a test");
  const portsMap = object("portsMap", [
    { lat: 55.721114, lng: 12.646547, name: "Mumbai" },
    { lat: 55.698478, lng: 12.604377, name: "Rotterdam" }
  ]);
  return <Dropdown label={label} portsMap={portsMap} />;
}
