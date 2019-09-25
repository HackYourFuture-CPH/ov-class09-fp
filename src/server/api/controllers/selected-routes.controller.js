"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// Get all selected_routes
const getSelectedRoutes = async req => {
  try {
    return await knex("selected_routes").select("*");
  } catch (err) {
    err.message;
  }
};

// Get a selected-route by voyage id
const getSelectedRouteByVoyageId = async id => {
  try {
    const selected_routesByVoyageId = await knex("selected_routes")
      .select("*")
      .where({ voyage_id: id });
    if (selected_routesByVoyageId.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find selected routes for ID ${id}!`,
        404
      );
    }
    return selected_routesByVoyageId;
  } catch (err) {
    return err.message;
  }
};

// Get the last selected-route for a given voyage
const getlastSelectedRouteByVoyageId = async id => {
  try {
    const lastSelected_routesByVoyageId = await knex("selected_routes")
      .select("*")
      .where({ voyage_id: id })
      .orderBy("created_at", "desc")
      .limit(1);
    if (lastSelected_routesByVoyageId.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find selected routes for ID ${id}!`,
        404
      );
    }
    return lastSelected_routesByVoyageId;
  } catch (err) {
    return err.message;
  }
};

// Create a selected_route
const createSelectedRoute = async ({ body }) => {
  const { voyage_id, route_id } = body;
  return knex("selected_routes").insert({
    voyage_id: voyage_id,
    route_id: route_id
  });
};

module.exports = {
  getSelectedRoutes,
  createSelectedRoute,
  getSelectedRouteByVoyageId,
  getlastSelectedRouteByVoyageId
};
