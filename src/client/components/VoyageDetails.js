import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import VoyageTeaser from "./VoyageTeaser";
import PropTypes from "prop-types";

function VoyageDetails({
  vesselName,
  departsFrom,
  arrivesAt,
  departure_time,
  target_arrival_time,
  date,
  latitude,
  longitude,
  hsfo,
  ulsfo
}) {
  return (
    <div>
      <VoyageTeaser
        vesselName={vesselName}
        departureFrom={departsFrom}
        arrivesAt={arrivesAt}
        departure_time={departure_time}
        target_arrival_time={target_arrival_time}
      />

      <CardGroupHeader title="Position" />
      <CardGroup>
        <DataCard title="Date" data={date} />
        <DataCard title="Latitude" data={latitude} />
        <DataCard title="Longitude" data={longitude} />
      </CardGroup>

      <CardGroupHeader title="Consumption" />
      <CardGroup>
        <DataCard title="HSFO" data={hsfo} />
        <DataCard title="ULSFO" data={ulsfo} />
        <DataCard title="FOC Total" data={hsfo + ulsfo} />
      </CardGroup>
    </div>
  );
}

VoyageDetails.propTypes = {
  vesselName: PropTypes.string,
  departsFrom: PropTypes.string,
  arrivesAt: PropTypes.string,
  departure_time: PropTypes.string,
  target_arrival_time: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  hsfo: PropTypes.number,
  ulsfo: PropTypes.number
};

export default VoyageDetails;
