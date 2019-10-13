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

// ENDPOINT: /api/user-roles/:role/users :GET
router.get(
  "/:role/users",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    userController
      .getUsersByRole(req.params.role)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
