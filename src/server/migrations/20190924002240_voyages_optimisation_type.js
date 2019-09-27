exports.up = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table
      .enu("optimisation_type", [
        "fixed_eta",
        "earliest_arrival",
        "least_cost_arrival"
      ])
      .notNullable()
      .alter();
  });
};

exports.down = function(knex) {
  return knex.schema.alterTable("voyages", table => {
    table
      .float("optimisation_type")
      .notNullable()
      .alter();
  });
};
