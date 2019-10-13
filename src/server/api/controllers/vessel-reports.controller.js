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
    position_waypoint,
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
    position_waypoint: position_waypoint,
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
        "position_waypoint",
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
const selectSuggestedRoute = async ({ id, body }) => {
  const { suggested_route_id } = body;
  try {
    const suggestedRoute = await knex("suggested_routes").where({
      id: suggested_route_id
    });
    const vesselReport = await knex("vessel_reports").where("id", "=", id);

    if (vesselReport.length !== 0) {
      return await knex("vessel_reports")
        .where("id", "=", id)
        .update({
          selected_route_id: suggested_route_id,
          eta: suggestedRoute[0].eta
        });
    }

    throw new HttpError(
      "Bad request",
      `Cannot find vessel reports for ID ${id}!`,
      404
    );
  } catch (err) {
    return err.message;
  }
};
const getSelectedSuggestedRoute = async id => {
  try {
    const getSelectedRouteId = await knex("vessel_reports")
      .select("*")
      .where({ id: id });

    if (
      getSelectedRouteId !== 0 &&
      getSelectedRouteId[0].selected_route_id !== null
    ) {
      return await knex("suggested_routes")
        .select("*")
        .where({ id: getSelectedRouteId[0].selected_route_id });
    }
    throw new HttpError(
      "Bad request",
      `Cannot find selected route for vessel reports  ID ${id}!`,
      404
    );
  } catch (err) {
    return err.message;
  }
};
module.exports = {
  createVesselReport,
  getVesselReportById,
  getVesselsReportByVesselId,
  selectSuggestedRoute,
  getSelectedSuggestedRoute
};
