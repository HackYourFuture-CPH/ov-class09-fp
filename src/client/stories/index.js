import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { StartVoyageStory } from "./StartVoyage";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VoyageStories = storiesOf("StartVoyage", module).add(
  "StartVoyageComponent",
  StartVoyageStory
);
VoyageStories.addDecorator(withKnobs);
