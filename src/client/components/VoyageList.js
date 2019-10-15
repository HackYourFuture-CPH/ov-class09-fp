import React, { Component } from "react";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";

function VoyageList({ voyages }) {
  const voyageList = voyages.map(
    ({
      id,
      vessel_name,
      depart_from,
      arrive_at,
      departure_time,
      target_arrival_time
    }) => (
      <VoyageTeaser
        key={id}
        vessel_name={vessel_name}
        depart_from={depart_from}
        arrive_at={arrive_at}
        departure_time={departure_time}
        target_arrival_time={target_arrival_time}
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
      target_arrival_time: PropTypes.string
    })
  )
};
export default VoyageList;
