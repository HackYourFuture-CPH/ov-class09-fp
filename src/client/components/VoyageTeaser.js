import React, { Component } from "react";
import PropTypes from "prop-types";

function VoyageTeaser({
  id,
  vessel_name,
  depart_from,
  arrive_at,
  departure_time,
  target_arrival_time
}) {
  return (
    <div>
      <h1>{vessel_name}</h1>
      <label>Departure</label>
      <h3>{depart_from}</h3>
      <p>{departure_time}</p>
      <label>ETA</label>
      <h3>{arrive_at}</h3>
      <p>{target_arrival_time}</p>
    </div>
  );
}

VoyageTeaser.propTypes = {
  id: PropTypes.number,
  vessel_name: PropTypes.string,
  depart_from: PropTypes.string,
  departure_time: PropTypes.string,
  arrive_at: PropTypes.string,
  target_arrival_time: PropTypes.string
};

export default VoyageTeaser;
