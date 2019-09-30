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
          vessel_id: 6,
          selected_routes: 2,
          position_waypoint: 10,
          current_speed: 172.72,
          hfo_consumption: 160.84,
          lsfo_consumption: 2383.28
        },
        {
          vessel_id: 6,
          selected_routes: 3,
          position_waypoint: 8,
          current_speed: 182.47,
          hfo_consumption: 289.75,
          lsfo_consumption: 2561.45
        },
        {
          vessel_id: 8,
          selected_routes: 2,
          position_waypoint: 10,
          current_speed: 273.67,
          hfo_consumption: 135.07,
          lsfo_consumption: 2649.04
        },
        {
          vessel_id: 2,
          selected_routes: 8,
          position_waypoint: 6,
          current_speed: 224.25,
          hfo_consumption: 298.06,
          lsfo_consumption: 2480.17
        },
        {
          vessel_id: 6,
          selected_routes: 9,
          position_waypoint: 9,
          current_speed: 154.34,
          hfo_consumption: 282.51,
          lsfo_consumption: 2399.82
        },
        {
          vessel_id: 6,
          selected_routes: 4,
          position_waypoint: 6,
          current_speed: 103.06,
          hfo_consumption: 298.06,
          lsfo_consumption: 2308.08
        },
        {
          vessel_id: 9,
          selected_routes: 3,
          position_waypoint: 9,
          current_speed: 214.98,
          hfo_consumption: 232.08,
          lsfo_consumption: 2226.98
        },
        {
          vessel_id: 7,
          selected_routes: 5,
          position_waypoint: 6,
          current_speed: 240.75,
          hfo_consumption: 246.58,
          lsfo_consumption: 2090.28
        },
        {
          vessel_id: 3,
          selected_routes: 3,
          position_waypoint: 2,
          current_speed: 177.58,
          hfo_consumption: 103.42,
          lsfo_consumption: 2546.98
        },
        {
          vessel_id: 9,
          selected_routes: 2,
          position_waypoint: 3,
          current_speed: 293.33,
          hfo_consumption: 257.45,
          lsfo_consumption: 2934.17
        }
      ]);
    });
};
