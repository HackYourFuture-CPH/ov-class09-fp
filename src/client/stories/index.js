import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselDetailsStory } from "./VesselDetails";
import { CardTeaserStory } from "./CardTeaserStory";
import { CardGroupStory } from "./CardGroupStory";
storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VesselDetailsStories = storiesOf("VesselDetails", module).add(
  "VesselDetailsComponent",
  VesselDetailsStory
);
VesselDetailsStories.addDecorator(withKnobs);

const CardStories = storiesOf("Card", module)
  .add("CardTeaser", CardTeaserStory)
  .add("CardGroup", CardGroupStory);
CardStories.addDecorator(withKnobs);
