"use strict";

exports.up = function(knex, Promise) {};

exports.down = function(knex) {
  return knex.schema
    .alterTable("suggested_routes", table => {
      table.dropForeign("vessel_report_id");
      table.dropIndex("vessel_report_id");
      table.dropColumn("vessel_report_id");
    })
    .table("suggested_routes", table => {
      table
        .integer("voyage_id")
        .unsigned()
        .notNullable()
        .defaultTo(1) // All the values are reset to 1 to ensure that it does not break foreign key constraint suggested_routes_voyage_id_foreign
        .references("id")
        .inTable("voyages")
        .onDelete("CASCADE")
        .index();
    });
};
