import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { TableStory } from "../components/Table";

import { VesselDetailsStory } from "./VesselDetails";
import { DataCardStory } from "./DataCardStory";
import { CardGroupStory } from "./CardGroupStory";

import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";

import { CostWidgetStory } from "./CostWidgetStory";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

storiesOf("Table", module)
  .addDecorator(withKnobs)
  .add("Selected Route Table", TableStory);

const VesselDetailsStories = storiesOf("VesselDetails", module).add(
  "VesselDetails",
  VesselDetailsStory
);
VesselDetailsStories.addDecorator(withKnobs);

const CardStories = storiesOf("Card", module)
  .add("DataCard", DataCardStory)
  .add("CardGroup", CardGroupStory);
CardStories.addDecorator(withKnobs);

const CostWidgetStories = storiesOf("Cost Widget", module).add(
  "Cost Widget Card",
  CostWidgetStory
);
CostWidgetStories.addDecorator(withKnobs);

const VesselsListStories = storiesOf("Vessels", module)
  .add("VesselList", VesselsListStory)
  .add("Vessel Teaser", VesselTeaserStory);
VesselsListStories.addDecorator(withKnobs);
