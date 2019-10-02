import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";
import { suggestedRouteCard } from "./RouteList/suggestedRouteCard";
import { suggestedRouteInfo } from "./RouteList/suggestedRouteInfo";
import { suggestedRouteBox } from "./RouteList/suggestedRouteBox";
import { suggestetdRoutesList } from "./RouteList/suggestetdRoutesList";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VesselsListStories = storiesOf("Vessels", module)
  .add("VesselList", VesselsListStory)
  .add("Vessel Teaser", VesselTeaserStory);
VesselsListStories.addDecorator(withKnobs);

const DisplaySuggestedRoutes = storiesOf("Display Suggested Routes", module)
  .add("suggestedRouteCard", suggestedRouteCard)
  .add("suggestedRouteInfo", suggestedRouteInfo)
  .add("suggestedRouteBox", suggestedRouteBox)
  .add("suggestetdRoutesList", suggestetdRoutesList);
DisplaySuggestedRoutes.addDecorator(withKnobs);
