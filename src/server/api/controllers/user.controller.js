"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");
const bcrypt = require("bcrypt");
const generatePassword = require("generate-password");
const mailer = require("../lib/services/mailer.service");
const { hashPassword } = require("../lib/utils/hash.password");

const getUsers = async req => {
  try {
    return await knex("users")
      .select("users.email", "users.name", "user_roles.role")
      .join("user_roles", { "users.role_id": "user_roles.id" });
  } catch (err) {
    console.log(err);
  }
};

const getUserById = async id => {
  try {
    const users = await knex("users")
      .select("users.id as id", "email", "role_id", "name", "password")
      .where({ id });
    if (users.length === 0) {
      throw new HttpError("Bad request", `Cannot find user for ID ${id}!`, 404);
    }
    return users;
  } catch (err) {
    return err.message;
  }
};

const getAccount = async req => {
  const { id } = req.user;
  try {
    const result = await knex("users")
      .join("user_roles", "users.role_id", "user_roles.id")
      .select("*")
      .where({ "users.id": id });
    return result;
  } catch (err) {
    return "User did not find";
  }
};

const createUser = async ({ body }) => {
  const { name, email, organization_id } = body;
  const users = await knex
    .from("users")
    .select("*")
    .where({ email });
  if (users.length !== 0) {
    throw new HttpError("Bad request", "user already exists!", 409);
  }

  const role = await knex
    .from("user_roles")
    .select("*")
    .where({ role: body.role });

  if (role.length > 0) {
    const hashedPassword = await hashPassword(body.password);

    return knex("users").insert({
      role_id: role[0].id,
      organization_id,
      email,
      password: hashedPassword,
      name,
      status: false
    });
  } else {
    throw new HttpError("Bad request", `${body.role} role not found!`, 404);
  }
};

const editUser = async ({ body }) => {
  const { email, password, name } = body;

  const user = await knex
    .from("users")
    .select("*")
    .where({ email });
  if (user.length === 0) {
    throw new HttpError(
      "Bad request",
      `Cannot find user with email ${email}!`,
      404
    );
  }

  if (user.length > 1) {
    throw new HttpError(
      "Bad request",
      "An unexpected error has occurred!",
      404
    );
  }

  const queryData = {};
  const hashedPassword = await hashPassword(password);

  if (body.name) queryData.name = name;
  if (body.password) queryData.password = hashedPassword;

  if (Object.keys(queryData).length !== 0) {
    return knex("users")
      .where({ id: user[0].id })
      .update(queryData);
  } else return "No edit fields passed, nothing updated!";
};
const sendPasswordResetCode = async ({ body }) => {
  let user = await knex("users")
    .select("*")
    .where({ id: body.id });
  if (user.length === 0) {
    throw new HttpError("Bad request", `User not found for id ${body.id}`, 404);
  }

  user = user[0];

  const code = await generatePassword.generate({ length: 8, numbers: true });

  await knex("users")
    .where({ id: body.id })
    .update({ password: code });

  try {
    await mailer.sendEmail({
      body: {
        from: "Hack Your Future",
        to: user.email,
        subject: "Code for password reset",
        text: `Hello ${user.name}! Code for reseting your password is ${code} `
      }
    });
    return "Email with code sent!";
  } catch (error) {
    return error.message;
  }
};

const resetPasswordWithCode = async ({ body }) => {
  let user = await knex("users")
    .select("*")
    .where({ id: body.id });
  if (user.length === 0) {
    throw new HttpError("Bad request", `User not found for id ${body.id}`, 404);
  }

  user = user[0];

  if (user.password === body.code) {
    return knex("users")
      .where({ id: body.id })
      .update({
        password: await hashPassword(body.password)
      });
  } else throw new HttpError("Bad request", "Reset codes dont match!", 500);
};
const changePasswordRandomly = async ({ body }) => {
  let user = await knex("users")
    .select("*")
    .where({ email: body.email });
  if (user.length === 0) {
    throw new HttpError(
      "Bad request",
      `User not found for email ${body.email}`,
      404
    );
  }

  const password = await generatePassword.generate({
    length: 10,
    numbers: true
  });
  if (password) {
    user = user[0];

    try {
      await mailer.sendEmail({
        body: {
          from: "Hack Your Future",
          to: user.email,
          subject: "New password",
          text: `Hello ${user.name}. Your new password is ${password}`
        }
      });

      return knex("users")
        .where({ id: user.id })
        .update({ password: await hashPassword(password) });
    } catch (error) {
      return `Error occured! ${error.message}`;
    }
  } else return false;
};
const deleteUser = async ({ body }) => {
  try {
    if (!body.id) throw new HttpError("Bad request", "No id key passed", 400);
    return knex("users")
      .where({ id: body.id })
      .del();
  } catch (err) {
    console.log(err);
    return "something is wrong, try again";
  }
};

const editUserRole = async ({ body, id }) => {
  const emailAdmin = body.email;
  const Admin = await knex
    .from("users")
    .select("*")
    .where({ email: emailAdmin });
  if (Admin.length === 0) {
    throw new HttpError("Bad request", "Email for admin is not correct", 404);
  }

  const hashpassword = await knex
    .from("users")
    .select("password")
    .where("email", emailAdmin);

  if (hashpassword.length === 0) {
    throw new HttpError("Bad request", "password does not exist", 404);
  }

  const someOtherPlaintextPassword = body.password;
  const hashP = hashpassword[0].password;

  const passwordIsValid = bcrypt.compareSync(someOtherPlaintextPassword, hashP);
  if (!passwordIsValid) {
    throw new HttpError("Bad request", "password does not exist", 404);
  }

  const user = await knex
    .from("users")
    .select("*")
    .where({ id: id });
  if (user.length === 0) {
    throw new HttpError("Bad request", `Cannot find user for ID ${id}!`, 404);
  }

  const queryData = {};

  if (body.role_id === "Admin" || body.role_id === "") {
    queryData.role_id = 1;
  } else if (body.role_id === "Publisher") {
    queryData.role_id = 2;
  }

  if (Object.keys(queryData).length !== 0) {
    return knex("users")
      .where({ id: id })
      .update(queryData);
  } else return "No edit fields passed, nothing updated!";
};
const createAdminBySuperUser = async (id, body) => {
  const users = await knex
    .from("users")
    .select("*")
    .where({ email: body.email });
  if (users.length !== 0) {
    throw new HttpError("Bad request", "user already exists!", 409);
  }
  const hashedPassword = await hashPassword(body.password);
  return knex("users").insert({
    role_id: 2,
    organization_id: id,
    email: body.email,
    password: hashedPassword,
    name: body.name,
    status: false
  });
};

module.exports = {
  createUser,
  getUsers,
  getAccount,
  editUser,
  sendPasswordResetCode,
  resetPasswordWithCode,
  changePasswordRandomly,
  deleteUser,
  getUserById,
  editUserRole,
  createAdminBySuperUser
};
