"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("vessels", table => {
    table.increments("id").primary();
    table
      .integer("organization_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("organizations")
      .onDelete("CASCADE")
      .index();
    table.decimal("mmsi", 8, 2).notNullable();
    table.string("name", 255).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("vessels");
};
