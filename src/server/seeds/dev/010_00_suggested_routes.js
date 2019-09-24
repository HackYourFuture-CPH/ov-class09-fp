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
          voyage_id: 1,
          eta: 500,
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        },
        {
          voyage_id: 2,
          eta: 600,
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        },
        {
          voyage_id: 3,
          eta: 300,
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
