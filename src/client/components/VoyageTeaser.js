import React, { Component } from "react";
import PropTypes from "prop-types";

function VoyageTeaser({
  id,
  vesselName,
  departFrom,
  arriveAt,
  departureTime,
  targetArrivalTime
}) {
  return (
    <div>
      <h1>{vesselName}</h1>
      <label>Departure</label>
      <h3>{departFrom}</h3>
      <p>{departureTime}</p>
      <label>ETA</label>
      <h3>{arriveAt}</h3>
      <p>{targetArrivalTime}</p>
    </div>
  );
}

VoyageTeaser.propTypes = {
  id: PropTypes.number,
  vesselName: PropTypes.string,
  departFrom: PropTypes.string,
  departureTime: PropTypes.string,
  arriveAt: PropTypes.string,
  targetArrivalTime: PropTypes.string
};

export default VoyageTeaser;
