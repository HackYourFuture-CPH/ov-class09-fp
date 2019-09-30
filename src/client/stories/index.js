import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { StartVoyageStory } from "./StartVoyage";
import { DropdownStory } from "./Dropdown";
import { NavButtonStory } from "./NavButton";
import { CheckboxStory } from "./Checkbox";
import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

storiesOf("Dropdown", module)
  .add("DropdownComponent", DropdownStory)
  .addDecorator(withKnobs);

storiesOf("NavButton", module)
  .add("NavButtonComponent", NavButtonStory)
  .addDecorator(withKnobs);

storiesOf("Checkbox", module)
  .add("CheckboxComponent", CheckboxStory)
  .addDecorator(withKnobs);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VoyageStories = storiesOf("StartVoyage", module).add(
  "StartVoyageComponent",
  StartVoyageStory
);
VoyageStories.addDecorator(withKnobs);
const VesselsListStories = storiesOf("Vessels", module)
  .add("VesselList", VesselsListStory)
  .add("Vessel Teaser", VesselTeaserStory);
VesselsListStories.addDecorator(withKnobs);
