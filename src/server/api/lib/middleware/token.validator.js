"use strict";

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

module.exports = function(req, res, next) {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, secret, function(err, decoded) {
      if (err) {
        return res.json({
          error: true,
          message: "Failed to authenticate token."
        });
      }
      req.decoded = decoded;
      next();
    });
  } else {
    return res.status(403).send({
      error: true,
      message: "No token provided."
    });
  }
};
