"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("waypoints", table => {
    table
      .decimal("longitude", 9, 6)
      .notNullable()
      .alter();
    table
      .decimal("latitude", 8, 6)
      .notNullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("waypoints", table => {
    table
      .float("longitude")
      .notNullable()
      .alter();
    table
      .float("latitude")
      .notNullable()
      .alter();
  });
};
