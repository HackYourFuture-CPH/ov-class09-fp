import React, { Component } from "react";
import VesselTeaser from "./VesselTeaser";

function VesselsList({ vessels = [] }) {
  const vesselsList = vessels.map(
    ({ id, vesselName, departureFrom, arrivesAt, etd, eta }) => (
      <VesselTeaser
        key={id}
        vesselName={vesselName}
        departureFrom={departureFrom}
        arrivesAt={arrivesAt}
        etd={etd}
        eta={eta}
      />
    )
  );

  return <div>{vesselsList}</div>;
}

export default VesselsList;
