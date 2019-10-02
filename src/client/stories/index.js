import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { StartVoyageMainStory } from "./voyage/StartVoyageMain";
import { DateTimeStory } from "./voyage/DateTime";
import { InputFieldStory } from "./voyage/InputField";
import { DropdownStory } from "./voyage/Dropdown";
import { NavButtonStory } from "./voyage/NavButton";
import { CheckboxStory } from "./voyage/Checkbox";

import { VesselDetailsStory } from "./VesselDetails";
import { DataCardStory } from "./DataCardStory";
import { CardGroupStory } from "./CardGroupStory";

import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VoyageStories = storiesOf("StartVoyage", module)
  .add("StartVoyage", StartVoyageMainStory)
  .add("DateTimeComponent", DateTimeStory)
  .add("InputFieldComponent", InputFieldStory)
  .add("DropdownComponent", DropdownStory)
  .add("NavButtonComponent", NavButtonStory)
  .add("CheckboxComponent", CheckboxStory);
VoyageStories.addDecorator(withKnobs);
const VesselDetailsStories = storiesOf("VesselDetails", module).add(
  "VesselDetails",
  VesselDetailsStory
);
VesselDetailsStories.addDecorator(withKnobs);

const CardStories = storiesOf("Card", module)
  .add("DataCard", DataCardStory)
  .add("CardGroup", CardGroupStory);
CardStories.addDecorator(withKnobs);

const VesselsListStories = storiesOf("Vessels", module)
  .add("VesselList", VesselsListStory)
  .add("Vessel Teaser", VesselTeaserStory);
VesselsListStories.addDecorator(withKnobs);
