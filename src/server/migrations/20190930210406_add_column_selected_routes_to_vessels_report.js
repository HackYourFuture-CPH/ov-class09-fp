"use strict";

exports.up = function(knex) {
  return knex.schema.table("suggested_routes", table => {
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

exports.down = function(knex) {};
