import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function VoyageTeaser({
  id,
  vessel_name,
  depart_from,
  arrive_at,
  departure_time,
  eta
}) {
  return (
    <div>
      <Link to={`/voyages/${id}`}>
        <h1>{vessel_name}</h1>
        <label>Departure</label>
        <h3>{depart_from}</h3>
        <p>{departure_time}</p>
        <label>ETA</label>
        <h3>{arrive_at}</h3>
        <p>{eta}</p>
      </Link>
    </div>
  );
}

VoyageTeaser.propTypes = {
  id: PropTypes.number,
  vessel_name: PropTypes.string,
  depart_from: PropTypes.string,
  departure_time: PropTypes.string,
  arrive_at: PropTypes.string,
  eta: PropTypes.string
};

export default VoyageTeaser;
