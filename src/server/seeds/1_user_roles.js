exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("user_roles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("user_roles").insert([
        {
          id: 1,
<<<<<<< HEAD
          role: "Admin",
=======
          role: "superuser",
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
          status: true
        },
        {
          id: 2,
<<<<<<< HEAD
          role: "User",
=======
          role: "admin",
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
          status: true
        },
        {
          id: 3,
<<<<<<< HEAD
          role: "Guest",
=======
          role: "operator",
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
          status: true
        }
      ]);
    });
};
