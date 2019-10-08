import React, { Component } from "react";
import PropTypes from "prop-types";

function DataCard({ title, data }) {
  return (
    <div>
      <h4>{title}</h4>
      <p>{data}</p>
    </div>
  );
}

DataCard.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ])
};

export default DataCard;
