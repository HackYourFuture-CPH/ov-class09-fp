import React, { Component } from "react";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Polyline,
  GeoJSON
} from "react-leaflet";
import MapMarker from "./Marker";

const waypoints = [
  { lat: 55.721114, lng: 12.646547 },
  { lat: 55.698478, lng: 12.604377 },
  { lat: 55.687535, lng: 12.601538 },
  { lat: 55.679846, lng: 12.596304 },
  { lat: 55.677632, lng: 12.592699 }
];

const polyline = waypoints.map(({ lat, lng }) => [lat, lng]);

export default class SimpleExample extends Component {
  state = {
    lat: 55.698478,
    lng: 12.604377,
    zoom: 12
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polyline color="red" positions={polyline} />
        <MapMarker position={position}>
          <Popup>Hello from my marker! :D</Popup>
        </MapMarker>
      </Map>
    );
  }
}
