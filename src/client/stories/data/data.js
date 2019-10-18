const ports = [
  { name: "newpoint", latitude: 51.45, depth: -11, longitude: -3 },
  { name: "las palmas", latitude: 28.1083, depth: -333, longitude: -15.3617 },
  {
    name: "panama_anchorage_pacific",
    latitude: 8.8779,
    depth: 18,
    longitude: -79.505985
  },
  { name: "hellefiske", latitude: 67.5, depth: -44, longitude: -55 },
  { name: "hamburg", latitude: 54.03813, depth: -19, longitude: 8.127501 },
  { name: "santos", latitude: -24.125385, depth: -24, longitude: -46.290725 },
  { name: "racalada", latitude: -35.61958, depth: -14, longitude: -55.889475 },
  { name: "santos", latitude: -24.125385, depth: -24, longitude: -46.290725 },
  { name: "conakry", latitude: 9.448638, depth: -10, longitude: -13.7124 },
  {
    name: "vila_do_conde",
    latitude: -1.0862075,
    depth: -22,
    longitude: -48.481465
  },
  { name: "volos_anch", latitude: 39.331645, depth: -40, longitude: 22.969835 },
  { name: "douala", latitude: 3.7, depth: -9, longitude: 9.5 },
  {
    name: "portland_anch",
    latitude: 50.609335,
    depth: -17,
    longitude: -2.391844
  },
  { name: "milne", latitude: 72.2, depth: -134, longitude: -80.7 },
  {
    name: "rotterdam_anch",
    latitude: 52.0584,
    depth: -27,
    longitude: 3.378296
  },
  {
    name: "las_palmas_anch",
    latitude: 28.114495,
    depth: -105,
    longitude: -15.38717
  },
  {
    name: "rotterdam_pilot",
    latitude: 52.028333,
    depth: -24,
    longitude: 3.895
  },
  { name: "douala_deep", latitude: 3.82, depth: -86, longitude: 8.6 },
  { name: "abidjan", latitude: 5.2066895, depth: -50, longitude: -4.054985 },
  { name: "gabes", latitude: 34.001345, depth: -17, longitude: 10.231738 },
  {
    name: "gibraltar_east_anch",
    latitude: 36.131985,
    depth: -49,
    longitude: -5.308113
  }
];

const vessels = [
  { id: 1, name: "Mirjam" },
  { id: 2, name: "Nord Vantage" },
  { id: 3, name: "Agrigento" },
  { id: 4, name: "Yeniser River" },
  { id: 5, name: "Serenade of the seas" },
  { id: 6, name: "Msc Meraviglia" },
  { id: 7, name: "Optimum Voyage" }
];

const voyages = [
  { id: 1, optimisation_type: "fixed_eta" },
  { id: 2, optimisation_type: "earliest_arrival" },
  { id: 3, optimisation_type: "least_cost_arrival" }
];

module.exports = {
  ports,
  vessels,
  voyages
};
