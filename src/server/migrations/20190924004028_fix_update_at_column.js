exports.up = function(knex) {
  return updateOrganization()
    .then(updatePorts)
    .then(updateSuggestedRoutes)
    .then(updateUserRoles)
    .then(updateUsers)
    .then(updateVessels)
    .then(updateVoyages)
    .then(updateWaypoints);

  function updateOrganization() {
    return knex.raw(
      "ALTER TABLE organizations MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
  function updatePorts() {
    return knex.raw(
      "ALTER TABLE ports MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
  function updateSuggestedRoutes() {
    return knex.raw(
      "ALTER TABLE suggested_routes MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
  function updateUserRoles() {
    return knex.raw(
      "ALTER TABLE user_roles MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
  function updateUsers() {
    return knex.raw(
      "ALTER TABLE users MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }

  function updateVessels() {
    return knex.raw(
      "ALTER TABLE vessels MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
  function updateVoyages() {
    return knex.raw(
      "ALTER TABLE voyages MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
  function updateWaypoints() {
    return knex.raw(
      "ALTER TABLE waypoints MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
    );
  }
};

exports.down = function(knex) {
  return (
    knex.raw(
      "ALTER TABLE organizations MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE ports MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE suggested_routes MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE user_roles MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE users MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE vessels MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE voyages MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    ),
    knex.raw(
      "ALTER TABLE waypoints MODIFY COLUMN updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP"
    )
  );
};
