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
          longitude: 55.5893529,
          latitude: 12.2980372
        },
        {
          port_id: 2,
          longitude: 55.5893529,
          latitude: 12.2980372
        },
        {
          port_id: 3,
          longitude: 55.5893529,
          latitude: 12.2980372
        }
      ]);
    });
};
