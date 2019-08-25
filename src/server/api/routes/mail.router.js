"use strict";

// router setup
const express = require("express");
const router = express.Router({
  mergeParams: true
});
const { sendEmail } = require("../lib/services/mailer.service");
const { validateEmail } = require("../lib/middleware/validator.middleware");

router.post("/", validateEmail, (req, res, next) => {
  sendEmail({
    body: req.body
  });
});

module.exports = router;
