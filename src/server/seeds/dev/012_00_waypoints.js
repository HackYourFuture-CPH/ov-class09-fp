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
        lon: 2344.44,
        lat: 2234.87
      },
      {
        suggested_route_id: 2,
        lon: 2344.44,
        lat: 2234.87
      },
      {
        suggested_route_id: 3,
        lon: 2344.44,
        lat: 2234.87
      }
    ]);
  });
};
