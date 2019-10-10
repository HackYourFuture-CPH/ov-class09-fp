"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("waypoints", table => {
    table.renameColumn("lon", "longitude");
    table.renameColumn("lat", "latitude");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("waypoints", table => {
    table.renameColumn("longitude", "lon");
    table.renameColumn("latitude", "lat");
  });
};