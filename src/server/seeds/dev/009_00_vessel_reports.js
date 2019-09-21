exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("vessel_reports")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vessel_reports").insert([
        {
          id: 1,
          vessel_id: 1,
          position: 5,
          current_speed: 234.44,
          hfo_consumption: 212.22,
          lsfo_consumption: 3445.55
        },
        {
          id: 2,
          vessel_id: 2,
          position: 3,
          current_speed: 234.44,
          hfo_consumption: 212.22,
          lsfo_consumption: 3445.55
        },
        {
          id: 3,
          vessel_id: 1,
          position: 4,
          current_speed: 234.44,
          hfo_consumption: 212.22,
          lsfo_consumption: 3445.55
        }
      ]);
    });
};
