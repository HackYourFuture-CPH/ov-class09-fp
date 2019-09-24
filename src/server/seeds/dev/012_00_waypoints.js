exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("waypoints")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("waypoints").insert([
        {
          id: 1,
          suggested_route_id: 1,
          port_id: 1,
          longitude: 55.5889849,
          latitude: 12.2929406
        },
        {
          id: 2,
          suggested_route_id: 2,
          port_id: 2,
          longitude: 55.5889849,
          latitude: 12.2929406
        },
        {
          id: 3,
          suggested_route_id: 3,
          port_id: 3,
          longitude: 55.5889849,
          latitude: 12.2929406
        }
      ]);
    });
};
