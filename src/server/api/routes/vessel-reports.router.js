"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const vesselReportsController = require("../controllers/suggested-routes.controller");

// ENDPOINT: /api/vessel-reports/ :POST
router.post("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  vesselReportsController
    .createVesselReport({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/vessel-reports/:id :GET
router.get("/:id", authorizeUser(ROLES.SUPER_USER), function(req, res, next) {
  vesselReportsController
    .getVesselReportById(req.params.id)
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/vessel-reports/:vessel-report-id/suggested-routes
router.get(
  "/:vessel_report_id/suggested-routes",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  function(req, res, next) {
    vesselReportsController
      .getSuggestedRoutesByVesselReportId(req.params.vessel_report_id)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
