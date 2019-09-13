"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

const createOrganization = async ({ body }) => {
  const { name, logo } = body;
  const organization = await knex
    .from("organizations")
    .select("*")
    .where({
      name
    });
  if (organization.length !== 0) {
    throw new HttpError("Bad request", "organization already exists!", 409);
  }
  return knex("organizations").insert({
    name: name,
    logo: logo
  });
};

const getOrganizations = async req => {
  try {
    return await knex("organizations").select("id", " name", "logo");
  } catch (err) {
    console.log(err);
  }
};

const getOrganizationsById = async id => {
  try {
    const organization = await knex("organizations")
      .select(
        "organizations.id as id",
        "name",
        "logo",
        "created_at",
        "updated_at"
      )
      .where({ id: id });
    if (organization.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find organization with ID ${id}!`,
        404
      );
    }
    return organization;
  } catch (err) {
    return err.message;
  }
};

const updateOrganizationById = async ({ body, id }) => {
  try {
    const organization = await knex
      .from("organizations")
      .select("*")
      .where({
        id: id
      });
    if (organization.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find organization with ID ${id}!`,
        404
      );
    }
    if (body.length !== 0) {
      return await knex("organizations")
        .where({ id: id })
        .update({
          name: body.name,
          logo: body.logo
        });
    } else return "No edit fields passed, nothing updated!";
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  createOrganization,
  getOrganizations,
  getOrganizationsById,
  updateOrganizationById
};
