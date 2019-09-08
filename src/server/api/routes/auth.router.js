"use strict";

// router setup
const express = require("express");
const router = express.Router({ mergeParams: true });

// auth controller
const authController = require("../controllers/auth.controller");

// ENDPOINT: /api/auth/login/ :POST
router.post("/login", (req, res, next) => {
  authController
    .login({ body: req.body })
    .then(result => res.json(result))
    .catch(next);
});

module.exports = router;
