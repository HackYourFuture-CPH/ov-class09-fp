"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("organizations", table => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.text("logo");
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("organizations");
};
