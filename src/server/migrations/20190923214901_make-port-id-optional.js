exports.up = knex => {
  return knex.raw(
    "ALTER TABLE `waypoints` CHANGE `port_id` `port_id` INT(10) UNSIGNED NULL;"
  );
};

exports.down = knex => {
  return knex.raw(
    "ALTER TABLE `waypoints` CHANGE `port_id` `port_id` INT(10) UNSIGNED NOT NULL;"
  );
};
