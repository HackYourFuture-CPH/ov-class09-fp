"use strict";

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const vesselReportController = require("../controllers/vesselReport.controller");

// ENDPOINT: /api/vessel_reports/ :POST
router.post(
  "/",
  (req, res, next) => {
    vesselReportController
      .createVesselReport({
        body: req.body
      })
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/vessel_reports/:id :GET
router.get(
  "/:id",
  function(req, res, next) {
    vesselReportController
      .getVesselReportById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
