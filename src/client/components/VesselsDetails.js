import React, { Component } from "react";

function VesselsDetailsComponent({
  vesselName,
  departureFrom,
  arrivesAt,
  etd,
  eta,
  date,
  lat,
  lon,
  hsfo,
  lsfo
}) {
  return (
    <div>
      <h1>{vesselName}</h1>
      <label>Departure</label>
      <h3>{departureFrom}</h3>
      <p>{etd}</p>
      <label>ETA</label>
      <h3>{arrivesAt}</h3>
      <p>{eta}</p>
      <h3>Position</h3>
      <div>
        <div>
          <label>DATE</label>
          <p>{date}</p>
        </div>
        <div>
          <label>LATTITUDE</label>
          <p>{lat}</p>
        </div>
        <div>
          <label>LONGITUDE</label>
          <p>{lon}</p>
        </div>
      </div>
      <h3>Consumption</h3>
      <div>
        <div>
          <label>HSFO</label>
          <p>{hsfo}</p>
        </div>
        <div>
          <label>LSFO</label>
          <p>{lsfo}</p>
        </div>
        <div>
          <label>FOC TOTAL</label>
          <p>{hsfo + lsfo}</p>
        </div>
      </div>
    </div>
  );
}

export default VesselsDetailsComponent;
