"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("waypoints", table => {
    table.renameColumn("route_id", "suggested_route_id");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("waypoints", table => {
    table.renameColumn("suggested_route_id", "route_id");
  });
};
