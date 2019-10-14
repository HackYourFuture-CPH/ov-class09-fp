"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//Get vessels reports by voyage_id with limit, offset=0 and order =desc
const getVesselsReportByVoyageIdWithParams = async (voyage_id, query) => {
  const voyage = await knex.from("voyages").where({ id: voyage_id });

  if (voyage.length === 0) {
    throw new HttpError(
      "Bad request",
      `No voyage exist with that id ${voyage_id}.`,
      404
    );
  }
  if (query.orderBy === undefined) {
    const vesselReports = await knex
      .from("vessel_reports")
      .where({ voyage_id })
      .orderBy("id", "desc")
      .limit(query.limit)
      .offset(0);

    if (vesselReports.length === 0) {
      throw new HttpError(
        "Bad request",
        `No vessel-reports exist with that voyage id ${voyage_id}.`,
        404
      );
    }
    return vesselReports;
  } else {
    const vesselReports = await knex
      .from("vessel_reports")
      .where({ voyage_id })
      .orderBy("id", query.orderBy)
      .limit(50)
      .offset(0);

    if (vesselReports.length === 0) {
      throw new HttpError(
        "Bad request",
        `No vessel-reports exist with that voyage id ${voyage_id}.`,
        404
      );
    }
    return vesselReports;
  }
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

module.exports = {
  createVesselReport,
  getVesselReportById,
  getVesselsReportByVoyageIdWithParams
};
