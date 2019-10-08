import React, { Component } from "react";
import VesselTeaser from "./VesselTeaser";

function VoyageList({ voyages = [] }) {
  const voyageList = voyages.map(
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

  return <div>{voyageList}</div>;
}

export default VoyageList;
