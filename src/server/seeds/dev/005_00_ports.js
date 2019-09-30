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
          name: "newpoint"
        },
        {
          name: "las palmas"
        },
        {
          name: "panama_anchorage_pacific"
        },
        {
          name: "hellefiske"
        },
        {
          name: "hamburg"
        },
        {
          name: "santos"
        },
        {
          name: "racalada"
        },
        {
          name: "santos"
        },
        {
          name: "conakry"
        },
        {
          name: "vila_do_conde"
        },
        {
          name: "volos_anch"
        },
        {
          name: "douala"
        },
        {
          name: "portland_anch"
        },
        {
          name: "milne"
        },
        {
          name: "rotterdam_anch"
        },
        {
          name: "las_palmas_anch"
        },
        {
          name: "rotterdam_pilot"
        },
        {
          name: "douala_deep"
        },
        {
          name: "abidjan"
        },
        {
          name: "gabes"
        },
        {
          name: "gibraltar_east_anch"
        }
      ]);
    });
};
