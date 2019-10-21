import React from "react";
import { Map, CircleMarker, TileLayer, Popup, Polyline } from "react-leaflet";
import PropTypes from "prop-types";

function MapComponent({ vesselReports, suggestedRoutes, options }) {
  let elapsedRouteMarkers, suggestedRouteMarkers;

  if (vesselReports) {
    elapsedRouteMarkers = vesselReports.map(vesselReport => (
      <CircleMarker
        center={[vesselReport.latitude, vesselReport.longitude]}
        key={vesselReport.id}
        color={options.style.marker.color}
        fill={options.style.marker.fill}
        fillColor={options.style.marker.fillColor}
        fillOpacity={options.style.marker.fillOpacity}
        radius={options.style.marker.radius}
      ></CircleMarker>
    ));
  }

  if (suggestedRoutes) {
    suggestedRouteMarkers = suggestedRoutes.map(suggestedRoute => {
      if (suggestedRoute.waypoints) {
        const positions = suggestedRoute.waypoints.map(waypoint => [
          waypoint.latitude,
          waypoint.longitude
        ]);

        return (
          <Polyline
            key={suggestedRoute.id}
            positions={positions}
            dashArray={options.style.polyline.dashArray}
            color={options.style.color.suggestedRoute}
            opacity={options.style.polyline.opacity}
            lineJoin={options.style.polyline.lineJoin}
            stroke={options.style.polyline.stroke}
          />
        );
      }
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
      }),
      marker: PropTypes.shape({
        color: PropTypes.string,
        fill: PropTypes.boolean,
        fillColor: PropTypes.string,
        fillOpacity: PropTypes.number,
        radius: PropTypes.number
      }),
      polyline: PropTypes.shape({
        dashArray: PropTypes.string,
        lineJoin: PropTypes.string,
        weight: PropTypes.number,
        opacity: PropTypes.number,
        color: PropTypes.string,
        stroke: PropTypes.boolean
      })
    })
  }).isRequired
};

export default MapComponent;
