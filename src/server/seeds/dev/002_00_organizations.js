exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("organizations")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("organizations").insert([
        {
          name: "Sample company"
        }
      ]);
    });
};
