"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table
      .integer("depart_from_waypoint")
      .unsigned()
      .alter();
    table
      .integer("arrive_at_waypoint")
      .unsigned()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table.integer("depart_from_waypoint").alter();
    table.integer("arrive_at_waypoint").alter();
  });
};
