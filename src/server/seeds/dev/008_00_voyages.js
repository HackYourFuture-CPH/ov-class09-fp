exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("voyages")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("voyages").insert([
        {
          id: 1,
          vessel_id: 1,
          etd: "2019-12-20",
          eta: "2018-11-23",
          forwarddraft: 2323.22,
          aftdraft: 2242.24,
          optimisation_type: 1,
          depart_from: 12,
          arrive_at: 14,
          sailtime: 34.45,
          hfocost: 12334.55,
          lsfocost: 34355.55,
          hirerate: 2333.33,
          status: "created"
        },
        {
          id: 2,
          vessel_id: 2,
          etd: "2019-12-20",
          eta: "2018-11-23",
          forwarddraft: 2323.22,
          aftdraft: 2242.24,
          optimisation_type: 1,
          depart_from: 12,
          arrive_at: 14,
          sailtime: 34.45,
          hfocost: 12334.55,
          lsfocost: 34355.55,
          hirerate: 2333.33,
          status: "ongoing"
        },
        {
          id: 3,
          vessel_id: 3,
          etd: "2019-12-20",
          eta: "2018-11-23",
          forwarddraft: 2323.22,
          aftdraft: 2242.24,
          optimisation_type: 1,
          depart_from: 12,
          arrive_at: 14,
          sailtime: 34.45,
          hfocost: 12334.55,
          lsfocost: 34355.55,
          hirerate: 2333.33,
          status: "completed"
        }
      ]);
    });
};
