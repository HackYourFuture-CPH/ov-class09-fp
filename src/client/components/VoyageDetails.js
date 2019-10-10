import React, { Component } from "react";
import DataCard from "./DataCard";
import { CardGroup, CardGroupHeader } from "./CardGroup";
import VoyageTeaser from "./VoyageTeaser";

function VoyageDetails({
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
      <VoyageTeaser
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

export default VoyageDetails;
