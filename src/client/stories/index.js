import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@storybook/react/demo";
import Map from "../components/Map";

storiesOf("Button", module)
  .add("with text", () => <Button>Hello there Button</Button>)
  .add("with emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));

storiesOf("Map", module).add("MapComponent", () => <Map />);
