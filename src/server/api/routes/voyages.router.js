"use strict";

// router setup

const express = require("express");
const router = express.Router({mergeParams: true});
const {authorizeUser} = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const voyagesController = require("../controllers/voyages.controller")

// ENDPOINT: /api/voyages/ :GET
router.get("/", authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN), (req, res, next) => {
    voyagesController.getVoyages()
    .then((result) => res.json(result))
    .catch(next);
});

router.post("/", authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN), (req, res, next) => {
    voyagesController.createVoyage({body: req.body})
    .then((result) => res.json(result))
    .catch(next);
})

// .getVoyages(req) .then(result => res.json(result)) .catch(next);
module.exports = router;