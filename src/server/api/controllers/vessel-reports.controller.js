"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//Get vessels reports by vessel id
const getVesselsReportByVesselId = async id => {
  const vesselReports = await knex
    .from("vessel_reports")
    .where({ vessel_id: id });
  if (vesselReports.length === 0) {
    return `no vessel exist with that id ${id} `;
  }
  return vesselReports;
};

//create vessel-reports
const createVesselReport = async ({ body }) => {
  const {
    vessel_id,
    position_waypoints,
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

  const vesselReport = await knex("vessel_reports").insert({
    vessel_id: vessel[0].id,
    position_waypoints: position_waypoints,
    current_speed: current_speed,
    hfo_consumption: hfo_consumption,
    lsfo_consumption: lsfo_consumption
  });
  return vesselReport;
};

//Get vessel-reports by id
const getVesselReportById = async id => {
  try {
    const vesselReport = await knex("vessel_reports")
      .select(
        "vessel_reports.id as id",
        "vessel_id",
        "position_waypoints",
        "current_speed",
        "hfo_consumption",
        "lsfo_consumption"
      )
      .where({ id: id });
    if (vesselReport.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find vessel reports for ID ${id}!`,
        404
      );
    }
    return vesselReport;
  } catch (err) {
    return err.message;
  }
};

module.exports = {
  createVesselReport,
  getVesselReportById,
  getVesselsReportByVesselId
};
