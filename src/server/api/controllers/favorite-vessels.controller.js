"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//POST
const createFavoriteVessel = async ({ body }) => {
  const { user_id, vessel_id } = body;
  const checkUserId = await knex
    .from("users")
    .select("*")
    .where({ id: user_id });

  const checkVesselsId = await knex
    .from("vessels")
    .select("*")
    .where({ id: vessel_id });

  const favoriteVessels = await knex
    .from("favorite_vessels")
    .select("*")
    .where({ user_id, vessel_id });

  if (favoriteVessels.length !== 0) {
    throw new HttpError("Bad request", "favorite vessel already exists!", 409);
  }

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
const deleteFavoriteVessel = ({ body }) => {
  const { user_id, vessel_id } = body;
  return knex("favorite_vessels")
    .where({ user_id, vessel_id })
    .del();
};

//GET
const getFavoriteVesselsByUserId = async user_id => {
  try {
    const favoriteVessels = await knex("favorite_vessels")
      .select("*")
      .where({ user_id });

    if (favoriteVessels.length === 0) {
      throw new HttpError(
        "Bad request",
        `This user:${user_id}, doesn't have any favorite vessel!`,
        404
      );
    }

    return favoriteVessels;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  createFavoriteVessel,
  deleteFavoriteVessel,
  getFavoriteVesselsByUserId
};
