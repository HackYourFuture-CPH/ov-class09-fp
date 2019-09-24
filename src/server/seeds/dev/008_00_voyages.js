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
          vessel_id: 1,
          etd: "2019-09-23 21:57:09",
          eta: "2019-09-23 21:57:09",
          forwarddraft: 2323.22,
          aftdraft: 2242.24,
          optimisation_type: 1,
          depart_from_waypoint: "fixed_eta",
          arrive_at_waypoint: 2,
          sailtime: 34.45,
          hfocost: 12334.55,
          lsfocost: 34355.55,
          hirerate: 2333.33,
          status: "created"
        },
        {
          vessel_id: 2,
          etd: "2019-09-23 21:57:09",
          eta: "2019-09-23 21:57:09",
          forwarddraft: 2323.22,
          aftdraft: 2242.24,
          optimisation_type: "earliest_arrival",
          depart_from_waypoint: 3,
          arrive_at_waypoint: 1,
          sailtime: 34.45,
          hfocost: 12334.55,
          lsfocost: 34355.55,
          hirerate: 2333.33,
          status: "ongoing"
        },
        {
          vessel_id: 3,
          etd: "2019-09-23 21:57:09",
          eta: "2019-09-23 21:57:09",
          forwarddraft: 2323.22,
          aftdraft: 2242.24,
          optimisation_type: "least_cost_arrival",
          depart_from_waypoint: 2,
          arrive_at_waypoint: 3,
          sailtime: 34.45,
          hfocost: 12334.55,
          lsfocost: 34355.55,
          hirerate: 2333.33,
          status: "completed"
        }
      ]);
    });
};
