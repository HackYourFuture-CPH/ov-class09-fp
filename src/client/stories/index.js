import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VesselsListStories = storiesOf("VesselList", module).add(
  "Vessel",
  VesselsListStory
);
VesselsListStories.addDecorator(withKnobs);

const VesselTeaserStories = storiesOf("VesselTeaser", module).add(
  "Vessel Teaser",
  VesselTeaserStory
);
VesselTeaserStories.addDecorator(withKnobs);
