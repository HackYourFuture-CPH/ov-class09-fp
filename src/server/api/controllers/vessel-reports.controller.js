"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//Get vessels reports by voyage_id with limit, offset=0 and order =desc
const getVesselsReportByVoyageId = async (voyage_id, query) => {
  const voyage = await knex.from("voyages").where({ id: voyage_id });

  const limit = parseInt(query.limit, 10) || 50;
  const offset = parseInt(query.offset, 10) || 0;
  const orderBy = query.orderBy || "desc";

  if (voyage.length === 0) {
    throw new HttpError(
      "Bad request",
      `No voyage exist with that id ${voyage_id}.`,
      404
    );
  }

  const vesselReports = await knex
    .from("vessel_reports")
    .where({ voyage_id })
    .orderBy("id", orderBy)
    .limit(limit)
    .offset(offset);

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
    const vesselReport = await knex("vessel_reports")
      .select("*")
      .where({ id: id });

    if (vesselReport !== 0 && vesselReport[0].selected_route_id !== null) {
      const selectedRoute = await knex("suggested_routes")
        .select("*")
        .where({ id: vesselReport[0].selected_route_id });
      console.log(selectedRoute[0].id);
      const waypoints = await knex("waypoints")
        .where("suggested_route_id", selectedRoute[0].id)
        .select(
          "longitude",
          "latitude",
          "suggested_route_id",
          "speed",
          "rpm",
          "sequence_id"
        );

      return {
        ...selectedRoute[0],
        waypoints
      };
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
