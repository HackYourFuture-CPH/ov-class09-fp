"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const suggestedRoutesController = require("../controllers/suggested_routes.controller");

// ENDPOINT: /api/suggested_routes/ :GET
router.get("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  suggestedRoutesController
    .getSuggestedRoutes({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/suggested_routes/ :POST
router.post("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  suggestedRoutesController
    .createSuggestedRoute({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
