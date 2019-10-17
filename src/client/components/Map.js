import React, { Component } from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import Marker from "./Marker";
import PropTypes from "prop-types";

function MapComponent({ voyages, options }) {
  // Flattened array of vessel reports
  const vesselReports = [];
  voyages.forEach(voyage =>
    voyage.vessel_reports.forEach(vesselReport =>
      vesselReports.push(vesselReport)
    )
  );

  // Get an array of Markers for each vessel report position
  const elapsedRouteMarkers = vesselReports.map(position => {
    return (
      <Marker
        position={[position.latitude, position.longitude]}
        key={`${position.latitude}-${position.longitude}`}
      />
    );
  });

  // Get an array of Markers for each suggested route waypoint
  const suggestedRouteMarkers = vesselReports.map(vesselReport => {
    if (vesselReport.suggested_routes) {
      return vesselReport.suggested_routes.map(suggested_route => {
        if (suggested_route.waypoints) {
          return suggested_route.waypoints.map(waypoint => (
            <Marker
              position={[waypoint.latitude, waypoint.longitude]}
              key={`${waypoint.latitude}-${waypoint.longitude}`}
            />
          ));
        }
      });
    }
  });

  // Get flattened array of suggested routes
  const vesselReportsWithsuggestedRoutes = vesselReports.filter(
    vesselReport => {
      debugger;
      return vesselReport.suggested_route;
    }
  );

  console.log(vesselReportsWithsuggestedRoutes);

  // console.log(vesselReport.suggested_routes);
  // return Object.keys(vesselReport).suggested_routes.map(suggested_route => {
  //   // return <Polyline
  //   //   positions={suggested_route.waypoints.map(waypoint =>
  //   //     Object.values(waypoint)
  //   //   )}
  //   //   color={"red"}
  //   // />;
  // });

  return (
    <Map center={options.centerMapCoordinates} zoom={options.zoom}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {elapsedRouteMarkers.length > 0 && elapsedRouteMarkers}
      {suggestedRouteMarkers.length > 0 && suggestedRouteMarkers}
      {/* {suggestedRoutes.length > 0 && suggestedRoutes} */}
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

/*
 Orange: #F8AA13
Blue: #1353F8
*/

/*  centerMapCoordinates: PropTypes.arrayOf(PropTypes.number),
  pathColor: PropTypes.string,
  displayMarkers: PropTypes.bool,
  zoom: PropTypes.number,
  waypoints: PropTypes.arrayOf(
    PropTypes.shape({
      latitude: PropTypes.number,
      longitude: PropTypes.number
    })
  )*/

/*
{
  centerMapCoordinates,
  zoom = 12,
  style = {
    color: {
      suggestedRoute: "#F8AA13", //orange
      elapsedRoute: "#1353F8" //blue
    },
    marker: {
      MarkerComponent: MapMarker,
      defaultSize: "sm",
      selectedSize: "md"
    }
  }
*/
