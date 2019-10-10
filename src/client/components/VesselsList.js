import React, { Component } from "react";
import VesselTeaser from "./VesselTeaser";
import PropTypes from "prop-types";

function VesselsList({ vessels = [] }) {
  const vesselsList = vessels.map(
    ({
      id,
      vesselName,
      departureFrom,
      arrivesAt,
      departure_time,
      target_arrival_time
    }) => (
      <VesselTeaser
        key={id}
        vesselName={vesselName}
        departureFrom={departureFrom}
        arrivesAt={arrivesAt}
        departure_time={departure_time}
        target_arrival_time={target_arrival_time}
      />
    )
  );

  return <div>{vesselsList}</div>;
}

VesselsList.propTypes = {
  vessels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      vesselName: PropTypes.string,
      departureFrom: PropTypes.string,
      departure_time: PropTypes.string,
      arrivesAt: PropTypes.string,
      target_arrival_time: PropTypes.string
    })
  )
};

export default VesselsList;
