"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("ecas", table => {
    table
      .decimal("longitude", 11, 8)
      .notNullable()
      .alter();
    table
      .decimal("latitude", 10, 8)
      .notNullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("ecas", table => {
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
