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
          organization_id: 1,
          mmsi: "235898000",
          name: "hyf-vessel1"
        },
        {
          organization_id: 1,
          mmsi: "235535000",
          name: "hyf-vessel2"
        },
        {
          organization_id: 1,
          mmsi: "235231010",
          name: "hyf-vessel3"
        }
      ]);
    });
};
