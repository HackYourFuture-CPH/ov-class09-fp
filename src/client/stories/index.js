import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { SuggestedRouteTableStory } from "./SuggestedRouteTableStory";

import { VoyageDetailsStory } from "./VoyageDetails";
import { DataCardStory } from "./DataCardStory";
import { CardGroupStory } from "./CardGroupStory";

import { VoyageListStory } from "./Voyages";
import { VoyageTeaserStory } from "./VoyageTeaser";

import { CostWidgetStory } from "./CostWidgetStory";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

storiesOf("Selected Table", module)
  .add("Table", SuggestedRouteTableStory)
  .addDecorator(withKnobs);

const VoyageDetailsStories = storiesOf("VoyageDetails", module).add(
  "VoyageDetails",
  VoyageDetailsStory
);
VoyageDetailsStories.addDecorator(withKnobs);

const CardStories = storiesOf("Card", module)
  .add("DataCard", DataCardStory)
  .add("CardGroup", CardGroupStory);
CardStories.addDecorator(withKnobs);

const CostWidgetStories = storiesOf("Cost Widget", module).add(
  "Cost Widget Card",
  CostWidgetStory
);
CostWidgetStories.addDecorator(withKnobs);

const VoyagesListStories = storiesOf("Voyages", module)
  .add("VoyageList", VoyageListStory)
  .add("VoyageTeaser", VoyageTeaserStory);
VoyagesListStories.addDecorator(withKnobs);
