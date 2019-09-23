"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("suggested_routes", table => {
    table.datetime("eta").alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("suggested_routes", table => {
    table.date("eta").alter();
  });
};
