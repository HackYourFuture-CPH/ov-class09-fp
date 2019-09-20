"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");


//Get vessels reports by vessel id
const getVesselsReportByVesselId = async id => {
  const vesselReportsByVessel = await knex
    .from("vessel_reports")
    .where({ vessel_id: id });
  if (vesselReportsByVessel.length === 0) {
    return `no vessel exist with that id ${id} `;
  }
  return vesselReportsByVessel;
};

//create vessel_reports 
const createVesselReport = async ({ body }) => {
  const {
    vessel_id,
    position,
    current_speed,
    hfo_consumption,
    lsfo_consumption
  } = body;
  
  const vessel = await knex
    .from("vessels")
    .select("*")
    .where({
      id: vessel_id
    });
  if (vessel.length === 0) {
    throw new HttpError("Bad request", `${vessel_id} vessel not found!`, 404);
  }
 
  const vessel_reports = await knex("vessel_reports").insert({
    vessel_id: vessel[0].id,
    position: position,
    current_speed: current_speed,
    hfo_consumption: hfo_consumption,
    lsfo_consumption: lsfo_consumption
  });
  return vessel_reports;
  
};

//Get vessel_reports by id
const getVesselReportById = async id => {
  try {
    const vessel_reports = await knex("vessel_reports")
      .select(
        "vessel_reports.id as id",
        "vessel_id",
        "position",
        "current_speed",
        "hfo_consumption",
        "lsfo_consumption"
      )
      .where({ id: id });
    if (vessel_reports.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find vessel reports for ID ${id}!`,
        404
      );
    }
    return vessel_reports;
  } catch (err) {
    return err.message;
  }
};

module.exports = { createVesselReport, getVesselReportById, getVesselsReportByVesselId };
