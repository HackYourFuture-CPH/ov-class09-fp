exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("vessel_reports")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vessel_reports").insert([
        {
          id: 1,
          vessel_id: 1,
          position_waypoint: 1,
          current_speed: 234.44,
          hfo_consumption: 212.22,
          lsfo_consumption: 3445.55
        },
        {
          id: 2,
          vessel_id: 2,
          position_waypoint: 2,
          current_speed: 234.44,
          hfo_consumption: 212.22,
          lsfo_consumption: 3445.55
        },
        {
          id: 3,
          vessel_id: 3,
          position_waypoint: 3,
          current_speed: 234.44,
          hfo_consumption: 212.22,
          lsfo_consumption: 3445.55
        }
      ]);
    });
};
