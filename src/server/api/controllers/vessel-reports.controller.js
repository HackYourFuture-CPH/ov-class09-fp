"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//Get vessels reports by vessel id
const getVesselsReportByVoyageId = async voyage_id => {
  const vesselReports = await knex.from("vessel_reports").where({ voyage_id });
  if (vesselReports.length === 0) {
    return `No voyage exist with that id ${voyage_id}.`;
  }
  return vesselReports;
};

//create vessel-reports
const createVesselReport = async ({ body }) => {
  const {
    voyage_id,
    current_speed,
    eta,
    hfo_consumption,
    lsfo_consumption,
    latitude,
    longitude
  } = body;

  const voyage = await knex
    .from("voyages")
    .select("*")
    .where({
      id: voyage_id
    });
  if (voyage.length === 0) {
    throw new HttpError("Bad request", `${voyage_id} voyage not found!`, 404);
  }

  const vesselReport = await knex("vessel_reports").insert({
    voyage_id: voyage[0].id,
    current_speed,
    eta,
    hfo_consumption,
    lsfo_consumption,
    latitude,
    longitude
  });
  return vesselReport;
};

//Get vessel-reports by id
const getVesselReportById = async id => {
  try {
    const vesselReport = await knex("vessel_reports")
      .select(
        "vessel_reports.id as id",
        "voyage_id",
        "current_speed",
        "eta",
        "hfo_consumption",
        "lsfo_consumption",
        "latitude",
        "longitude"
      )
      .where({ id });
    if (vesselReport.length === 0) {
      throw new HttpError(
        "Bad request",
        `Cannot find any vessel reports for Voyage ID ${id}!`,
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
  getVesselsReportByVoyageId,
  selectSuggestedRoute,
  getSelectedSuggestedRoute
};
