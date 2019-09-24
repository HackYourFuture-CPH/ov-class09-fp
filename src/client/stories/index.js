import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselsDetailsStory } from "./VesselsDetails";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VesselsDetailsStories = storiesOf("VesselsDetails", module).add(
  "VesselsDetailsComponent",
  VesselsDetailsStory
);
VesselsDetailsStories.addDecorator(withKnobs);
