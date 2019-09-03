"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("waypoints", table => {
    table.increments("id").primary();
    table
      .integer("route_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("routes")
      .onDelete("CASCADE")
      .index();
    table
      .integer("port_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ports")
      .onDelete("CASCADE")
      .index();
    table.float("lon").notNullable();
    table.float("lat").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("waypoints");
};
