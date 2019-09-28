exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("suggested_routes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("suggested_routes").insert([
        {
          vessel_report_id: 1,
          eta: "2019-09-23 21:57:09",
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        },
        {
          vessel_report_id: 2,
          eta: "2019-09-23 21:57:09",
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        },
        {
          vessel_report_id: 3,
          eta: "2019-09-23 21:57:09",
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        }
      ]);
    });
};
