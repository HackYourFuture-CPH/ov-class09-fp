"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table
      .integer("user_role_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("userRoles")
      .onDelete("CASCADE")
      .index();
    table
      .string("email")
      .unique()
      .notNullable();
    table.string("password").notNullable();
    table.string("name").notNullable();
    table.boolean("status").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
    table.text("session_token");
    table.text("refreshing_token");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("users");
};
