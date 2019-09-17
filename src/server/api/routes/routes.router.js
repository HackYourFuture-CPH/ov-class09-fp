"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const routeController = require("../controllers/routes.controller");

// ENDPOINT: /api/routes/ :GET
router.get("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  routeController
    .getroutes({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/routes/ :POST
router.post("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  routeController
    .createroute({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
