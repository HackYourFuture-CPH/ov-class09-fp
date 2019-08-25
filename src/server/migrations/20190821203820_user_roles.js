"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("userRoles", table => {
    table.increments("id").primary();
    table.string("role").notNullable();
    table.boolean("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("userRoles");
};
