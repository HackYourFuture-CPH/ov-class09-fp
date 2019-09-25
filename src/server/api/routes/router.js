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
const suggestedRoutesRouter = require("./suggested-routes.router");
const selectedRoutesRouter = require("./selected-routes.router");
const organizationRouter = require("./organizations.router");
const vesselRouter = require("./vessel.router");
const favoriteVesselsRouter = require("./favorite-vessels.router");

// swagger-ui-express
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../../config/swagger.json");

// Route for Swagger API Documentation
router.use(
  `${process.env.API_PATH}/documentation`,
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

// Application routes
router.use(`${process.env.API_PATH}/users`, userRouter);
router.use(`${process.env.API_PATH}/auth`, authRouter);
router.use(`${process.env.API_PATH}/modules`, modulesRouter);
router.use(`${process.env.API_PATH}/mail`, mailRouter);
router.use(`${process.env.API_PATH}/token`, refreshTokenRouter);
router.use(`${process.env.API_PATH}/ports`, portRouter);
router.use(`${process.env.API_PATH}/organizations`, organizationRouter);
router.use(`${process.env.API_PATH}/vessels`, vesselRouter);
router.use(`${process.env.API_PATH}/voyages`, voyagesRouter);
router.use(`${process.env.API_PATH}/suggested-routes`, suggestedRoutesRouter);
router.use(`${process.env.API_PATH}/selected-routes`, selectedRoutesRouter);
router.use(`${process.env.API_PATH}/favorite-vessels`, favoriteVesselsRouter);

module.exports = router;
