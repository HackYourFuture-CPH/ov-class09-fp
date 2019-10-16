"use strict";

const express = require("express");
const router = express.Router();

// Router imports
const modulesRouter = require("./modules.router");
const userRouter = require("./user.router");
const authRouter = require("./auth.router");
const refreshTokenRouter = require("./refresh.token.router");
const mailRouter = require("./mail.router");
const waypointsRouter = require("./waypoints.router");
const vesselReportRouter = require("./vessel-reports.router");
const portRouter = require("./port.router");
const voyagesRouter = require("./voyages.router");
const suggestedRoutesRouter = require("./suggested-routes.router");
const organizationRouter = require("./organizations.router");
const vesselRouter = require("./vessel.router");
const favoriteVesselsRouter = require("./favorite-vessels.router");
const userRolesRouter = require("./user-roles.router");

// swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../config/swagger.json");

// Route for Swagger API Documentation
router.use(`/documentation`, swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Application routes
router.use(`/users`, userRouter);
router.use(`/auth`, authRouter);
router.use(`/modules`, modulesRouter);
router.use(`/mail`, mailRouter);
router.use(`/token`, refreshTokenRouter);
router.use(`/ports`, portRouter);
router.use(`/organizations`, organizationRouter);
router.use(`/vessels`, vesselRouter);
router.use(`/voyages`, voyagesRouter);
router.use(`/suggested-routes`, suggestedRoutesRouter);
router.use(`/favorite-vessels`, favoriteVesselsRouter);
router.use(`/waypoints`, waypointsRouter);
router.use(`/vessel-reports`, vesselReportRouter);
router.use(`/user-roles`, userRolesRouter);

module.exports = router;
