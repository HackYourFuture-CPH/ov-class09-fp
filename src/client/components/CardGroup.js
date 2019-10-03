import React, { Component } from "react";

function CardGroupHeader({ title }) {
  return <h3>{title}</h3>;
}

function CardGroup({ children }) {
  return <div>{children}</div>;
}

export { CardGroup, CardGroupHeader };
