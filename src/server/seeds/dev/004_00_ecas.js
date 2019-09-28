exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("ecas")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ecas").insert([
        {
          longitude: 55.5893529,
          latitude: 12.2980372,
          name: "ecas-Test1"
        },
        {
          longitude: 55.5893529,
          latitude: 12.2980372,
          name: "ecas-Test2"
        },
        {
          longitude: 55.5893529,
          latitude: 12.2980372,
          name: "ecas-Test3"
        }
      ]);
    });
};
