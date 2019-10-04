import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";
import { suggestedRouteCard } from "./SuggestedRoutes/suggestedRouteCard";
import { suggestedRouteDetails } from "./SuggestedRoutes/suggestedRouteDetails";
import { suggestedRouteSummary } from "./suggestedRoutes/suggestedRouteSummary";
import { suggestetdRoutesList } from "./SuggestedRoutes/suggestetdRoutesList";

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
  .add("suggestedRouteSummary", suggestedRouteSummary)
  .add("suggestedRouteDetails", suggestedRouteDetails)
  .add("suggestedRouteCard", suggestedRouteCard)
  .add("suggestetdRoutesList", suggestetdRoutesList);
DisplaySuggestedRoutes.addDecorator(withKnobs);
