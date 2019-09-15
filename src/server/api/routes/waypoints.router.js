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
  console.log("the request", req.params.id);
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

// ENDPOINT: /api/routes/:route_id/waypoints/ :GET
router.get("/:route_id/waypoints", (req, res, next) => {
  waypointsController
    .getWaypointsForRoute(req.params.route_id)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
