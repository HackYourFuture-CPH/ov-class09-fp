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
          name: "Myworks"
        },
        {
          name: "Oyoloo"
        },
        {
          name: "Photolist"
        },
        {
          name: "Shuffletag"
        },
        {
          name: "Browsetype"
        },
        {
          name: "Trudeo"
        },
        {
          name: "Kvideo"
        },
        {
          name: "Livetube"
        },
        {
          name: "Quire"
        },
        {
          name: "Browsezoom"
        },
        {
          name: "Rhyzio"
        },
        {
          name: "Meemm"
        },
        {
          name: "Cogidoo"
        },
        {
          name: "Wikido"
        }
      ]);
    });
};
