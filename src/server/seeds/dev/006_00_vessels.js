exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("vessels")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("vessels").insert([
        {
          id: 1,
          organization_id: 1,
          mmsi: 23.33,
          name: "hyf-vessel1"
        },
        {
          id: 2,
          organization_id: 1,
          mmsi: 45.33,
          name: "hyf-vessel2"
        },
        {
          id: 3,
          organization_id: 1,
          mmsi: 24.33,
          name: "hyf-vessel3"
        }
      ]);
    });
};
