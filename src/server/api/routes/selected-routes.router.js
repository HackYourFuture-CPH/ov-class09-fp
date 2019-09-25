"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");
// controllers
const selectedRoutesController = require("../controllers/selected-routes.controller");

//ENDPOINT: /api/selected-routes/ :GET
router.get("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  selectedRoutesController
    .getSelectedRoutes(req)
    .then(result => res.json(result))
    .catch(next);
});
//ENDPOINT: /api/selected-routes/ :POST
router.post(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    selectedRoutesController
      .createSelectedRoute({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
