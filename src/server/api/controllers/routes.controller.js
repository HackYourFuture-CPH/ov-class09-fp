const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

const createArouteWithWaypoints = async ({ body }) => {
  const {
    vessel_id,
    port_id,
    voyage_id,
    sailtime,
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

  var currentTime = new Date(eta);
  var date =
    currentTime.getFullYear() +
    "-" +
    (currentTime.getMonth() + 1) +
    "-" +
    currentTime.getDate();

  const voyage = await knex
    .from("suggested_routes")
    .select("*")
    .where({ voyage_id: voyage_id });
  if (voyage.length === 0) {
    throw new HttpError("Bad request", "route doesn't  exists!", 404);
  }

  return await knex("suggested_routes")
    .insert({
      voyage_id: voyage_id,
      eta: date,
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
          route_id: id,
          port_id: port_id,
          sequence_id: sequence_id++,
          lon: waypoint.lon,
          lat: waypoint.lat
        };
      });

      return knex("waypoints").insert(waypointsForRoute);
    });
};

module.exports = { createArouteWithWaypoints };
