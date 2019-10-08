import React, { Component } from "react";
import PropTypes from "prop-types";

function VesselTeaser({ id, vesselName, departureFrom, arrivesAt, etd, eta }) {
  return (
    <div>
      <h1>{vesselName}</h1>
      <label>Departure</label>
      <h3>{departureFrom}</h3>
      <p>{etd}</p>
      <label>ETA</label>
      <h3>{arrivesAt}</h3>
      <p>{eta}</p>
    </div>
  );
}

VesselTeaser.propTypes = {
  vesselName: PropTypes.string,
  departureFrom: PropTypes.string,
  etd: PropTypes.string,
  arrivesAt: PropTypes.string,
  eta: PropTypes.string
};

export default VesselTeaser;
