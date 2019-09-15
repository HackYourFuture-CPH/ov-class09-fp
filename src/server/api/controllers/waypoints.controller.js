const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// Method for getting waypoints by id:
const getWaypointsById = async id => {
  try {
    const waypoints = await knex("waypoints")
      .select("id", "lon", "lat", "created_at", "updated_at")
      .where({ id: id });
    if (waypoints.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find waypoints for ID ${id}!`,
        409
      );
    }
    return waypoints;
  } catch (err) {
    return err.message;
  }
};

// Method for creating a waypoints

const createWaypoints = async ({ body }) => {
  const { lat, lon, port_id, route_id } = body;

  // 1. Get the route
  const routes = await knex
    .from("routes")
    .select("*")
    .where({ id: route_id });
  if (routes.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find routes for ID ${route_id}!`,
      409
    );
  }

  // 2. Get the port
  const ports = await knex
    .from("ports")
    .select("*")
    .where({ id: port_id });
  if (ports.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find ports for ID ${port_id}!`,
      409
    );
  }

  // 3. create a Waypoint
  const waypoint = await knex("waypoints").insert({
    lat,
    lon,
    route_id: routes[0].id,
    port_id: ports[0].id
  });
  // 4. return the waypoint entity
  return waypoint;
};

// Method for getting waypoints by route id
const getWaypointsForRoute = async id => {
  console.log("object");
  try {
    return await knex("routes")
      .select("*")
      .where("route_id", id)
      .join("waypoints", { route_id: "route_id " });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getWaypointsById,
  createWaypoints,
  getWaypointsForRoute
};
