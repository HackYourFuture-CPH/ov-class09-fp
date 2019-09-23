"use strict";

exports.up = function(knex) {
  return knex.schema.table("voyages", table => {
    table
      .foreign("depart_from_waypoint")
      .references("waypoints.id")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
    table
      .foreign("arrive_at_waypoint")
      .references("waypoints.id")
      .onDelete("CASCADE")
      .onUpdate("RESTRICT");
  });
};

exports.down = function(knex) {
  return knex.schema.table("voyages", table => {
    table.dropForeign("depart_from_waypoint");
    table.dropForeign("arrive_at_waypoint");
  });
};
