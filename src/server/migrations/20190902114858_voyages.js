"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("voyages", table => {
    table.increments("id").primary();
    table
      .integer("vessel_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("vessels")
      .onDelete("CASCADE")
      .index();
    table.date("etd").notNullable();
    table.date("eta").notNullable();
    table.float("forwarddraft").notNullable();
    table.float("aftdraft").notNullable();
    table.float("optimisation_type").notNullable();
    table.integer("depart_from").notNullable();
    table.integer("arrive_at").notNullable();
    table.float("sailtime").notNullable();
    table.float("hfocost").notNullable();
    table.float("lsfocost").notNullable();
    table.float("hirerate").notNullable();
    table.enum("status", ["created", "ongoing", "completed"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("voyages");
};
