"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// Get all routes
const getroutes = async req => {
  try {
    return await knex("routes").select(
      "routes.id as id",
      "voyage_id",
      "eta",
      "max_wave_height",
      "hfo",
      "lsfo",
      "total_cost",
      "distance_over_ground",
      "distance_through_water",
      "avgspeed"
    );
  } catch (err) {
    console.log(err);
  }
};

// Create a route
const createroute = async ({ body }) => {
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
  const route = await knex
    .from("routes")
    .select("*")
    .where({
      id: voyage_id
    });
  if (route.length !== 0) {
    throw new HttpError("Bad request", "route already exists!", 409);
  }
  return knex("routes").insert({
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
  getroutes,
  createroute
};
