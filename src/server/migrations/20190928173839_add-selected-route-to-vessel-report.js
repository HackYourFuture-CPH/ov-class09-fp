"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.table("vessel_reports", table => {
    table
      .foreign("selected_route")
      .references("id")
      .inTable("suggested_routes")
      .onDelete("CASCADE")
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.table("vessel_reports", table => {
    table.dropColumn("selected_route");
  });
};
