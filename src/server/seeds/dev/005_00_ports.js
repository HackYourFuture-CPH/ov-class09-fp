exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ports")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ports").insert([
        {
          id: 1,
          name: "port1"
        },
        {
          id: 2,
          name: "port2"
        },
        {
          id: 3,
          name: "port3"
        }
      ]);
    });
};
