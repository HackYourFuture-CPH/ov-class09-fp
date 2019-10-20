import React, { Component } from "react";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";

function VoyageList({ voyages }) {
  const voyageList = voyages.map(
    ({
      id,
      vesselName,
      departFrom,
      arriveAt,
      departureTime,
      targetArrivalTime
    }) => (
      <VoyageTeaser
        key={id}
        vesselName={vesselName}
        departFrom={departFrom}
        arriveAt={arriveAt}
        departureTime={departureTime}
        targetArrivalTime={targetArrivalTime}
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
      departFrom: PropTypes.string,
      departureTime: PropTypes.string,
      arriveAt: PropTypes.string,
      targetArrivalTime: PropTypes.string
    })
  )
};
export default VoyageList;
