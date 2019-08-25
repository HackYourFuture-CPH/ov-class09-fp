exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("userRoles")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("userRoles").insert([
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
