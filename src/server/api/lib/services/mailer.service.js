"use strict";

const nodemailer = require("nodemailer");
const winston = require("../utils/winston").logger;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

const sendEmail = async ({ body }) => {
  const message = {
    from: body.from,
    to: body.to,
    subject: body.subject,
    text: body.text
  };

  return transporter.sendMail(message, (error, info) => {
    if (error) {
      winston.error(`Error while sending logs in email ${error}`);
      return error;
    }
    winston.info(`Message sent to ${info.messageId}`);
    return true;
  });
};

module.exports = {
  sendEmail
};
