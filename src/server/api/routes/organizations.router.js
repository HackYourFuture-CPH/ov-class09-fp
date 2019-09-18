const vesselController = require("../controllers/vessel.controller");
("use strict");

// router setup

const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const organizationController = require("../controllers/organization.controller");
const vesselsController = require("../controllers/vessel.controller");

// /api/organizations/ :POST
router.post(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    organizationController
      .createOrganization({
        body: req.body
      })
      .then(result =>
        res.json({
          message: `${req.body.name} added as new organization`,
          id: result
        })
      )
      .catch(next);
  }
);

router.get("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  organizationController
    .getOrganizations({
      body: req.body
    })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: /api/organizations/:id :GET
router.get(
  "/:id",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    organizationController
      .getOrganizationsById(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

// ENDPOINT: /api/organizations/:id :PATCH
router.patch(
  "/:id",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN),
  (req, res, next) => {
    organizationController
      .updateOrganizationById({
        body: req.body,
        id: req.params.id
      })
      .then(result => res.json(result))
      .catch(next);
  }
);
//ENDPOINT: /api/organizations/organizations_id/vessels
router.get(
  "/:id/vessels",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    vesselsController
      .getVesselsByOrganizationId(req.params.id)
      .then(result => res.json(result))
      .catch(next);
  }
);

module.exports = router;
