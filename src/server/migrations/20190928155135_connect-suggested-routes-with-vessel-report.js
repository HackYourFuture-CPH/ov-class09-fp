"use strict";

exports.up = function(knex, Promise) {
  return knex.schema
    .alterTable("suggested_routes", table => {
      table.dropForeign("voyage_id");
      table.dropIndex("voyage_id", "routes_voyage_id_index");
      table.dropColumn("voyage_id");
    })
    .table("suggested_routes", table => {
      table
        .integer("vessel_report_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("vessel_reports")
        .onDelete("CASCADE")
        .index();
    });
};

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
        .references("id")
        .inTable("voyages")
        .onDelete("CASCADE")
        .index();
    });
};
