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
  let suggested_route_id = Number(id);
  try {
    const suggestedRoute = await knex.from("suggested_routes").where({ id });
    const waypoints = await knex("waypoints")
      .select("*")
      .where({ suggested_route_id: id });

    if (suggestedRoute.length > 0) {
      const suggestedRouteWaypoints = suggestedRoute.map(elem => {
        elem.waypoints = waypoints;
        return elem;
      });
      return suggestedRouteWaypoints;
    }
    throw new HttpError(
      "Bad request",
      `Cannot find suggested route for ID ${id}!`,
      404
    );
  } catch (err) {
    return err.message;
  }
};

// Get a suggested-routes by voyage id
const getSuggestedRouteByVoyageId = async id => {
  try {
    const suggested_routesByVoyageId = await knex("suggested_routes").where({
      voyage_id: id
    });
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

//Get Suggested-routes by vessel-report-id
const getSuggestedRoutesByVesselReportId = async id => {
  try {
    const suggestedRoutes = await knex("suggested_routes")
      .select("*")
      .where({ vessel_report_id: id });
    if (suggestedRoutes.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find any Suggested route for Vessel-report ID ${id}!`,
        404
      );
    }
    return suggestedRoutes;
  } catch (err) {
    return err.message;
  }
};

// Create a route
const createSuggestedRouteWithWaypoints = async ({ body }) => {
  const {
    vessel_report_id,
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

  const vessel_reports = await knex
    .from("vessel_reports")
    .where({ id: vessel_report_id });
  if (vessel_reports.length === 0) {
    throw new HttpError(
      "Bad request",
      `Vessel report ${vessel_report_id} doesn't  exists!`,
      404
    );
  }
  return knex.transaction(transaction => {
    return knex("suggested_routes")
      .returning("total_cost")
      .transacting(transaction)
      .insert({
        vessel_report_id,
        eta: etaDateTimeFormat,
        max_wave_height,
        hfo,
        lsfo,
        total_cost,
        distance_over_ground,
        distance_through_water,
        avgspeed
      })
      .then(function([id]) {
        let sequence_id = 1;
        const routeWaypoints = waypoints.map(waypoint => {
          const { latitude, longitude, speed, rpm } = waypoint;

          return {
            suggested_route_id: id,
            sequence_id: sequence_id++,
            latitude: latitude,
            longitude: longitude,
            speed: speed,
            rpm: rpm
          };
        });
        return knex("waypoints")
          .returning("latitude")
          .transacting(transaction)
          .insert(routeWaypoints);
      })
      .then(transaction.commit)
      .catch(transaction.rollback);
  });
};
module.exports = {
  getSuggestedRoutes,
  getSuggestedRouteById,
  getSuggestedRouteByVoyageId,
  getSuggestedRoutesByVesselReportId,
  createSuggestedRouteWithWaypoints
};
