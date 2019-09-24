exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ecas")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ecas").insert([
        {
          id: 1,
          longitude: 55.5889849,
          latitude: 12.2929406,
          name: "ecas-Test1"
        },
        {
          id: 2,
          longitude: 55.5889849,
          latitude: 12.2929406,
          name: "ecas-Test2"
        },
        {
          id: 3,
          longitude: 55.5889849,
          latitude: 12.2929406,
          name: "ecas-Test3"
        }
      ]);
    });
};
