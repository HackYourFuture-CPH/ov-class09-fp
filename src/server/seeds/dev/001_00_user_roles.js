exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("user_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_roles").insert([
        {
          role: "superuser",
          status: true
        },
        {
          role: "admin",
          status: true
        },
        {
          role: "operator",
          status: true
        }
      ]);
    });
};
