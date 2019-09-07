"use strict";

const Joi = require("@hapi/joi");
const HttpError = require("../../lib/utils/http-error");

const emailSchema = Joi.object().keys({
  from: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  to: Joi.string()
    .email({ minDomainSegments: 2 })
    .required(),
  subject: Joi.string().optional(),
  text: Joi.string().optional()
});

function validateEmail(req, res, next) {
  Joi.validate(req.body, emailSchema, err => {
    if (err) {
      throw new HttpError("Bad request", `${err.details[0].message}`, 400);
    } else {
      next();
    }
  });
}

module.exports = {
  validateEmail: validateEmail
};
