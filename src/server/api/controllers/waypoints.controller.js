const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// Method for getting waypoints by id:
const getWaypointsById = async id => {
  try {
    const waypoints = await knex("waypoints")
      .select("id", "longitude", "latitude", "created_at", "updated_at")
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
  const { latitude, longitude, suggested_route_id } = body;

  // 1. Get the route
  const routes = await knex
    .from("suggested_routes")
    .select("*")
    .where({ id: suggested_route_id });

  if (routes.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find routes for ID ${suggested_route_id}!`,
      404
    );
  }

  // 3. create a Waypoint
  return await knex("waypoints").insert({
    latitude,
    longitude,
    suggested_route_id: routes[0].id
  });
};

// Method for getting waypoints by route id
const getWaypointsForRoute = async id => {
  try {
    const waypointsForRoute = await knex("waypoints").where({
      suggested_route_id: id
    });

    if (waypointsForRoute.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find waypoints for route ID ${id}!`,
        404
      );
    }
    return waypointsForRoute;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  getWaypointsById,
  createWaypoints,
  getWaypointsForRoute
};
