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
        longitude: 55.5893529,
        latitude: 12.2980372,
        sequence_id: 1
      },
      {
        suggested_route_id: 2,
        longitude: 55.5893529,
        latitude: 12.2980372,
        sequence_id: 1
      },
      {
        suggested_route_id: 3,
        longitude: 55.5893529,
        latitude: 12.2980372,
        sequence_id: 1
      }
    ]);
  });
};
