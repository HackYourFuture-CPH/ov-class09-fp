"use strict";

exports.up = function(knex, Promise) {
  return knex.schema.createTable("users", table => {
    table.increments("id").primary();
    table
      .integer("role_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("user_roles")
      .onDelete("CASCADE")
      .index();
    table
      .string("email", 50)
      .unique()
      .notNullable();
    table
      .integer("organization_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("organizations")
      .onDelete("CASCADE")
      .index();
    table.string("password").notNullable();
    table.string("name", 100).notNullable();
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
