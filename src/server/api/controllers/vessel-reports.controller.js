"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");

//Get vessels reports by vessel id
/*const getVesselsReportByVoyageId = async voyage_id => {
  const vesselReports = await knex.from("vessel_reports").where({ voyage_id });
  if (vesselReports.length === 0) {
    return `No voyage exist with that id ${voyage_id}.`;
  }
  return vesselReports;
};*/

//Get vessels reports by voyage_id with limit, offset and
const getVesselsReportByVoyageIdWithParams = async (voyage_id, set_limit) => {
  console.log("limit");
  console.log(voyage_id);
  console.log(typeof set_limit);
  if (set_limit === "") {
    return (set_limit = 50);
  } else {
    return set_limit;
  }

  /* if (set_order==="") {
    return set_order = "desc";
    }
    else {
      return set_order;
    }*/
  try {
    const voyage = await knex.from("voyages").where({ id: voyage_id });

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
      .orderBy("id", "desc")
      .limit({ set_limit })
      .offset(0);

    if (vesselReports.length === 0) {
      return `No vessel-reports exist with that voyage id ${voyage_id}.`;
    }
    return vesselReports;
  } catch (error) {
    return error.message;
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
  //getVesselsReportByVoyageId,
  getVesselsReportByVoyageIdWithParams
};
