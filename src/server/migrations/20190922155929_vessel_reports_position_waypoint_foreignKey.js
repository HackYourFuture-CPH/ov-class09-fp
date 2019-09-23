"use strict";

exports.up = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table
      .foreign("position_waypoint")
      .references("waypoints.id")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table.dropForeign("position_waypoint");
  });
};
