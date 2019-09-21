exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("selected_routes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("selected_routes").insert([
        {
          voyage_id: 1,
          route_id: 2
        },
        {
          voyage_id: 3,
          route_id: 2
        },
        {
          voyage_id: 1,
          route_id: 3
        }
      ]);
    });
};
