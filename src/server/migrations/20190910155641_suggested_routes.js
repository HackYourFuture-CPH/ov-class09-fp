
exports.up = function(knex) {
    return knex.schema.renameTable('routes', 'suggested_routes')
};

exports.down = function(knex) {
  
};
