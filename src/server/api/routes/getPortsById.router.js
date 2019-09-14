"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");
// controllers

const getPortsByIdController = require("../controllers/getPortsById.controller");
//ENDPOINT: //api/ports/:id :GET
router.get(
  "/:id",
  // authorizeUser(ROLES.SUPER_USER),
  function(req, res, next) {
    getPortsByIdController
      .getPortById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
