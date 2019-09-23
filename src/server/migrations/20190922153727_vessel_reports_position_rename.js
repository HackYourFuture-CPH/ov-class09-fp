"use strict";

exports.up = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table.renameColumn("position", "position_waypoint");
  });
};

exports.down = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table.renameColumn("position_waypoint", "position");
  });
};
