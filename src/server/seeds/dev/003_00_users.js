exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          role_id: 1,
          organization_id: 1,
          email: "test@test.com",
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "admin",
          status: true,
          session_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN0Ijp7ImlkIjo0LCJ1c2VyX3JvbGVfaWQiOjEsImxhbmd1YWdlX2lkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJuaWNrbmFtZSI6InRlc3QtYWRtaW4iLCJzdGF0dXMiOjEsImNyZWF0ZWRfYXQiOiIyMDE5LTA4LTIxVDE4OjA3OjU1LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxOS0wOC0yMVQxODowNzo1NS4wMDBaIiwicm9sZSI6IkFkbWluIiwidXNlclJvbGVzSWQiOjF9LCJpYXQiOjE1NjY1NDg0NTIsImV4cCI6MTU2NjU4NDQ1Mn0.O_sXvKjLDg1XOvFzRZvKOx0pjVe0aNMGvP8lQJ_lMqA",
          refreshing_token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyZXN0Ijp7ImlkIjo0LCJ1c2VyX3JvbGVfaWQiOjEsImxhbmd1YWdlX2lkIjoxLCJlbWFpbCI6InRlc3RAdGVzdC5jb20iLCJuaWNrbmFtZSI6InRlc3QtYWRtaW4iLCJzdGF0dXMiOjEsImNyZWF0ZWRfYXQiOiIyMDE5LTA4LTIxVDE4OjA3OjU1LjAwMFoiLCJ1cGRhdGVkX2F0IjoiMjAxOS0wOC0yMVQxODowNzo1NS4wMDBaIiwicm9sZSI6IkFkbWluIiwidXNlclJvbGVzSWQiOjF9LCJpYXQiOjE1NjY1NDg0NTIsImV4cCI6MTU4MjEwMDQ1Mn0.pnCBtGLmVb1pB_O2oIvkrg17btRARLrl4A-PgKhsmXI"
        },
        {
          id: 2,
          role_id: 2,
          organization_id: 1,
          email: "admin@test.com",
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "admin",
          status: true,
          session_token: "",
          refreshing_token: ""
        },
        {
          id: 3,
          role_id: 3,
          organization_id: 1,
          email: "operator@test.com",
          password:
            "$2a$10$Wc3LUE3iU/Y5VCtEnr8Ubu/cMF5vkUkxC..GxBCc/XiL397a5Pbam",
          name: "operator",
          status: true,
          session_token: "",
          refreshing_token: ""
        }
      ]);
    });
};
