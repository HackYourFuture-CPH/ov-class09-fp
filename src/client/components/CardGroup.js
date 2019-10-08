import React, { Component } from "react";
import PropTypes from "prop-types";

function CardGroupHeader({ title }) {
  return <h3>{title}</h3>;
}

CardGroupHeader.propTypes = {
  title: PropTypes.string
};

function CardGroup({ children }) {
  return <div>{children}</div>;
}

CardGroup.propTypes = {
  children: PropTypes.array
};

export { CardGroup, CardGroupHeader };
