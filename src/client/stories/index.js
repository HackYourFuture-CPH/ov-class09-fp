import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { LoginFormStory } from "./login-form";

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const LoginStories = storiesOf("Login-form", module).add(
  "LoginComponent",
  LoginFormStory
);
LoginStories.addDecorator(withKnobs);

storiesOf("Login-form", module).add("Button", LoginFormStory);
LoginStories.addDecorator(withKnobs);
