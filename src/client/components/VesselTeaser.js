import React, { Component } from "react";
import PropTypes from "prop-types";

function VesselTeaser({
  id,
  vesselName,
  departureFrom,
  arrivesAt,
  departure_time,
  target_arrival_time
}) {
  return (
    <div>
      <h1>{vesselName}</h1>
      <label>Departure</label>
      <h3>{departureFrom}</h3>
      <p>{departure_time}</p>
      <label>ETA</label>
      <h3>{arrivesAt}</h3>
      <p>{target_arrival_time}</p>
    </div>
  );
}

VesselTeaser.propTypes = {
  id: PropTypes.number,
  vesselName: PropTypes.string,
  departureFrom: PropTypes.string,
  departure_time: PropTypes.string,
  arrivesAt: PropTypes.string,
  target_arrival_time: PropTypes.string
};

export default VesselTeaser;
