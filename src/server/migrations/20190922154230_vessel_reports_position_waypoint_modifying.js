"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("vessel_reports", table => {
    table
      .integer("position_waypoint")
      .unsigned()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("vessel_reports", table => {
    table.integer("position_waypoint").alter();
  });
};
