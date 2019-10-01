import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";
import { RouteCard } from "./RouteCard";
import { InfoRoute } from "./RouteInfo";
import { RouteTable } from "./RouteTable";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VesselsListStories = storiesOf("Vessels", module)
  .add("VesselList", VesselsListStory)
  .add("Vessel Teaser", VesselTeaserStory);
VesselsListStories.addDecorator(withKnobs);

const TableRoute = storiesOf("Display route", module)
  .add("RouteCard", RouteCard)
  .add("RouteInfo", InfoRoute)
  .add("RouteTable", RouteTable);
TableRoute.addDecorator(withKnobs);
