"use strict";

// router setup

const express = require("express");
const router = express.Router({ mergeParams: true });
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const voyagesController = require("../controllers/voyages.controller");
const suggestedRoutesController = require("../controllers/suggested-routes.controller");
const selectedRoutesController = require("../controllers/selected-routes.controller");

// ENDPOINT: /api/voyages/ :GET
router.get("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  voyagesController
    .getVoyages()
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: api/voyages/:voyage_id/suggested-routes/ :GET
router.get(
  "/:id/suggested-routes",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    suggestedRoutesController
      .getSuggestedRouteByVoyageId(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: api/voyages/:voyage_id/selected-routes :GET
router.get(
  "/:id/selected-routes",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    selectedRoutesController
      .getSelectedRouteByVoyageId(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: api/voyages/:voyage_id/selected-routes/current :GET
router.get(
  "/:id/selected-routes/current",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    selectedRoutesController
      .getlastSelectedRouteByVoyageId(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/voyages/ :post
router.post(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    voyagesController
      .createVoyage({ body: req.body })
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
