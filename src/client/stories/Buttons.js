import React from "react";
import LogoutButton from "../components/LogoutButton";
import Button from "../components/Button";

export function ButtonStory() {
  return (
    <Button
      label={"Button"}
      handleClick={() => {
        console.log("Button Click");
      }}
    />
  );
}

export function LogoutButtonStory() {
  return <LogoutButton />;
}
