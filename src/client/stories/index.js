import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { MapMarkerStory } from "./MapMarkerStory";

import { VoyageDetailsStory } from "./VoyageDetails";
import { DataCardStory } from "./DataCardStory";
import { CardGroupStory } from "./CardGroupStory";

import { VoyageListStory } from "./Voyages";
import { VoyageTeaserStory } from "./VoyageTeaser";

import { CostWidgetStory } from "./CostWidgetStory";
import { LoginFormStory } from "./login-form";

import { ButtonStory, LogoutButtonStory } from "./Buttons";
import { suggestedRouteSummary } from "./suggestedRoutes/suggestedRouteSummary";
import { suggestedRouteDetails } from "./suggestedRoutes/suggestedRouteDetails";
import { suggestedRouteCard } from "./suggestedRoutes/suggestedRouteCard";
import { suggestedRoutesList } from "./suggestedRoutes/suggestedRoutesList";

const MapStories = storiesOf("Map", module)
  .add("Map", MapStory)
  .add("Map Marker", MapMarkerStory);
MapStories.addDecorator(withKnobs);

const VoyageDetailsStories = storiesOf("VoyageDetails", module).add(
  "VoyageDetails",
  VoyageDetailsStory
);
VoyageDetailsStories.addDecorator(withKnobs);

const CardStories = storiesOf("Card", module)
  .add("DataCard", DataCardStory)
  .add("CardGroup", CardGroupStory)
  .add("Cost Widget Card", CostWidgetStory);
CardStories.addDecorator(withKnobs);

const VoyagesListStories = storiesOf("Voyages", module)
  .add("VoyageList", VoyageListStory)
  .add("VoyageTeaser", VoyageTeaserStory);
VoyagesListStories.addDecorator(withKnobs);

const SuggestedRouteSummaryStories = storiesOf("Suggested Routes", module)
  .add("Suggested Route Summary", suggestedRouteSummary)
  .add("Suggested Route Details", suggestedRouteDetails)
  .add("Suggested Route Card", suggestedRouteCard)
  .add("Suggested Routes List", suggestedRoutesList);
SuggestedRouteSummaryStories.addDecorator(withKnobs);

storiesOf("Buttons", module).add("Button", ButtonStory);

const LoginFormStories = storiesOf("Authentication", module)
  .add("Login Form", LoginFormStory)
  .add("Logout Button", LogoutButtonStory);

LoginFormStories.addDecorator(withKnobs);
