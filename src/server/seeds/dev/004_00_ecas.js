exports.seed = function(knex, Promise) {
  // Print filename
  var path = require("path");
  var scriptName = path.basename(__filename);
  console.info(`Running seed file: ${scriptName}`);

  // Deletes ALL existing entries
  return knex("ecas")
    .del()
    .then(function() {
      return knex.raw("ALTER TABLE " + "ecas" + " AUTO_INCREMENT = 1");
    })
    .then(function() {
      // Inserts seed entries
      return knex("ecas").insert([
        {
          longitude: -7.8585562,
          latitude: 42.3233666,
          name: "Holdlamis"
        },
        {
          longitude: 13.740288,
          latitude: 49.1333104,
          name: "Tres-Zap"
        },
        {
          longitude: -9.1836701,
          latitude: 39.3131016,
          name: "Sub-Ex"
        },
        {
          longitude: -66.8498883,
          latitude: 10.6135398,
          name: "Namfix"
        },
        {
          longitude: 39.8653499,
          latitude: 55.6583701,
          name: "Subin"
        },
        {
          longitude: 32.4706123,
          latitude: 53.4334331,
          name: "Lotstring"
        },
        {
          longitude: 111.5101759,
          latitude: -7.413598,
          name: "Temp"
        },
        {
          longitude: -119.8185447,
          latitude: 39.5251914,
          name: "Treeflex"
        },
        {
          longitude: -8.3487249,
          latitude: 41.5024723,
          name: "Cardguard"
        },
        {
          longitude: 112.4082849,
          latitude: -6.9748882,
          name: "Stim"
        }
      ]);
    });
};
