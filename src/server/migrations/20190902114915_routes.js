"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("routes", table => {
    table.increments("id").primary();
    table
      .integer("voyage_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("voyages")
      .onDelete("CASCADE")
      .index();
    table.date("eta").notNullable();
    table.float("max_wave_height").notNullable();
    table.float("hfo").notNullable();
    table.float("lsfo").notNullable();
    table.float("total_cost").notNullable();
    table.float("distance_over_ground").notNullable();
    table.float("distance_through_water").notNullable();
    table.float("avgspeed").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("routes");
};
