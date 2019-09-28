"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.alterTable("suggested_routes", table => {
    table.dropForeign("voyage_id");
  });
};

exports.down = function(knex) {};
