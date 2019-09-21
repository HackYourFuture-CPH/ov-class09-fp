exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("favourite_vessels")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("favourite_vessels").insert([
        {
          user_id: 1,
          vessel_id: 1
        },
        {
          user_id: 2,
          vessel_id: 2
        },
        {
          user_id: 3,
          vessel_id: 3
        }
      ]);
    });
};
