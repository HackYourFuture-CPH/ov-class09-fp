import React, { Component } from "react";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";

function VoyageList({ voyages }) {
  const voyageList = voyages.map(
    ({
      id,
      vesselName,
      departureFrom,
      arrivesAt,
      departure_time,
      target_arrival_time
    }) => (
      <VoyageTeaser
        key={id}
        vesselName={vesselName}
        departureFrom={departureFrom}
        arrivesAt={arrivesAt}
        departure_time={departure_time}
        target_arrival_time={target_arrival_time}
        link={`/voyages/${id}`}
      />
    )
  );

  return <div>{voyageList}</div>;
}

VoyageList.propTypes = {
  voyages: PropTypes.arrayOf(
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

export default VoyageList;
