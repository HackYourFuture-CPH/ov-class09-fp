"use strict";

exports.up = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table
      .integer("selected_route")
      .unsigned()
      .references("id")
      .inTable("suggested_routes")
      .onDelete("CASCADE")
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("vessel_reports", table => {
    table.dropForeign("selected_route");
    table.dropIndex("selected_route");
    table.dropColumn("selected_route");
  });
};
