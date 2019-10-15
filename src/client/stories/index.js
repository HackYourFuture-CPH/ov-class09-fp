import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";

import { VoyageDetailsStory } from "./VoyageDetails";
import { DataCardStory } from "./DataCardStory";
import { CardGroupStory } from "./CardGroupStory";

import { VoyageListStory } from "./Voyages";
import { VoyageTeaserStory } from "./VoyageTeaser";

import { CostWidgetStory } from "./CostWidgetStory";
import { LoginForm, LoginFormStory } from "./login-form";

import { suggestedRouteSummary } from "./suggestedRoutes/suggestedRouteSummary";
import { suggestedRouteDetails } from "./suggestedRoutes/suggestedRouteDetails";
import { suggestedRouteCard } from "./suggestedRoutes/suggestedRouteCard";
import { suggestedRoutesList } from "./suggestedRoutes/suggestedRoutesList";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

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

const SuggestedRouteSummaryStories = storiesOf("Suggested Routes", module)
  .add("Suggested Route Summary", suggestedRouteSummary)
  .add("Suggested Route Details", suggestedRouteDetails)
  .add("Suggested Route Card", suggestedRouteCard)
  .add("Suggested Routes List", suggestedRoutesList);
SuggestedRouteSummaryStories.addDecorator(withKnobs);

const LoginFormStories = storiesOf("Login Form", module).add(
  "LoginForm",
  LoginFormStory
);

LoginFormStories.addDecorator(withKnobs);
