"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.table("waypoints", table => {
    table.integer("sequence_id").unsigned();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("waypoints", table => {
    table.dropColumn("sequence_id");
  });
};
