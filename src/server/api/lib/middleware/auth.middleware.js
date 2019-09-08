"use strict";

const HttpError = require("./../utils/http-error");
const { verify } = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const knex = require("./../../../config/db");

function extractIp(req, res, next) {
  let logInfo = {};
  logInfo.ip =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    (req.connection.socket ? req.connection.socket.remoteAddress : null);
  logInfo.timestamp = req._startTime;
  req.logInfo = logInfo;
  next();
}

function authorizeUser(...permittedRoles) {
  return async function(req, res, next) {
    const jwt = req.headers.authorization || req.body.authorization;
    if (jwt === undefined) {
      return res
        .status(401)
        .json(new HttpError("Bad request", 400, "no role defined"));
    }

    let verifiedJwt;
    try {
      verifiedJwt = await verify(jwt, secret);
    } catch (err) {
      console.log(err);
    }

    if (verifiedJwt) {
      const result = await knex("users")
        .join("user_roles", "users.role_id", "user_roles.id")
        .select("*")
        .where({ "users.id": verifiedJwt.rest.id });

      const user = result[0];

      if (user) {
        if (permittedRoles.includes(user.role)) {
          req.user = verifiedJwt;
          return next();
        } else {
          return res.status(401).json({
            message: "Unauthorized user for role: " + verifiedJwt.rest.role,
            role: verifiedJwt.rest.role
          });
        }
      }
    } else {
      return res.json(new HttpError("Bad Request", "Unauthorized user", 401));
    }
  };
}

module.exports = {
  extractIp: extractIp,
  authorizeUser: authorizeUser
};
