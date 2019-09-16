import React, { Component } from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import MapMarker from "./Marker";

function MapComponent({
  centerMapCoordinates,
  pathColor = "red",
  displayMarkers = false,
  zoom = 12,
  waypoints = []
}) {
  const polyline = waypoints.map(({ lat, lng }) => [lat, lng]);
  return (
    <Map center={centerMapCoordinates} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline color={pathColor} positions={polyline} />
      {displayMarkers &&
        waypoints.map(({ lat, lng, message }) => (
          <MapMarker key={`${lat}-${lng}`} position={[lat, lng]}>
            <Popup>{message}</Popup>
          </MapMarker>
        ))}
    </Map>
  );
}

export default MapComponent;
