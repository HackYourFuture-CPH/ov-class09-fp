"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("vessel_reports", table => {
    table.increments("id").primary();
    table
      .integer("vessel_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("vessels")
      .onDelete("CASCADE")
      .index();
    table.integer("position").notNullable();
    table.float("current_speed").notNullable();
    table.float("hfo_consumption").notNullable();
    table.float("lsfo_consumption").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("vessel_reports");
};
