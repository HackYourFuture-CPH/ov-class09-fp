"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const vesselController = require("../controllers/vessel.controller");
// Import controller from vesselReport controller
const vesselReportController = require("../controllers/vesselReport.controller");

// ENDPOINT: /api/vessels/ :GET
router.get(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    vesselController
      .getVessels(req)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/vessels/:id :GET
router.get(
  "/:id",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  function(req, res, next) {
    vesselController
      .getVesselById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/vessels/ :POST
router.post(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    vesselController
      .createVessel({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/vessels/ :PATCH
router.patch(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    vesselController
      .editVessel({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

//ENDPOINT: /api/vessels/:vessel_id/vessel_reports/
router.get(
  "/:id/vessel_reports",
  (req, res, next) => {
    vesselReportController
      .getVesselsReportByVesselId(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
