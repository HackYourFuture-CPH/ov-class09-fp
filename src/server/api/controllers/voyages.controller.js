"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// to get all the voyages
const getVoyages = () => {
  return knex("voyages").select("*");
};

//to create a voyage
const createVoyage = async ({ body }) => {
  const {
    vessel_id,
    departure_time,
    target_arrival_time,
    forwarddraft,
    aftdraft,
    optimisation_type,
    depart_from_port,
    arrive_at_port,
    hfocost,
    lsfocost,
    hirerate,
    status
  } = body;

  try {
    return knex("voyages").insert({
      vessel_id,
      departure_time,
      target_arrival_time,
      forwarddraft,
      aftdraft,
      optimisation_type,
      depart_from_port,
      arrive_at_port,
      hfocost,
      lsfocost,
      hirerate,
      status
    });
  } catch (error) {
    console.log("Error: Could not insert voyage.");
  }
};

// Get voyages by vessel id
const getVoyagesByVesselId = async vessel_id => {
  const voyagesByVesselId = await knex.from("voyages").where({ vessel_id });
  if (voyagesByVesselId.length === 0) {
    return `no voyages exist with that id ${vessel_id}`;
  }
  return voyagesByVesselId;
};

// Get voyages by Organization ID (& voyage_status=created/ongoing/completed)
const getVoyagesByOrganization = async (organizationID, voyageStatus) => {
  try {
    const organization = await knex("organizations")
      .select("name")
      .where({ id: organizationID });

    if (organization.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find organization with ID ${organizationID}!`,
        404
      );
    }

    const voyages = await knex("organizations as org")
      .join("vessels as ves", "ves.organization_id", "org.id")
      .where("ves.organization_id", organizationID)
      .join("voyages as voy", "voy.vessel_id", "ves.id")
      .where("voy.status", voyageStatus)
      .join("ports as p1", "p1.id", "voy.depart_from_port")
      .join("ports as p2", "p2.id", "voy.arrive_at_port")
      .select(
        "voy.id as id",
        "ves.id as vessel_id",
        "ves.name as vessel_name",
        "voy.departure_time",
        "voy.target_arrival_time",
        "voy.forwarddraft",
        "voy.aftdraft",
        "voy.optimisation_type",
        "voy.depart_from_port",
        "p1.name as depart_from",
        "voy.arrive_at_port",
        "p2.name as arrive_at",
        "voy.hfocost",
        "voy.lsfocost",
        "voy.hirerate",
        "voy.status",
        "voy.created_at",
        "voy.updated_at",
        "org.name as organization"
      );

    if (voyages.length === 0) {
      throw new HttpError(
        "Bad request",
        `There are no ${voyageStatus} Voyages for Organization with ID ${organizationID}!`,
        404
      );
    }
    return { voyages };
  } catch (error) {
    return error.message;
  }
};

module.exports = {
  getVoyages,
  createVoyage,
  getVoyagesByVesselId,
  getVoyagesByOrganization
};
