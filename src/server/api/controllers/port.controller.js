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
  const { name, sailtime, route_id, waypoints } = body;

  if (name.length === 0) {
    throw new HttpError("Bad request", "Port name is missing!", 409);
  }

  const ports = await knex
    .from("ports")
    .select("*")
    .where({
      name
    });

  const route = await knex
    .from("suggested_routes")
    .select("id")
    .where({
      id: route_id
    });

  if (ports.length !== 0) {
    throw new HttpError("Bad request", "port already exists!", 409);
  } else {
    return knex("ports")
      .insert({
        name: name
      })
      .then(portID => {
        if (route.length > 0 && waypoints) {
          return knex("waypoints").insert({
            port_id: portID[0],
            route_id: route[0].id,
            lon: waypoints[0].lon,
            lat: waypoints[0].lat
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

/* 
 
 //let new_waypoint = waypoints.map((item) => {item.lon, item.lat})
 {
    "name": "Port sunshine",
    "sailtime": 22.3,
    "waypoints": [
        {
            "lon": 55.65646,
            "lat": 12.53635
        }
    ]
}

 */
