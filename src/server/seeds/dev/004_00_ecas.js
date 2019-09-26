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
        },
        {
          lon: 4523.15,
          lat: 74852.23,
          name: "ecas-Test4"
        },
        {
          lon: 44744.15,
          lat: 41295.23,
          name: "ecas-Test5"
        },
        {
          lon: 7253.15,
          lat: 42515.23,
          name: "ecas-Test6"
        },
        {
          lon: 4125.15,
          lat: 42354.23,
          name: "ecas-Test7"
        },
        {
          lon: 4522.15,
          lat: 7452.23,
          name: "ecas-Test8"
        },
        {
          lon: 7532.15,
          lat: 21597.23,
          name: "ecas-Test9"
        },
        {
          lon: 75853.15,
          lat: 14222.23,
          name: "ecas-Test10"
        }
      ]);
    });
};
