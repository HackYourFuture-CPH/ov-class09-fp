"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const userController = require("../controllers/user.controller");

// ENDPOINT: /api/users/ :GET
router.get("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  userController
    .getUsers(req)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/users/:id :GET
router.get(
  "/:id",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  function(req, res, next) {
    userController
      .getUserById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/users/account :GET
router.get(
  "/account",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    userController
      .getAccount(req)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/users/ :POST
router.post(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    userController
      .createUser({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/users/ :PATCH
router.patch(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
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
  authorizeUser(ROLES.SUPER_USER),
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
router.delete(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    userController
      .deleteUser({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
