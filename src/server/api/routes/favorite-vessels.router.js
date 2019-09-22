"use strict";

// router setup

const express = require("express");
const router = express.Router({ mergeParams: true });
const { authorizeUser } = require("../lib/middleware/auth.middleware");

const ROLES = require("../../constants/roles");

// controllers
const favoriteVesselsController = require("../controllers/favorite-vessels.controller");

// ENDPOINT: /api/favorite_vessels/ :POST
router.post("/", authorizeUser(ROLES.SUPER_USER), (req, res, next) => {
  favoriteVesselsController
    .createFavoriteVessel({ body: req.body })
    .then(result => res.json(result))
    .catch(next);
});

// ENDPOINT: api/favorite_vessels/ :DELETE
router.delete(
  "/",
  authorizeUser(ROLES.SUPER_USER, ROLES.ADMIN, ROLES.OPERATOR),
  (req, res, next) => {
    favoriteVesselsController
      .deleteFavoriteVessel({ body: req.body })
      .then(result => res.json(result))
      .catch(next);
  }
);
module.exports = router;
