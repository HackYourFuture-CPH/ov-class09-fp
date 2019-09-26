import React, { Component } from "react";

function Vessel({ id, vesselName, departureFrom, arrivesAt, etd, eta }) {
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

export default Vessel;
