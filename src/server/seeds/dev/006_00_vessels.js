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
          mmsi: "whatever",
          name: "hyf-vessel1"
        },
        {
          organization_id: 1,
          mmsi: "whatever",
          name: "hyf-vessel2"
        },
        {
          organization_id: 1,
          mmsi: "whatever",
          name: "hyf-vessel3"
        }
      ]);
    });
};
