"use strict";

var fs = require("fs");

exports.up = function(knex) {
  var sql = fs.readFileSync("./migrations/Schema.sql").toString();

  return knex.schema.raw(sql);
};

exports.down = function(knex) {};
