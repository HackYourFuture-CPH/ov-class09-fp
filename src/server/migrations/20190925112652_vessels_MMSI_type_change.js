"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("vessels", table => {
    table
      .string("mmsi", 9)
      .notNullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.table("vessels", table => {
    table.dropColumn("mmsi");
  });
  return knex.schema.table("vessels", table => {
    table.decimal("mmsi", 8, 2).notNullable();
  });
};
