import React, { Component } from "react";
import PropTypes from "prop-types";

function CardGroupHeader({ title }) {
  return <h3>{title}</h3>;
}

CardGroupHeader.propTypes = {
  title: PropTypes.string.isRequired
};

function CardGroup({ children }) {
  return <div>{children}</div>;
}

CardGroup.propTypes = {
  children: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      data: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
        PropTypes.object
      ])
    })
  ).isRequired
};

export { CardGroup, CardGroupHeader };
