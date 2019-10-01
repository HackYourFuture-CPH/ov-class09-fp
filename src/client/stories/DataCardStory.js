import React from "react";
import DataCard from "../components/DataCard";
import { withKnobs, text, number } from "@storybook/addon-knobs";
export function DataCardStory() {
  const title = "DATE";
  const date = text("DATE", "2019-08-23");
  return <DataCard title={title} data={date} />;
}
