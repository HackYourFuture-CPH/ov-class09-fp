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
        suggested_route_id: 8,
        longitude: "119.367",
        latitude: "-9.582",
        sequence_id: 1
      },
      {
        suggested_route_id: 1,
        longitude: -74.380305,
        latitude: 5.069435,
        sequence_id: 10
      },
      {
        suggested_route_id: 9,
        longitude: -51.1689963,
        latitude: -29.5795648,
        sequence_id: 2
      },
      {
        suggested_route_id: 3,
        longitude: 117.130129,
        latitude: 25.732824,
        sequence_id: 1
      },
      {
        suggested_route_id: 4,
        longitude: -79.1012197,
        latitude: 43.8521146,
        sequence_id: 1
      },
      {
        suggested_route_id: 1,
        longitude: 21.6206833,
        latitude: 37.5923591,
        sequence_id: 10
      },
      {
        suggested_route_id: 4,
        longitude: 43.4086631,
        latitude: 56.6203091,
        sequence_id: 1
      },
      {
        suggested_route_id: 10,
        longitude: "-76.21194",
        latitude: "-10.07722",
        sequence_id: 1
      },
      {
        suggested_route_id: 8,
        longitude: 14.5719694,
        latitude: 46.1659122,
        sequence_id: 5
      },
      {
        suggested_route_id: 2,
        longitude: 20.57188,
        latitude: 51.13737,
        sequence_id: 6
      }
    ]);
  });
};
