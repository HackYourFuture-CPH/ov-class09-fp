"use strict";

// Initiate env
require("dotenv").config();

// hello Quan

const express = require("express");
const formData = require("express-form-data");
const path = require("path");
const favicon = require("serve-favicon");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const HttpError = require("./api/lib/utils/http-error");
const winston = require("./api/lib/utils/winston").logger;
const buildPath = path.join(__dirname, "../../dist");

// routes
const apiv1 = require("./api/routes/router");

// init db
require("./config/db");
// // db env
// const dbOptions = require('./knexfile').development;
// // db setup
// const knex = require('knex')(dbOptions);

// INITIALIZE EXPRESS
let app = express();

app.use(express.static(buildPath));
// USING ENV FILE
app.locals.ENV = process.env.NODE_ENV;
app.locals.ENV_DEVELOPMENT = process.env.NODE_ENV === "development";

// uncomment after placing your favicon in /public
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

// your routing starts here
app.use("/api", apiv1);
// api(app)

// handle errors we throw
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

// Ensures that the client router works on reload aswell.
// Sends all requests back to index.html where the routing lib takes over
app.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./../../dist/index.html"), function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

module.exports = app;
