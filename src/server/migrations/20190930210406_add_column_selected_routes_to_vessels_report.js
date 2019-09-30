"use strict";

exports.up = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table
      .integer("selected_routes")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("suggested_routes")
      .onDelete("CASCADE")
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("vessel_reports", table => {
    table.dropForeign("selected_routes");
    table.dropIndex("selected_routes");
    table.dropColumn("selected_routes");
  });
};
