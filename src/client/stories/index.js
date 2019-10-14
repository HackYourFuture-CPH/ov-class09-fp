import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { StartVoyageStory } from "./StartVoyage";
import { DateTimeStory } from "./DateTime";
import { InputFieldNumberStory } from "./InputFieldNumber";
import { DropdownStory } from "./Dropdown";
import { NavButtonStory } from "./navigation/NavButton";
import { CheckboxStory } from "./Checkbox";
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

const NavigationStories = storiesOf("Navigation", module).add(
  "ButtonComponent",
  NavButtonStory
);
NavigationStories.addDecorator(withKnobs);

const VoyageStories = storiesOf("Start Voyage", module)
  .add("StartVoyage", StartVoyageStory)
  .add("DateTimeComponent", DateTimeStory)
  .add("InputFieldNumberComponent", InputFieldNumberStory)
  .add("DropdownComponent", DropdownStory)
  .add("CheckboxComponent", CheckboxStory);
VoyageStories.addDecorator(withKnobs);

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
