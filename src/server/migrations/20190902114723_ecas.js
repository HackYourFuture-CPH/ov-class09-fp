"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("ecas", table => {
    table.increments("id").primary();
    table.float("lon").notNullable();
    table.float("lat").notNullable();
    table.string("name", 255).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("ecas");
};
