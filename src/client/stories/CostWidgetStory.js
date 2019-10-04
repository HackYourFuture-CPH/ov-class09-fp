import React from "react";
import { CardGroup, CardGroupHeader } from "../components/CardGroup";
import DataCard from "../components/DataCard";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export function CostWidgetStory() {
  const titleCard1 = text("title card 1", "Current Cost");
  const titleCard2 = text("title card 2", "Remaining Cost");
  const titleCard3 = text("title card 3", "Total Cost");
  const dataCard1 = number("Current Cost", 269.68);
  const dataCard2 = number("Remaining Cost", 112.32);
  const dataCard3 = "$" + (dataCard1 + dataCard2);

  return (
    <div>
      <CardGroupHeader title="Cost Widget" />
      <CardGroup>
        <DataCard title={titleCard1} data={dataCard1} />
        <DataCard title={titleCard2} data={dataCard2} />
        <DataCard title={titleCard3} data={dataCard3} />
      </CardGroup>
    </div>
  );
}
