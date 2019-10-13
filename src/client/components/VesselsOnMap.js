import React, { Component } from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import MapMarker from "./Marker";

function MapComponent({
  centerMapCoordinates,
  zoom = 12,
  vessels = [
    {
      vessel_id: 1,
      lat: 12.298037,
      lng: 55.589353
    }
  ], // array containing vessels
  suggestedRoute = [], // An array of suggested routes to be drawn on the map
  elapsedRoute = [], //An array of elapsed routes to be drawn on the map
  style = {
    suggestedRouteColor: "#000",
    elapsedRouteColor: "#fff",
    vesselMarker: "<MarkerComponent>"
  },
  //   pathColor = "red",
  displayMarkers = false
  //   waypoints = []
}) {
  const polyline = suggestedRoute.map(({ lat, lng }) => [lat, lng]);
  const polyline1 = elapsedRoute.map(({ lat, lng }) => [lat, lng]);
  return (
    <Map center={centerMapCoordinates} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline color={"blue"} positions={polyline} />
      <Polyline color={"orange"} positions={polyline1} />
      {displayMarkers &&
        vessels.map(({ lat, lng, message }) => (
          <MapMarker key={`${lat}-${lng}`} position={[lat, lng]}>
            <Popup>{message}</Popup>
          </MapMarker>
        ))}
      {/* { style.vesselMarker } */}
    </Map>
  );
}

export default MapComponent;
