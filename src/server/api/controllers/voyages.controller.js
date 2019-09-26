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
    etd,
    eta,
    forwarddraft,
    aftdraft,
    optimisation_type,
    depart_from_waypoint,
    arrive_at_waypoint,
    sailtime,
    hfocost,
    lsfocost,
    hirerate,
    status
  } = body;

  try {
    return knex("voyages").insert({
      vessel_id,
      etd,
      eta,
      forwarddraft,
      aftdraft,
      optimisation_type,
      depart_from_waypoint,
      arrive_at_waypoint,
      sailtime,
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
module.exports = {
  getVoyages,
  createVoyage,
  getVoyagesByVesselId
};
