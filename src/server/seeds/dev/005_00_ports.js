exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("ports")
    .del()
    .then(function() {
      return knex.raw("ALTER TABLE " + "ports" + " AUTO_INCREMENT = 1");
    })
    .then(function() {
      // Inserts seed entries
      return knex("ports").insert([
        {
          name: "Newpoint",
          depth: -11,
          latitude: 51.45,
          longitude: -3.0
        },
        {
          name: "Las Palmas",
          depth: -333,
          latitude: 28.1083,
          longitude: -15.3617
        },
        {
          name: "Panama Anchorage Pacific",
          depth: 18,
          latitude: 8.8779,
          longitude: -79.505985
        },
        {
          name: "Hellefiske",
          depth: -44,
          latitude: 67.5,
          longitude: -55.0
        },
        {
          name: "Hamburg",
          depth: -19,
          latitude: 54.03813,
          longitude: 8.127501
        },
        {
          name: "Santos",
          depth: -24,
          latitude: -24.125385,
          longitude: -46.290725
        },
        {
          name: "Racalada",
          depth: -14,
          latitude: -35.61958,
          longitude: -55.889475
        },
        {
          name: "Santos",
          depth: -24,
          latitude: -24.125385,
          longitude: -46.290725
        },
        {
          name: "Conakry",
          depth: -10,
          latitude: 9.448638,
          longitude: -13.7124
        },
        {
          name: "Vila Do Conde",
          depth: -22,
          latitude: -1.0862075,
          longitude: -48.481465
        },
        {
          name: "Volos Anch",
          depth: -40,
          latitude: 39.331645,
          longitude: 22.969835
        },
        {
          name: "Douala",
          depth: -9,
          latitude: 3.7,
          longitude: 9.5
        },
        {
          name: "Portland Anch",
          depth: -17,
          latitude: 50.609335,
          longitude: -2.391844
        },
        {
          name: "Milne",
          depth: -134,
          latitude: 72.2,
          longitude: -80.7
        },
        {
          name: "Rotterdam Anch",
          depth: -27,
          latitude: 52.0584,
          longitude: 3.378296
        },
        {
          name: "Las Palmas Anch",
          depth: -105,
          latitude: 28.114495,
          longitude: -15.38717
        },
        {
          name: "Rotterdam Pilot",
          depth: -24,
          latitude: 52.028333,
          longitude: 3.895
        },
        {
          name: "Douala Deep",
          depth: -86,
          latitude: 3.82,
          longitude: 8.6
        },
        {
          name: "Abidjan",
          depth: -50,
          latitude: 5.2066895,
          longitude: -4.054985
        },
        {
          name: "Gabes",
          depth: -17,
          latitude: 34.001345,
          longitude: 10.231738
        },
        {
          name: "Gibraltar East Anch",
          depth: -49,
          latitude: 36.131985,
          longitude: -5.308113
        },
        {
          name: "Copenhagen",
          depth: -27,
          latitude: 55.7416,
          longitude: 12.6252
        },
        {
          name: "Istanbul",
          depth: -38,
          latitude: 41.0077,
          longitude: 29.0081
        }
      ]);
    });
};
