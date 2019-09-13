exports.up = function(knex, Promise) {
  return knex.schema
    .alterTable("waypoints", table => {
      table.dropForeign("route_id");
      table.dropIndex("route_id");
      table.dropForeign("port_id");
      table.dropIndex("port_id");
    })
    .alterTable("waypoints", table => {
      table
        .integer("route_id")
        .nullable()
        .alter();
      table
        .integer("port_id")
        .nullable()
        .alter();
    });
};

exports.down = function(knex, Promise) {
  return knex.schema.alterTable("waypoints", table => {
    table
      .integer("route_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("routes")
      .onDelete("CASCADE")
      .index()
      .alter();
    table
      .integer("port_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("ports")
      .onDelete("CASCADE")
      .index()
      .alter();
  });
};
