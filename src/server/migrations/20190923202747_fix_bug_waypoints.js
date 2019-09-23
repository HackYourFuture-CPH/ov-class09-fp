exports.up = function(knex) {
  return knex.schema
    .table("waypoints", table => {
      table.dropForeign("port_id");
      table.dropIndex("port_id");
    })
    .alterTable("waypoints", table => {
      table
        .integer("port_id", 10)
        .nullable()
        .alter();
    });
};

exports.down = function(knex) {
  return knex.schema.table("waypoints", table => {
    table
      .foreign("port_id", "waypoints_port_id_foreign")
      .references("ports.id")
      .notNullable()
      .onDelete("CASCADE");
  });
};
