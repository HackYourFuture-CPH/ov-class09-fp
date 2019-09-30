import React from "react";
import CardTeaser from "../components/CardTeaser";
import { withKnobs, text, number } from "@storybook/addon-knobs";
export function CardTeaserStory() {
  const title = "DATE";
  const date = text("DATE", "2019-08-23");
  return <CardTeaser title={title} data={date} />;
}
