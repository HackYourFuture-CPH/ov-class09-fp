// Configuration object for Map
export const mapOptions = {
  centerMapCoordinates: [35, 0],
  zoom: 2.5,
  style: {
    color: {
      suggestedRoute: "#F8AA13",
      elapsedRoute: "#1353F8"
    },
    marker: {
      markerComponent: null,
      color: "#0b3c61",
      fill: true,
      fillColor: "red",
      fillOpacity: 0.8,
      radius: 1,
      selectedRadius: 6,
      selectedFillColor: "#0b3c61"
    },
    polyline: {
      dashArray: "10,5",
      lineJoin: "round",
      weight: 5,
      opacity: 0.7,
      color: "blue",
      stroke: true
    }
  }
};
