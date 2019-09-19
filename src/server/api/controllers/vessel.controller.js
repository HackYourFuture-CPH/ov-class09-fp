"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

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
    return err.message;
  }
};

//GET:id
const getVesselById = async id => {
  try {
    const vessels = await knex("vessels")
      .select("vessels.id as id", "organization_id", "mmsi", "name")
      .where({ id: id });
    if (vessels.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find vessel for ID ${id}!`,
        404
      );
    }
    return vessels;
  } catch (err) {
    return err.message;
  }
};
//POST

const createVessel = async ({ body }) => {
  const { organization_id, mmsi, name } = body;
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
    organization_id,
    mmsi,
    name
  });
  return vessels;
};

//PATCH
const editVessel = async ({ body }) => {
  const { id, organization_id, mmsi, name } = body;
  const vessel = await knex
    .from("vessels")
    .select("*")
    .where({
      name
    })
    .first();
  if (vessel.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find vessel with name ${name}!`,
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
      .where({ id: vessel.id })
      .update(queryVessel);
  } else return "No edit fields passed, nothing updated!";
};

//Get vessels by organization id
const getVesselsByOrganizationId = async id => {
  const vesselsByOrganizationId = await knex
    .from("vessels")
    .where({ organization_id: id });
  if (vesselsByOrganizationId.length === 0) {
    return `no organization exist with that id ${id} `;
  }
  return vesselsByOrganizationId;
};

module.exports = {
  getVessels,
  getVesselById,
  createVessel,
  editVessel,
  getVesselsByOrganizationId
};
