import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapVoyagesList } from "./MapVoyagesList";
import { MapVoyageDetails } from "./MapVoyageDetails";
import { MapSuggestedRoutes } from "./MapSuggestedRoutes";
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
import { SuggestedRouteTableStory } from "./SuggestedRouteTableStory";
import { VesselsOnMapStory } from "./VoyagesContainer";
import { VesselRoutesStory } from "./VesselRoutes";

const MapStories = storiesOf("Map", module)
  .add("Map Voyages List", MapVoyagesList)
  .add("Map Voyage Details", MapVoyageDetails)
  // .add("Map Suggested Routes", MapSuggestedRoutes)
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
  .add("Suggested Routes List", suggestedRoutesList)
  .add("Suggested Route Table", SuggestedRouteTableStory);
SuggestedRouteSummaryStories.addDecorator(withKnobs);

storiesOf("Buttons", module).add("Button", ButtonStory);

const LoginFormStories = storiesOf("Authentication", module)
  .add("Login Form", LoginFormStory)
  .add("Logout Button", LogoutButtonStory);

LoginFormStories.addDecorator(withKnobs);

const VesselsOnMapStories = storiesOf("Vessels Location", module).add(
  "Vessels Location",
  VesselsOnMapStory
);
VesselsOnMapStories.addDecorator(withKnobs);

const VesselRoutesStories = storiesOf("Vessel Routes", module).add(
  "Vessel Routes",
  VesselRoutesStory
);
VesselRoutesStories.addDecorator(withKnobs);
