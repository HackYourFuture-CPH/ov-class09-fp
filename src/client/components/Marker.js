import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";
import PropTypes from "prop-types";

const customMarker = L.icon({
  iconUrl: require("../assets/images/marker.png"),
  iconSize: 50
});

const MapMarker = ({ position, children }) => (
  <Marker position={position} icon={customMarker}>
    {children}
  </Marker>
);

MapMarker.propTypes = {
  position: PropTypes.array,
  children: PropTypes.object
};

export default MapMarker;
