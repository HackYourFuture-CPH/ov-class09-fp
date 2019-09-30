import React, { Component } from "react";
import CardTeaser from "./CardTeaser";
import { CardGroup, CardGroupHeader } from "./CardGroup";

function VesselDetailsComponent({
  vesselName,
  departureFrom,
  arrivesAt,
  etd,
  eta,
  date,
  lat,
  lon,
  hsfo,
  ulsfo
}) {
  return (
    <div>
      <CardGroupHeader title={vesselName} />
      <CardGroupHeader title="Departure From" />
      <CardTeaser title={departureFrom} data={etd} />

      <CardGroupHeader title="ETA" />
      <CardTeaser title={arrivesAt} data={eta} />

      <CardGroupHeader title="Position" />
      <CardGroup>
        <CardTeaser title="DATE" data={date} />
        <CardTeaser title="LATTITUDE" data={lat} />
        <CardTeaser title="LONGITUDE" data={lon} />
      </CardGroup>

      <CardGroupHeader title="Consumption" />
      <CardGroup>
        <CardTeaser title="HSFO" data={hsfo} />
        <CardTeaser title="ULSFO" data={ulsfo} />
        <CardTeaser title="FOC TOTAL" data={hsfo + ulsfo} />
      </CardGroup>
    </div>
  );
}

export default VesselDetailsComponent;
