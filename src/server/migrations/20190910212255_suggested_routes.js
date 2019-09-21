exports.up = function(knex) {
  return knex.schema.renameTable("routes", "suggested_routes");
};

exports.down = function(knex) {
  return knex.schema.renameTable("suggested_routes", "routes");
};
