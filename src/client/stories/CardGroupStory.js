import React from "react";
import { CardGroup, CardGroupHeader } from "../components/CardGroup";
import CardTeaser from "../components/CardTeaser";
import { withKnobs, text, number } from "@storybook/addon-knobs";

export function CardGroupStory() {
  const title = text("Header", "POSITION");
  const titleCard1 = text("title card 1", "DATE");
  const titleCard2 = text("title card 2", "LATITUDE");
  const titleCard3 = text("title card 3", "LONGITUDE");
  const dataCard1 = number("dataCard1", "55.26214");
  const dataCard2 = text("dataCard2", "5.38395E");
  const dataCard3 = text("dataCard3", "2019-08-23");

  return (
    <div>
      <CardGroupHeader title={title} />
      <CardGroup>
        <CardTeaser title={titleCard1} data={dataCard1} />
        <CardTeaser title={titleCard2} data={dataCard2} />
        <CardTeaser title={titleCard3} data={dataCard3} />
      </CardGroup>
    </div>
  );
}
