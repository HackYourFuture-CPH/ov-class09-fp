import React from "react";
import { Marker } from "react-leaflet";
import L from "leaflet";

const customMarker = L.icon({
  iconUrl: require("../assets/images/marker.png"),
  iconSize: 50
});

const MapMarker = ({ position, children }) => (
  <Marker position={position} icon={customMarker}>
    {children}
  </Marker>
);
export default MapMarker;
