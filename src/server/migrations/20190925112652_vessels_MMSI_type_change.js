"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("vessels", table => {
    table
      .string("MMSI", 9)
      .notNullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("vessels", table => {
    table
      .decimal("MMSI")
      .notNullable()
      .alter();
  });
};
