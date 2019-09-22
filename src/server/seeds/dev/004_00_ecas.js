exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("ecas")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("ecas").insert([
        {
          id: 1,
          lon: 122133.15,
          lat: 24244.23,
          name: "ecas-Test1"
        },
        {
          id: 2,
          lon: 178133.15,
          lat: 2744.23,
          name: "ecas-Test2"
        },
        {
          id: 3,
          lon: 1223.15,
          lat: 26644.23,
          name: "ecas-Test3"
        }
      ]);
    });
};
