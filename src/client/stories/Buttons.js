import React from "react";
import { Button } from "@storybook/react/demo";

export function WithTextStory() {
  return <Button>Hello there Button</Button>;
}
export function WithEmojiStory() {
  return (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  );
}
