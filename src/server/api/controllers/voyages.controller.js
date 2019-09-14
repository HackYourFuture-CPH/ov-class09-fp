"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

// to get all the voyages
const getVoyages = () => {
  return knex("voyages").select("*");
};

//to create a voyage
const createVoyage = async ({ body }) => {
  try {
    return knex("voyages").insert({
      vessel_id: body.vessel_id,
      etd: body.etd,
      eta: body.eta,
      forwarddraft: body.forwarddraft,
      aftdraft: body.aftdraft,
      optimisation_type: body.optimisation_type,
      depart_from: body.depart_from,
      arrive_at: body.arrive_at,
      sailtime: body.sailtime,
      hfocost: body.hfocost,
      lsfocost: body.lsfocost,
      hirerate: body.hirerate,
      status: body.status
    });
  } catch {
    console.log("something is wrong!");
  }
};

module.exports = {
  getVoyages,
  createVoyage
};
