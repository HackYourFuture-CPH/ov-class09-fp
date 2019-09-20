"use strict";
require("dotenv").config({ path: "../../.env" });

const port = process.env.EXTERNAL_API_PORT;

const chalk = require("chalk");
const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router(require("./index.js")());
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);
server.listen(port, function() {
  console.log(
    chalk.green(
      `${chalk.bold("External API")} is running on http://localhost:${port}/`
    )
  );
});
