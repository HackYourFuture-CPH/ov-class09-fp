import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { MapStory } from "./Map";
import { WithTextStory, WithEmojiStory } from "./Buttons";
import { VesselsListStory } from "./Vessels";
import { VesselTeaserStory } from "./VesselTeaser";
import { UserDetailStory } from "./UserDetail";
import { CreateUserStory } from "./CreateUser";
import { ManageUsersTableStory } from "./ManageUsersTable";
import { AdminPageStory } from "./AdminPage";

storiesOf("Button", module)
  .add("with text", WithTextStory)
  .add("with emoji", WithEmojiStory);

const MapStories = storiesOf("Map", module).add("MapComponent", MapStory);
MapStories.addDecorator(withKnobs);

const VesselsListStories = storiesOf("Vessels", module)
  .add("VesselList", VesselsListStory)
  .add("Vessel Teaser", VesselTeaserStory);
VesselsListStories.addDecorator(withKnobs);
const UserStories = storiesOf("Admin Page Components", module)
  .add("UserDetail", UserDetailStory)
  .add("CreateUser", CreateUserStory)
  .add("ManageUsersTable", ManageUsersTableStory)
  .add("AdminPage", AdminPageStory);
UserStories.addDecorator(withKnobs);
