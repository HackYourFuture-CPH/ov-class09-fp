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
          eta: "2018-10-06 19:06:20",
          max_wave_height: 100,
          hfo: 14.133,
          lsfo: 256.816,
          total_cost: 21104,
          distance_over_ground: 1784,
          distance_through_water: 6052,
          avgspeed: 305.01
        },
        {
          vessel_report_id: 2,
          eta: "2019-06-28 05:31:08",
          max_wave_height: 100,
          hfo: 19.591,
          lsfo: 253.233,
          total_cost: 22601,
          distance_over_ground: 1199,
          distance_through_water: 3973,
          avgspeed: 477.52
        },
        {
          vessel_report_id: 3,
          eta: "2019-03-09 15:09:10",
          max_wave_height: 100,
          hfo: 11.97,
          lsfo: 152.988,
          total_cost: 23279,
          distance_over_ground: 1597,
          distance_through_water: 7456,
          avgspeed: 490.69
        },
        {
          vessel_report_id: 4,
          eta: "2018-10-20 18:12:49",
          max_wave_height: 70,
          hfo: 16.872,
          lsfo: 222.213,
          total_cost: 27042,
          distance_over_ground: 1746,
          distance_through_water: 4179,
          avgspeed: 473.96
        },
        {
          vessel_report_id: 5,
          eta: "2019-02-19 15:52:38",
          max_wave_height: 300,
          hfo: 17.914,
          lsfo: 165.814,
          total_cost: 24342,
          distance_over_ground: 1919,
          distance_through_water: 5962,
          avgspeed: 392.94
        },
        {
          vessel_report_id: 6,
          eta: "2019-02-03 07:03:20",
          max_wave_height: 70,
          hfo: 12.515,
          lsfo: 262.123,
          total_cost: 23377,
          distance_over_ground: 1715,
          distance_through_water: 9477,
          avgspeed: 305.57
        },
        {
          vessel_report_id: 7,
          eta: "2018-12-19 14:25:52",
          max_wave_height: 200,
          hfo: 11.662,
          lsfo: 237.964,
          total_cost: 28899,
          distance_over_ground: 1588,
          distance_through_water: 8794,
          avgspeed: 223.25
        },
        {
          vessel_report_id: 8,
          eta: "2019-03-01 11:23:16",
          max_wave_height: 50,
          hfo: 10.773,
          lsfo: 212.815,
          total_cost: 20803,
          distance_over_ground: 1470,
          distance_through_water: 4199,
          avgspeed: 381.79
        },
        {
          vessel_report_id: 9,
          eta: "2019-01-11 20:17:18",
          max_wave_height: 100,
          hfo: 14.884,
          lsfo: 161.464,
          total_cost: 20817,
          distance_over_ground: 1167,
          distance_through_water: 6195,
          avgspeed: 295.19
        },
        {
          vessel_report_id: 3,
          eta: "2019-01-14 01:25:49",
          max_wave_height: 200,
          hfo: 13.838,
          lsfo: 267.451,
          total_cost: 21502,
          distance_over_ground: 1134,
          distance_through_water: 7234,
          avgspeed: 291.89
        }
      ]);
    });
};
