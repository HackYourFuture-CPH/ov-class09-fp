"use strict";

exports.up = function(knex) {
  return knex.schema.table("vessel_reports", table => {
    table
      .integer("selected_route_id")
      .unsigned()
      .references("id")
      .inTable("suggested_routes")
      .onDelete("CASCADE")
      .index();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("vessel_reports", table => {
    table.dropForeign("selected_route_id");
    table.dropIndex("selected_route_id");
    table.dropColumn("selected_route_id");
  });
};
