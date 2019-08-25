"use strict";

const { verify } = require("jsonwebtoken");
const secret = process.env.SECRET_KEY;
const jwt = require("jsonwebtoken");
const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

const createNewToken = async req => {
  try {
    const refreshToken =
      req.headers.refreshing_token || req.body.refreshing_token;
    if (refreshToken === undefined) {
      return new HttpError("Bad request", "no role defined", 400);
    }

    let verifiedToken;

    try {
      verifiedToken = await verify(refreshToken, secret);
    } catch (err) {
      return new HttpError("Bad request", "user nor verified", 400);
    }

    if (verifiedToken) {
      const {
        password,
        session,
        token,
        ...rest
      } = verifiedToken.rest;
      const userInfo = {
        rest
      };

      const { role } = userInfo.rest;

      const sessionToken = jwt.sign(userInfo, process.env.SECRET_KEY, {
        expiresIn: "2h"
      });

      try {
        await knex("users")
          .update({ session_token: sessionToken })
          .where({ id: rest.id });
      } catch (err) {
        console.log(err);
      }
      return { token: sessionToken, accessRole: role };
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createNewToken
};
