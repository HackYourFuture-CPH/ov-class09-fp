import React, { Component } from "react";
import Vessels from "./VesselTeaser";

function VesselsList({ vessels = [] }) {
  const vesselsList = vessels.map(
    ({ id, vesselName, departureFrom, arrivesAt, etd, eta }) => (
      <Vessels
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
