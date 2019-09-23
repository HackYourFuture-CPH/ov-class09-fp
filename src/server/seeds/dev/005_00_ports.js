exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("ports")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ports").insert([
        {
          id: 1,
          name: "port1"
        },
        {
          id: 2,
          name: "port2"
        },
        {
          id: 3,
          name: "port3"
        }
      ]);
    });
};
