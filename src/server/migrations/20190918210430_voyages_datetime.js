"use strict";

exports.up = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table.datetime("etd").alter();
    table.datetime("eta").alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table.date("etd").alter();
    table.date("eta").alter();
  });
};
