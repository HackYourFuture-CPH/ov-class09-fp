exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_roles").insert([
        {
          id: 1,
          role: "Admin",
          status: true
        },
        {
          id: 2,
          role: "User",
          status: true
        },
        {
          id: 3,
          role: "Guest",
          status: true
        }
      ]);
    });
};
