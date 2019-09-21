exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("waypoints")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("waypoints").insert([
        {
          id: 1,
          route_id: 1,
          port_id: 1,
          lon: 2344.44,
          lat: 2234.87
        },
        {
          id: 2,
          route_id: 2,
          port_id: 2,
          lon: 2344.44,
          lat: 2234.87
        },
        {
          id: 3,
          route_id: 3,
          port_id: 3,
          lon: 2344.44,
          lat: 2234.87
        }
      ]);
    });
};
