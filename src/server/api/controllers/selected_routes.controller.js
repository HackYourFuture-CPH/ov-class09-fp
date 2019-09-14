"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

const getSelected_routes = async req => {
  //console.log("controller works!");
  try {
    const selected_routes = await knex("selected_routes").select("*");

    if (selected_routes.length === 0) {
      console.log("controller works!");
      throw new HttpError("Bad request", "selected route already exists!", 409);
    }
    return selected_routes;
  } catch (err) {
    err.message;
  }
};

const createSelectedRoute = async ({ body }) => {
  const { voyage_id, route_id } = body;
  const selected_route = await knex
    .from("selected_routes")
    .select("*")
    .where({
      voyage_id,
      route_id
    });
  if (selected_route.length !== 0) {
    throw new HttpError("Bad request", "selected_route already exists!", 409);
  }
  const voyage = await knex
    .from("voyages")
    .select("id")
    .where({
      id: voyage_id
    });
  const route = await knex
    .from("routes")
    .select("id")
    .where({
      id: route_id
    });
  if (voyage.length > 0 && route.length > 0) {
    return knex("selected_routes").insert({
      voyage_id: voyage[0].id,
      route_id: route[0].id
    });
  } else {
    throw new HttpError("Bad request", `${body.role} role not found!`, 404);
  }
};
////////////////////////
/*const createSelectedRoute = async ({ body }) => {
    const { voyage_id, route_id } = body;
    const selectedd_route = await knex
      .from("selected_routes")
      .select("*")
      .where({
        voyage_id, route_id
      }); 
    if (selectedd_route.length !== 0) {
      throw new HttpError("Bad request", "selected_route already exists!", 409);
    }
    
    else {
      return knex("selected_routes").insert({
        voyage_id: voyage_id,
        route_id: route_id
      })
    }    

  };
*/

module.exports = {
  getSelected_routes,
  createSelectedRoute
};
