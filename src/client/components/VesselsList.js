import React, { Component } from "react";
import VesselTeaser from "./VesselTeaser";
import PropTypes from "prop-types";

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

VesselsList.propTypes = {
  vessels: PropTypes.array,
  id: PropTypes.number,
  vesselName: PropTypes.string,
  departureFrom: PropTypes.string,
  arrivesAt: PropTypes.string,
  etd: PropTypes.string,
  eta: PropTypes.string
};

export default VesselsList;
