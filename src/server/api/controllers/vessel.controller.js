"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");
const bcrypt = require("bcrypt");
const generatePassword = require("generate-password");
const mailer = require("../lib/services/mailer.service");
const { hashPassword } = require("../lib/utils/hash.password");
//GET
const getVessels = async req => {
  try {
    return await knex("vessels").select(
      "vessels.id",
      "vessels.organization_id",
      "vessels.mmsi",
      "vessels.name"
    );
  } catch (err) {
    console.log(err);
  }
};

//GET:id
const getVesselById = async id => {
  try {
    const vessels = await knex("vessels")
      .select("vessels.id as id", "organization_id", "mmsi", "name")
      .where({ id: id });
    if (vessels.length === 0) {
      throw new HttpError("Bad request", `Cannot find user for ID ${id}!`, 404);
    }
    return vessels;
  } catch (err) {
    return err.message;
  }
};
//POST

const createVessel = async ({ body }) => {
  const { id, organization_id, mmsi, name } = body;

  const organization = await knex
    .from("organizations")
    .select("*")
    .where({
      id: organization_id
    });
  if (organization.length === 0) {
    throw new HttpError(
      "Bad request",
      `${organization_id} organization not found!`,
      404
    );
  }

  const vessels = await knex("vessels").insert({
    organization_id: organization[0].id,
    mmsi: mmsi,
    name: name
  });
  return vessels;
};

//PATCH
const editVessel = async ({ body }) => {
  const { id, organization_id, mmsi, name } = body;
  console.log(body);
  const vessel = await knex
    .from("vessels")
    .select("*")
    .where({
      name: name
    });
  if (vessel.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find user with email ${name}!`,
      404
    );
  }

  if (vessel.length > 1) {
    throw new HttpError(
      "Bad request",
      "An unexpected error has occurred!",
      404
    );
  }

  const queryVessel = {};

  if (body.name) queryVessel.name = name;
  if (body.mmsi) queryVessel.mmsi = mmsi;

  if (Object.keys(queryVessel).length !== 0) {
    return knex("vessels")
      .where({ id: vessel[0].id })
      .update(queryVessel);
  } else return "No edit fields passed, nothing updated!";
};

//Get vessels by organization id
const getVesselsByOrganizationId = async organization_id => {
  const vessel = await knex()
    .from("vessels")
    .where({ organization_id: organization_id });
  return vessel;
};

module.exports = {
  getVessels,
  getVesselById,
  createVessel,
  editVessel,
  getVesselsByOrganizationId
};
