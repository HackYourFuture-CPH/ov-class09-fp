"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("favorite_vessels", table => {
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .index();
    table
      .integer("vessel_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("vessels")
      .onDelete("CASCADE")
      .index();
    table.timestamp("created_at").defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("favorite_vessels");
};
