"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.dropTable("selected_routes");
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable("selected_routes", table => {
    table
      .integer("voyage_id")
      .unsigned()
      .notNullable()
      .index();
    table
      .integer("route_id")
      .unsigned()
      .notNullable()
      .index();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};
