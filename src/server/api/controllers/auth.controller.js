"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const login = async ({ body }) => {
  try {
    const users = await knex("users")
      .select("*", "users.id as id", "user_roles.id as userRolesId")
      .where({ email: body.email })
      .join("user_roles", { "users.role_id": "user_roles.id" });
    if (users.length > 0) {
      const user = users[0];
      const passwordMatch = bcrypt.compareSync(body.password, user.password);

      if (passwordMatch) {
        const { password, sessionToken, refreshToken, ...rest } = user;

        const jwtSignObject = { id: user.id, role: user.role };

        const token = jwt.sign(jwtSignObject, process.env.SECRET_KEY, {
          expiresIn: "10h"
        });

        const refreshingToken = jwt.sign(
          jwtSignObject,
          process.env.SECRET_KEY,
          {
            expiresIn: "180d"
          }
        );

        try {
          await knex("users")
            .update({ session_token: token, refreshing_token: refreshingToken })
            .where({ id: user.id });
        } catch (err) {
          console.log(err);
        }

        return {
          token,
          accessRole: user.role,
          refreshToken: refreshingToken,
          id: user.id,
          name: user.name
        };
      } else throw new Error("Incorrect password, please try again!");
    } else throw new Error(`User with email: ${body.email} not found!`);
  } catch (err) {
    if (
      !err.hasOwnProperty("message") &&
      err.indexOf("Not a valid BCrypt hash") !== -1
    ) {
      throw new HttpError(
        "Bad request",
        "You need to set a new password before logging in!",
        500
      );
    }
    if (err.message.indexOf("Incorrect password") !== -1) {
      throw new HttpError(
        "Bad Request",
        "Incorrect password, please try again!",
        500
      );
    }
    if (err.message.indexOf("User with email: ") !== -1) {
      throw new HttpError(
        "Bad Request",
        `User with email: ${body.email} not found!`,
        404
      );
    }

    throw new HttpError(
      "Bad request",
      "Something went wrong, please try again!",
      500
    );
  }
};

module.exports = {
  login
};
