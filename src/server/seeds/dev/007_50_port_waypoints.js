exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("waypoints")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("waypoints").insert([
        {
          port_id: 1,
          lon: 2344.44,
          lat: 2234.87
        },
        {
          port_id: 2,
          lon: 2344.44,
          lat: 2234.87
        },
        {
          port_id: 3,
          lon: 2344.44,
          lat: 2234.87
        }
      ]);
    });
};
