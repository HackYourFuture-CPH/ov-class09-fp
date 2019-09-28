exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("voyages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("voyages").insert([
        {
          vessel_id: 7,
          etd: "2018-12-05 23:06:33",
          eta: "2018-10-20 04:07:28",
          forwarddraft: 2467.48,
          aftdraft: 2486.83,
          optimisation_type: "fixed_eta",
          depart_from_waypoint: 5,
          arrive_at_waypoint: 2,
          sailtime: 48.91,
          hfocost: 22927.02,
          lsfocost: 28273.7,
          hirerate: 16911.43,
          status: "ongoing"
        },
        {
          vessel_id: 5,
          etd: "2019-05-30 23:12:29",
          eta: "2019-07-25 08:25:35",
          forwarddraft: 2700.99,
          aftdraft: 2513.15,
          optimisation_type: "earliest_arrival",
          depart_from_waypoint: 1,
          arrive_at_waypoint: 2,
          sailtime: 23.25,
          hfocost: 23930.38,
          lsfocost: 15000.84,
          hirerate: 11249.17,
          status: "created"
        },
        {
          vessel_id: 4,
          etd: "2019-01-15 07:44:20",
          eta: "2019-09-05 03:32:49",
          forwarddraft: 2977.78,
          aftdraft: 2565.79,
          optimisation_type: "least_cost_arrival",
          depart_from_waypoint: 3,
          arrive_at_waypoint: 1,
          sailtime: 21.25,
          hfocost: 22559.98,
          lsfocost: 11376.57,
          hirerate: 25300.08,
          status: "ongoing"
        },
        {
          vessel_id: 4,
          etd: "2019-05-19 00:04:22",
          eta: "2018-10-15 11:09:59",
          forwarddraft: 2186.28,
          aftdraft: 2913.92,
          optimisation_type: "earliest_arrival",
          depart_from_waypoint: 2,
          arrive_at_waypoint: 3,
          sailtime: 31.99,
          hfocost: 21762.0,
          lsfocost: 17871.23,
          hirerate: 20001.84,
          status: "completed"
        },
        {
          vessel_id: 6,
          etd: "2018-10-30 01:36:18",
          eta: "2019-03-07 17:13:54",
          forwarddraft: 1327.47,
          aftdraft: 2104.84,
          optimisation_type: "least_cost_arrival",
          depart_from_waypoint: 2,
          arrive_at_waypoint: 5,
          sailtime: 38.2,
          hfocost: 29393.21,
          lsfocost: 18643.8,
          hirerate: 15016.25,
          status: "completed"
        },
        {
          vessel_id: 9,
          etd: "2019-08-14 19:46:05",
          eta: "2019-03-17 17:15:12",
          forwarddraft: 2748.13,
          aftdraft: 2678.04,
          optimisation_type: "fixed_eta",
          depart_from_waypoint: 4,
          arrive_at_waypoint: 2,
          sailtime: 32.92,
          hfocost: 10774.2,
          lsfocost: 26536.97,
          hirerate: 25376.06,
          status: "ongoing"
        },
        {
          vessel_id: 1,
          etd: "2018-12-03 22:43:20",
          eta: "2019-02-07 05:45:44",
          forwarddraft: 2607.55,
          aftdraft: 2916.6,
          optimisation_type: "earliest_arrival",
          depart_from_waypoint: 4,
          arrive_at_waypoint: 3,
          sailtime: 26.37,
          hfocost: 20671.65,
          lsfocost: 25763.39,
          hirerate: 13040.45,
          status: "created"
        },
        {
          vessel_id: 2,
          etd: "2019-03-03 18:57:12",
          eta: "2019-06-09 14:30:04",
          forwarddraft: 1443.78,
          aftdraft: 2609.15,
          optimisation_type: "least_cost_arrival",
          depart_from_waypoint: 7,
          arrive_at_waypoint: 1,
          sailtime: 40.14,
          hfocost: 23733.33,
          lsfocost: 27105.28,
          hirerate: 27712.71,
          status: "created"
        },
        {
          vessel_id: 3,
          etd: "2018-11-26 22:22:56",
          eta: "2019-01-03 01:33:02",
          forwarddraft: 2617.9,
          aftdraft: 2789.04,
          optimisation_type: "earliest_arrival",
          depart_from_waypoint: 7,
          arrive_at_waypoint: 10,
          sailtime: 48.23,
          hfocost: 29939.6,
          lsfocost: 20753.16,
          hirerate: 15179.05,
          status: "completed"
        },
        {
          vessel_id: 3,
          etd: "2018-10-24 13:06:30",
          eta: "2019-03-10 16:00:50",
          forwarddraft: 2532.63,
          aftdraft: 2938.84,
          optimisation_type: "earliest_arrival",
          depart_from_waypoint: 3,
          arrive_at_waypoint: 1,
          sailtime: 36.7,
          hfocost: 20683.23,
          lsfocost: 14533.06,
          hirerate: 29353.75,
          status: "ongoing"
        }
      ]);
    });
};
