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
  const { lat, lon, suggested_route_id } = body;
  // 1. Get the route
  const routes = await knex
    .from("suggested_routes")
    .select("*")
    .where({ id: suggested_route_id });
  if (routes.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find routes for ID ${route_id}!`,
      404
    );
  }

  // 3. create a Waypoint
  const waypoint = await knex("waypoints").insert({
    lat,
    lon,
    suggested_route_id: routes[0].id
  });
  // 4. return the waypoint entity
  return waypoint;
};

// Method for getting waypoints by route id
const getWaypointsForRoute = async id => {
  console.log(id);
  try {
    return await knex("suggested_routes")
      .select("*")
      .where({ suggested_route_id: id })
      .join("waypoints", { suggested_route_id: "suggested_routes.id" });
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getWaypointsById,
  createWaypoints,
  getWaypointsForRoute
};
