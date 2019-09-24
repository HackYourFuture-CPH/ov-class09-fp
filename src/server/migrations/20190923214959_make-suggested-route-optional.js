exports.up = knex => {
  return knex.raw(
    "ALTER TABLE `waypoints` CHANGE `suggested_route_id` `suggested_route_id` INT(10) UNSIGNED NULL;"
  );
};

exports.down = knex => {
  return knex.raw(
    "ALTER TABLE `waypoints` CHANGE `suggested_route_id` `suggested_route_id` INT(10) UNSIGNED NOT NULL;"
  );
};
