"use strict";

const bcrypt = require("bcrypt");

const hashPassword = input => {
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(input, salt);
};

module.exports = {
  hashPassword
};
