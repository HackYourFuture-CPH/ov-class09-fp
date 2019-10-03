"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

const getPortById = async id => {
  try {
    const ports = await knex("ports")
      .select("ports.id as id", "name", "created_at", "updated_at")
      .where({ id: id });
    if (ports.length === 0) {
      throw new HttpError("Bad request", `Cannot find port for ID ${id}!`, 404);
    }
    return ports;
  } catch (err) {
    return err.message;
  }
};

const createPort = async ({ body }) => {
  const { name, waypoint } = body;

  if (name.length === 0 && waypoint.length == 0) {
    throw new HttpError("Bad request", "Port name/waypoint is missing!", 409);
  }

  const ports = await knex
    .from("ports")
    .select("*")
    .where({
      name
    });

  if (ports.length !== 0) {
    throw new HttpError("Bad request", "port already exists!", 409);
  } else {
    return knex("ports")
      .insert({
        name: name
      })
      .then(([portID]) => {
        console.log("Waypoint:", waypoint);
        console.log("Waypoint:", waypoint.longitude, waypoint.latitude);
        return knex("waypoints").insert({
          port_id: portID,
          longitude: waypoint.longitude,
          latitude: waypoint.latitude
        });
      })
      .catch(error => {
        return `Error occured!  ${error.message}`;
      });
  }
};

module.exports = { getPortById, createPort };
