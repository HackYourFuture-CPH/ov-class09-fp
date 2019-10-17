import React, { Component } from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import Marker from "./Marker";
import PropTypes from "prop-types";

function MapComponent({ voyage, options }) {
  console.log(`Routes: ${JSON.stringify(voyages, null, 2)}`);
  const elapsedRoutes = voyage.map(voyage =>
    voyage.vessel_reports.map(position => {
      return (
        <Marker
          position={[position.latitude, position.longitude]}
          key={`${position.latitude}-${position.longitude}`}
        />
      );
    })
  );

  return (
    <Map center={options.centerMapCoordinates} zoom={options.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {elapsedRoutes.length > 0 && elapsedRoutes}
    </Map>
  );
}

MapComponent.propTypes = {
  options: PropTypes.shape({
    centerMapCoordinates: PropTypes.arrayOf(PropTypes.number).isRequired,
    zoom: PropTypes.number.isRequired,
    style: PropTypes.shape({
      color: PropTypes.shape({
        suggestedRoute: PropTypes.string,
        elapsedRoute: PropTypes.string
      }),
      marker: PropTypes.shape({
        MarkerComponent: PropTypes.Component,
        defaultSize: PropTypes.string,
        selectedSize: PropTypes.string
      })
    })
  }),
  voyages: PropTypes.arrayOf(
    PropTypes.shape({
      vessel_id: PropTypes.number,
      vessel_reports: PropTypes.arrayOf(
        PropTypes.shape({
          latitude: PropTypes.number,
          longitude: PropTypes.number,
          suggested_routes: PropTypes.arrayOf(
            PropTypes.shape({
              suggested_route_id: PropTypes.number.isRequired,
              waypoints: PropTypes.arrayOf(
                PropTypes.shape({
                  latitude: PropTypes.number.isRequired,
                  longitude: PropTypes.number.isRequired
                })
              ).isRequired
            }).isRequired
          )
        }).isRequired
      ).isRequired
    }).isRequired
  ).isRequired
};

export default MapComponent;
