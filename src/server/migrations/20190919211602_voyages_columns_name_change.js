"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table.renameColumn("arrive_at", "arrive_at_waypoint");
    table.renameColumn("depart_from", "depart_from_waypoint");
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table.renameColumn("arrive_at_waypoint", "arrive_at");
    table.renameColumn("depart_from_waypoint", "depart_from");
  });
};
