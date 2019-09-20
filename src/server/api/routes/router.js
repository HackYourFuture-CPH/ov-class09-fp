"use strict";

const express = require("express");
const router = express.Router();

const modulesRouter = require("./modules.router");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const refreshTokenRouter = require("./refresh.token.router");
const mailRouter = require("./mail.router");

const portRouter = require("./port.router");
const voyagesRouter = require("./voyages.router");

const organizationRouter = require("./organizations.router");
// /api/users
router.use("/users", userRouter);

// /api/auth
router.use("/auth", authRouter);

// /api/modules
router.use("/modules", modulesRouter);

router.use("/mail", mailRouter);

router.use("/token", refreshTokenRouter);

router.use("/ports", portRouter);
// /api/organizations
router.use("/organizations", organizationRouter);

// /api/voyages
router.use("/voyages", voyagesRouter);
module.exports = router;
