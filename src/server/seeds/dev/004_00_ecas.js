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
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test1"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test2"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test3"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test4"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test5"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test6"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test7"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test8"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test9"
        },
        {
          longitude: 55.589352,
          latitude: 12.298037,
          name: "ecas-Test10"
        }
      ]);
    });
};
