exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_roles").insert([
        {
          id: 1,
          role: "superuser",
          status: true
        },
        {
          id: 2,
          role: "admin",
          status: true
        },
        {
          id: 3,
          role: "operator",
          status: true
        }
      ]);
    });
};
