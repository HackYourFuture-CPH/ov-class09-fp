"use strict";

const express = require("express");
const router = express.Router({
  mergeParams: true
});

const routesController = require("../controllers/routes.controller");

router.post("/", (req, res, next) => {
  routesController
    .createArouteWithWaypoints({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
