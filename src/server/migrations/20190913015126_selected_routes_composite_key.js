"use strict";

exports.up = function(knex, Promise) {
  return knex.schema
    .alterTable("selected_routes", table => {
      table.dropForeign("voyage_id");
      table.dropIndex("voyage_id");
      table.dropForeign("route_id");
      table.dropIndex("route_id");
    })
    .alterTable("selected_routes", table => {
      table.primary(["voyage_id", "route_id", "created_at"]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .alterTable("selected_routes", table => {
      table
        .integer("voyage_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("voyages")
        .onDelete("CASCADE")
        .index()
        .alter();

      table
        .integer("route_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("voyages")
        .onDelete("CASCADE")
        .index()
        .alter();
    })
    .table("selected_routes", table => {
      table.dropPrimary(["voyage_id", "route_id", "created_at"]);
    });
};
