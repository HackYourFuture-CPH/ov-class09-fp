import React from "react";

export default function TitleAndDescribe({ title, description }) {
  return (
    <div>
      <h4>{title}</h4>
      <h4>{description}</h4>
    </div>
  );
}
