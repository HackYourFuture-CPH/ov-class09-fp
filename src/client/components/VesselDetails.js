import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import VesselTeaser from "./VesselTeaser";
import PropTypes from "prop-types";

function VesselDetails({
  vesselName,
  departsFrom,
  arrivesAt,
  etd,
  eta,
  date,
  latitude,
  longitude,
  hsfo,
  ulsfo
}) {
  return (
    <div>
      <VesselTeaser
        vesselName={vesselName}
        departureFrom={departsFrom}
        arrivesAt={arrivesAt}
        etd={etd}
        eta={eta}
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

VesselDetails.propTypes = {
  vesselName: PropTypes.string,
  departsFrom: PropTypes.string,
  arrivesAt: PropTypes.string,
  etd: PropTypes.string,
  eta: PropTypes.string,
  latitude: PropTypes.number,
  longitude: PropTypes.number,
  hsfo: PropTypes.number,
  ulsfo: PropTypes.number
};

export default VesselDetails;
