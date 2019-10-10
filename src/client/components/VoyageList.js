import React, { Component } from "react";
import VoyageTeaser from "./VoyageTeaser";

function VoyageList({ voyages = [] }) {
  const voyageList = voyages.map(
    ({ id, vesselName, departureFrom, arrivesAt, etd, eta }) => (
      <VoyageTeaser
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
