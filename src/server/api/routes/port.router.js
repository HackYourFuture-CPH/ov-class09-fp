"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});

const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const portController = require("../controllers/port.controller");
// ENDPOINT: /api/ports/:id :GET
router.get(
  "/:id",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  function(req, res, next) {
    portController
      .getPortById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/ports/ :POST
router.post(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    portController
      .createPort({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
