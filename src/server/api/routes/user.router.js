"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

// controllers
const userController = require("../controllers/user.controller");

// ENDPOINT: /api/users/ :GET
<<<<<<< HEAD
router.get("/", authorizeUser("Admin", "User"), (req, res, next) => {
=======
router.get("/", authorizeUser("superuser", "admin"), (req, res, next) => {
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
  userController
    .getUsers(req)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/:id :GET
<<<<<<< HEAD

router.get("/:id", authorizeUser("Admin", "User"), function(req, res, next) {
=======
router.get("/:id", authorizeUser("superuser", "admin", "operator"), function(
  req,
  res,
  next
) {
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
  userController
    .getUserById(req.params.id)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/account :GET
<<<<<<< HEAD
router.get("/account", authorizeUser("Admin", "User"), (req, res, next) => {
  userController
    .getAccount(req)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/ :POST
router.post("/", (req, res, next) => {
=======
router.get(
  "/account",
  authorizeUser("superuser", "admin", "operator"),
  (req, res, next) => {
    userController
      .getAccount(req)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/users/ :POST
router.post("/", authorizeUser("superuser", "admin"), (req, res, next) => {
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
  userController
    .createUser({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/ :PATCH
<<<<<<< HEAD
router.patch("/", authorizeUser("Admin", "User"), (req, res, next) => {
  userController
    .editUser({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/editUserRole/:id :PATCH
router.patch("/editUserRole/:id", authorizeUser("Admin"), (req, res, next) => {
  userController
    .editUserRole({
      body: req.body,
      id: req.params.id
    })
    .then(result => res.json(result))
    .catch(next);
});
=======
router.patch(
  "/",
  authorizeUser("superuser", "admin", "operator"),
  (req, res, next) => {
    userController
      .editUser({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/users/editUserRole/:id :PATCH
router.patch(
  "/editUserRole/:id",
  authorizeUser("superuser"),
  (req, res, next) => {
    userController
      .editUserRole({
        body: req.body,
        id: req.params.id
      })
      .then(result => res.json(result))
      .catch(next);
  }
);
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e

// ENDPOINT: /api/users/sendPasswordResetCode :PATCH
router.post("/sendPasswordResetCode", (req, res, next) => {
  userController
    .sendPasswordResetCode({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/resetPasswordWithCode :PATCH
router.post("/resetPasswordWithCode", (req, res, next) => {
  userController
    .resetPasswordWithCode({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :PATCH
router.post("/changePasswordRandomly", (req, res, next) => {
  userController
    .changePasswordRandomly({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/example/ :DELETE
<<<<<<< HEAD
router.delete("/", authorizeUser("Admin", "User"), (req, res, next) => {
=======
router.delete("/", authorizeUser("superuser", "admin"), (req, res, next) => {
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e
  userController
    .deleteUser({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
