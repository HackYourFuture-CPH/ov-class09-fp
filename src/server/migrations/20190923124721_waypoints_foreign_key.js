"use strict";

exports.up = function(knex) {
  return knex.schema.table("waypoints", table => {
    table.dropForeign("suggested_route_id", "waypoints_route_id_foreign");
    table
      .foreign("suggested_route_id")
      .references("suggested_routes.id")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.table("waypoints", table => {
    table.dropForeign("suggested_route_id");
    table
      .foreign("suggested_route_id", "waypoints_route_id_foreign")
      .references("suggested_routes.id")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
  });
};
