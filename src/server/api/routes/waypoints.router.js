"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});

// controllers
const waypointsController = require("../controllers/waypoints.controller");

// ENDPOINT: /api/waypoints/:id :GET
router.get("/:id", (req, res, next) => {
  waypointsController
    .getWaypointsById(req.params.id)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/waypoints :POST
router.post("/", (req, res, next) => {
  waypointsController
    .createWaypoints({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
