exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("selected_routes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("selected_routes").insert([
        {
          voyage_id: 1,
          route_id: 7
        },
        {
          voyage_id: 7,
          route_id: 7
        },
        {
          voyage_id: 9,
          route_id: 3
        },
        {
          voyage_id: 5,
          route_id: 2
        },
        {
          voyage_id: 7,
          route_id: 2
        },
        {
          voyage_id: 2,
          route_id: 1
        },
        {
          voyage_id: 3,
          route_id: 4
        },
        {
          voyage_id: 6,
          route_id: 2
        },
        {
          voyage_id: 7,
          route_id: 8
        },
        {
          voyage_id: 5,
          route_id: 7
        }
      ]);
    });
};
