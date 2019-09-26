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
    table.date("et").notNullable();
    table.date("eta").notNullable();
    table.float("forwarddraft").notNullable();
    table.float("aftraft").notNullable();
    table.float("optisation_type").notNullable();
    table.integer("depart_from").notNullable();
    table.integer("arrive_at").notNullable();
    table.float("sailtime").notNullable();
    table.float("hfcost").notNullable();
    table.float("lsfocost").notNullable();
    table.float("hrerate").notNullable();
    table.enum("status", ["created", "ongoing", "completed"]).notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("voyages");
};
