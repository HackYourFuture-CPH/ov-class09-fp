"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("ecas", table => {
    table.renameColumn("lon", "longitude").alter();
    table.renameColumn("lat", "latitude").alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("ecas", table => {
    table.renameColumn("longitude", "lon").alter();
    table.renameColumn("latitude", "lat").alter();
  });
};
