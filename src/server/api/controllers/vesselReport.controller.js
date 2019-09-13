"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");
const bcrypt = require("bcrypt");
const generatePassword = require("generate-password");
const mailer = require("../lib/services/mailer.service");
const { hashPassword } = require("../lib/utils/hash.password");

const getVesselReports = async vessel_id => {
  const vessel_reports = await knex()
    .from("vessel_reports")
    .where({ vessel_id: vessel_id });
};

const createVesselReport = async ({ body }) => {
  const {
    vessel_id,
    position,
    current_speed,
    hfo_consumption,
    lsfo_consumption
  } = body;
  console.log(body);
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

module.exports = { createVesselReport, getVesselReportById, getVesselReports };
