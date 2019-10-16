import React, { Component } from "react";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";

function VoyageList({ voyages }) {
  const voyageList = voyages.map(
    ({
      id,
      vessel_name: vesselName,
      depart_from: departFrom,
      arrive_at: arriveAt,
      departure_time: departureTime,
      vessel_reports: vesselReports
    }) => (
      <VoyageTeaser
        key={id}
        id={id}
        vessel_name={vesselName}
        depart_from={departFrom}
        arrive_at={arriveAt}
        departure_time={departureTime}
        eta={vesselReports[0].eta}
      />
    )
  );

  return <div>{voyageList}</div>;
}

VoyageList.propTypes = {
  voyages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      vessel_name: PropTypes.string,
      depart_from: PropTypes.string,
      departure_time: PropTypes.string,
      arrive_at: PropTypes.string,
      eta: PropTypes.string
    })
  )
};
export default VoyageList;
