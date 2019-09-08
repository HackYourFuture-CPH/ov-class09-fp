"use strict";

// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });
const refreshTokenController = require("../controllers/refresh.token.controller");

router.post("/", (req, res, next) => {
  refreshTokenController
    .createNewToken(req)
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
