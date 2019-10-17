import React from "react";
import { Map, TileLayer, Popup, Polyline } from "react-leaflet";
import MapMarker from "./Marker";
import PropTypes from "prop-types";

function MapComponent({
  centerMapCoordinates,
  zoom = 1,
  suggestedRoute = [],
  elapsedRoute = [],
  suggestedRouteColor = "orange",
  elapsedRouteColor = "blue",
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
      <Polyline color={suggestedRouteColor} positions={polyline} />
      <Polyline color={elapsedRouteColor} positions={polyline1} />

      {displayMarkers &&
        suggestedRoute.map(({ latitude, longitude }) => (
          <MapMarker
            size={md}
            fillColor={suggestedRouteColor}
            key={`${latitude}-${longitude}`}
            position={[latitude, longitude]}
          >
            <Popup>{}</Popup>
          </MapMarker>
        ))}

      {displayMarkers &&
        elapsedRoute.map(({ latitude, longitude }) => (
          <MapMarker
            size={md}
            fillColor={elapsedRouteColor}
            key={`${latitude}-${longitude}`}
            position={[latitude, longitude]}
          >
            <Popup>{}</Popup>
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

// style = {
//   suggestedRouteColor: "#000",
//   elapsedRouteColor: "#fff",
//   vesselMarker: "<MarkerComponent>"
// },
//   pathColor = "red",
