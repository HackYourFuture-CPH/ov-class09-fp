exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("suggested_routes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("suggested_routes").insert([
        {
          id: 1,
          voyage_id: 1,
          eta: 500,
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        },
        {
          id: 2,
          voyage_id: 2,
          eta: 600,
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        },
        {
          id: 3,
          voyage_id: 3,
          eta: 300,
          max_wave_height: 100,
          hfo: 10.12,
          lsfo: 123.56,
          total_cost: 23456,
          distance_over_ground: 2345,
          distance_through_water: 234234,
          avgspeed: 234.45
        }
      ]);
    });
};
