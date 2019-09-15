"use strict";

exports.up = function(knex, Promise) {
  return knex.schema
    .alterTable("favorite_vessels", table => {
      table.dropForeign("user_id");
      table.dropIndex("user_id");
      table.dropForeign("vessel_id");
      table.dropIndex("vessel_id");
    })
    .alterTable("favorite_vessels", table => {
      table.primary(["user_id", "vessel_id"]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .alterTable("favorite_vessels", table => {
      table
        .integer("user_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("voyages")
        .onDelete("CASCADE")
        .index()
        .alter();

      table
        .integer("vessel_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("voyages")
        .onDelete("CASCADE")
        .index()
        .alter();
    })
    .table("favorite_vessels", table => {
      table.dropPrimary(["user_id", "vessel_id"]);
    });
};
