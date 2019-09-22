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
const vesselRouter = require("./vessel.router");

// swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../config/swagger.json");

// /api/aid-docs Endpoint for swagger-ui-express interface
router.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
router.use("/vessels", vesselRouter);
// /api/organizations/organization_id/vessels

// /api/voyages
router.use("/voyages", voyagesRouter);

module.exports = router;
