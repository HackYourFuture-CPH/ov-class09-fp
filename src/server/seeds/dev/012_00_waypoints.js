exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("waypoints").then(function() {
    // Inserts seed entries
    return knex("waypoints").insert([
      {
        suggested_route_id: 1,
        lon: 116.470304,
        lat: 120.8129183,
        sequence_id: 1
      },
      {
        suggested_route_id: 9,
        lon: 115.2402986,
        lat: 106.04972,
        sequence_id: 2
      },
      {
        suggested_route_id: 10,
        lon: 9.3506604,
        lat: 35.8970453,
        sequence_id: 3
      },
      {
        suggested_route_id: 8,
        lon: 112.8999225,
        lat: -8.3148854,
        sequence_id: 4
      },
      {
        suggested_route_id: 10,
        lon: 139.250061,
        lat: -8.5031422,
        sequence_id: 5
      },
      {
        suggested_route_id: 2,
        lon: 136.640833,
        lat: 13.2923232,
        sequence_id: 6
      },
      {
        suggested_route_id: 9,
        lon: 106.119491,
        lat: -73.9830029,
        sequence_id: 7
      },
      {
        suggested_route_id: 1,
        lon: 130.9966131,
        lat: -79.8380778,
        sequence_id: 8
      },
      {
        suggested_route_id: 9,
        lon: -40.4996855,
        lat: 111.9000827,
        sequence_id: 9
      },
      {
        suggested_route_id: 8,
        lon: 123.8401962,
        lat: 113.084237,
        sequence_id: 10
      }
    ]);
  });
};
