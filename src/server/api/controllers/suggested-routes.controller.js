"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");
const moment = require("moment-timezone");

// Get all suggested-routes
const getSuggestedRoutes = async req => {
  try {
    return await knex("suggested_routes").select("*");
  } catch (err) {
    console.log(err);
  }
};

// Get a suggested-route by id
const getSuggestedRouteById = async id => {
  try {
    const suggested_route = await knex("suggested_routes")
      .select("*")
      .where({ id });
    if (suggested_route.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find vessel for ID ${id}!`,
        404
      );
    }
    return suggested_route;
  } catch (err) {
    return err.message;
  }
};

// Get a suggested-routes by voyage id
const getSuggestedRouteByVoyageId = async id => {
  try {
    const suggested_routesByVoyageId = await knex("suggested_routes")
      .select("*")
      .where({ voyage_id: id });
    if (suggested_routesByVoyageId.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find suggested routes for ID ${id}!`,
        404
      );
    }
    return suggested_routesByVoyageId;
  } catch (err) {
    return err.message;
  }
};

// Create a route
const createSuggestedRouteWithWaypoints = async ({ body }) => {
  const {
    voyage_id,
    eta,
    max_wave_height,
    hfo,
    lsfo,
    total_cost,
    distance_over_ground,
    distance_through_water,
    avgspeed,
    waypoints
  } = body;

  // using momentJS for formating datetime
  const etaDateTimeFormat = moment(eta).format("YYYY-MM-DD HH:mm:ss");

  const voyage = await knex
    .from("voyages")
    .select("*")
    .where({ id: voyage_id });
  console.log(voyage);
  if (voyage.length === 0) {
    throw new HttpError("Bad request", "voyage doesn't  exists!", 404);
  }

  return await knex("suggested_routes")
    .insert({
      voyage_id,
      eta: etaDateTimeFormat,
      max_wave_height: max_wave_height,
      hfo: hfo,
      lsfo: lsfo,
      total_cost: total_cost,
      distance_over_ground: distance_over_ground,
      distance_through_water: distance_through_water,
      avgspeed: avgspeed
    })
    .then(function([id]) {
      let sequence_id = 1;
      const waypointsForRoute = waypoints.map(waypoint => {
        return {
          suggested_route_id: id,
          sequence_id: sequence_id++,
          longitude: waypoint.longitude,
          latitude: waypoint.latitude
        };
      });

      return knex("waypoints").insert(waypointsForRoute);
    });
};
module.exports = {
  getSuggestedRoutes,
  getSuggestedRouteById,
  getSuggestedRouteByVoyageId,
  createSuggestedRouteWithWaypoints
};
