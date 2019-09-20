"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//POST
const createFavoriteVessles = async ({ body }) => {
  const { user_id, vessel_id } = body;
  const checkUserId = await knex
    .from("users")
    .select("*")
    .where({ id: user_id });

  const checkVesselsId = await knex
    .from("vessels")
    .select("*")
    .where({ id: vessel_id });

  if (checkUserId.length === 0 || checkVesselsId.length === 0) {
    throw new HttpError(
      "Bad request",
      "user_id or vessel_id was not found!",
      404
    );
  }

  return knex("favorite_vessels").insert({ user_id, vessel_id });
};

//DELETE
const deleteFavoriteVessels = ({ body }) => {
  const { user_id, vessel_id } = body;
  return knex("favorite_vessels")
    .where({ user_id, vessel_id })
    .del();
};

module.exports = {
  createFavoriteVessles,
  deleteFavoriteVessels
};
