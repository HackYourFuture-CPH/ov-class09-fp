import React, { Component } from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import MapMarker from "./Marker";
import PropTypes from "prop-types";

function MapComponent({
  centerMapCoordinates,
  zoom = 1,
  vessels = [],
  suggestedRoute = [],
  elapsedRoute = [],
  // style = {
  //   suggestedRouteColor: "#000",
  //   elapsedRouteColor: "#fff",
  //   vesselMarker: "<MarkerComponent>"
  // },
  //   pathColor = "red",
  displayMarkers = true
}) {
  const polyline = suggestedRoute.map(({ latitude, longitude }) => [
    latitude,
    longitude
  ]);
  const polyline1 = elapsedRoute.map(({ latitude, longitude }) => [
    latitude,
    longitude
  ]);

  return (
    <Map center={centerMapCoordinates} zoom={zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline color={"blue"} positions={polyline} />
      <Polyline color={"orange"} positions={polyline1} />
      {displayMarkers &&
        vessels.map(({ latitude, longitude, vessel_name }) => (
          <MapMarker
            key={`${latitude}-${longitude}`}
            position={[latitude, longitude]}
          >
            <Popup>{vessel_name}</Popup>
          </MapMarker>
        ))}

      {/* {style.vesselMarker} */}
    </Map>
  );
}

MapComponent.propTypes = {
  centerMapCoordinates: PropTypes.array,
  // pathColor: PropTypes.string,
  displayMarkers: PropTypes.bool,
  zoom: PropTypes.number,
  vessels: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      vessel_name: PropTypes.string
    })
  ),
  suggestedRoute: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  ),
  elapsedRoute: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  )
};

export default MapComponent;
