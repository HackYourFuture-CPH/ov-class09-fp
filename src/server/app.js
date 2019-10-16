"use strict";

require("dotenv").config();

const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const HttpError = require("./api/lib/utils/http-error");
const buildPath = path.join(__dirname, "../../dist");

const apiRouter = require("./api/routes/api-router");

require("./config/db");
let app = express();

app.use(express.static(buildPath));

app.locals.ENV = process.env.NODE_ENV;
app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === "development";

app.disable("x-powered-by");
// app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(morgan('dev', {stream: winston.stream}));
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000
  })
);
app.use(cookieParser());
app.use(cors());

app.use(process.env.API_PATH, apiRouter);

app.use((err, req, res, next) => {
  if (err instanceof HttpError) {
    res.status(err.httpStatus);
    if (err.body) {
      return res.json(err.body);
    } else {
      return res.send({ error: err.message });
    }
  } else {
    console.log(err);
    res.sendStatus(500);
  }
});

// If "/api" is called, redirect to the API documentation.
app.use("/api", function(req, res) {
  res.redirect(`${process.env.API_PATH}/documentation`);
});

app.use("*", (req, res) => {
  res.sendFile(path.join(`${buildPath}/index.html`));
});

module.exports = app;
