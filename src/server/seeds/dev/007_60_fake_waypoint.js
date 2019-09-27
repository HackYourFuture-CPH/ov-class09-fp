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
          longitude: 55.589352,
          latitude: 12.298037,
          sequence_id: 1
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          sequence_id: 2
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          sequence_id: 3
        }
      ]);
    });
};
