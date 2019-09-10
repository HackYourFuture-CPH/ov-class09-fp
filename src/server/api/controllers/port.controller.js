"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

const getPortById = async id => {
  try {
    const ports = await knex("ports")
      .select("ports.id as id", "name", "created_on", "Updated_on")
      .where({ id: id });
    if (ports.length === 0) {
      throw new HttpError("Bad request", `Cannot find user for ID ${id}!`, 404);
    }
    return ports;
  } catch (err) {
    return err.message;
  }
};

module.exports = { getPortById };
