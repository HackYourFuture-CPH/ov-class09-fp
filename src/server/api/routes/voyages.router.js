"use strict";

// router setup

const express = require("express");
const router = express.Router({ mergeParams: true });
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const voyagesController = require("../controllers/voyages.controller");
const suggestedRoutesController = require("../controllers/suggested-routes.controller");
const vesselReportsController = require("../controllers/vessel-reports.controller");

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

//ENDPOINT: /api/voyages/:voyage_id/vessel-reports/?offset=0&limit=50&orderBy="desc"
router.get(
  "/:id/vessel-reports/?",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    vesselReportsController
      .getVesselsReportByVoyageId(req.params.id, req.query)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
