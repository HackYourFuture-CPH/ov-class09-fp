exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("favorite_vessels")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("favorite_vessels").insert([
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
