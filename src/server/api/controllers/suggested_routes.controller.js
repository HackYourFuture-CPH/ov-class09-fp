"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// Get all suggested_routes
const getSuggestedRoutes = async req => {
  try {
    return await knex("suggested_routes").select("*");
  } catch (err) {
    console.log(err);
  }
};

// Create a route
const createSuggestedRoute = async ({ body }) => {
  const {
    voyage_id,
    eta,
    max_wave_height,
    hfo,
    lsfo,
    total_cost,
    distance_over_ground,
    distance_through_water,
    avgspeed
  } = body;

  return knex("suggested_routes").insert({
    voyage_id: voyage_id,
    eta: eta,
    max_wave_height: max_wave_height,
    hfo: hfo,
    lsfo: lsfo,
    total_cost: total_cost,
    distance_over_ground: distance_over_ground,
    distance_through_water: distance_through_water,
    avgspeed: avgspeed
  });
};

module.exports = {
  getSuggestedRoutes,
  createSuggestedRoute
};
