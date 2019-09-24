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
