import React, { Component } from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import PropTypes from "prop-types";
import Marker from "./Marker";

function MapComponent({ vesselReports, suggestedRoutes, options }) {
  let elapsedRouteMarkers, suggestedRouteMarkers;

  if (vesselReports) {
    elapsedRouteMarkers = vesselReports.map(vesselReport => (
      <Marker
        position={[vesselReport.latitude, vesselReport.longitude]}
        color={options.style.color.elapsedRoute}
        key={vesselReport.id}
      />
    ));
  }

  if (suggestedRoutes) {
    suggestedRouteMarkers = suggestedRoutes.map(suggestedRoute => {
      const positions = suggestedRoute.waypoints.map(waypoint => [
        waypoint.latitude,
        waypoint.longitude
      ]);

      return (
        <Polyline
          positions={positions}
          color={options.style.color.suggestedRoute}
          key={suggestedRoute.id}
        />
      );
    });
  }

  return (
    <Map center={options.centerMapCoordinates} zoom={options.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {elapsedRouteMarkers && elapsedRouteMarkers}
      {suggestedRouteMarkers && suggestedRouteMarkers}
    </Map>
  );
}

MapComponent.propTypes = {
  vesselReports: PropTypes.array.isRequired,
  suggestedRoutes: PropTypes.array,
  options: PropTypes.shape({
    centerMapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    style: PropTypes.shape({
      color: PropTypes.shape({
        suggestedRoute: PropTypes.string,
        elapsedRoute: PropTypes.string
      })
    })
  }).isRequired
};

export default MapComponent;
