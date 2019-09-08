"use strict";

const jwt = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;

module.exports = function(req, res, next) {
<<<<<<< HEAD
  const token = req.body.token || req.query.token || req.headers["x-access-token"];
=======
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];
>>>>>>> 4b0e39357dcc57324eb1506d9f92fe56f230139e

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
