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
          lon: 122133.15,
          lat: 24244.23,
          name: "ecas-Test1"
        },
        {
          lon: 178133.15,
          lat: 2744.23,
          name: "ecas-Test2"
        },
        {
          lon: 1223.15,
          lat: 26644.23,
          name: "ecas-Test3"
        }
      ]);
    });
};
