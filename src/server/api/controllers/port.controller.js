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
  if (name.length === 0) {
    throw new HttpError("Bad request", "Port name is missing!", 409);
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
      .then(portID => {
        if (waypoint.length !== 0) {
          return knex("waypoint").insert({
            port_id: portID[0],
            //suggested_route_id: suggested_route_id || null,
            longitude: waypoint[0].lon,
            latitude: waypoint[0].lat
          });
        } else {
          return `No Waypoint Added for port: '${name}' `;
        }
      })
      .catch(error => {
        return `Error occured!  ${error.message}`;
      });
  }
};

module.exports = { getPortById, createPort };
