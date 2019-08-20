"use strict";

const express = require("express");
const router = express.Router();

// ::V1 router
const modulesRouter = require("./modules.router");

// /api/episodes
router.use("/modules", modulesRouter);

module.exports = router;
