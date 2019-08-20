"use strict";

const HttpError = require("../lib/utils/http-error");
const knex = require("../../config/db");
const path = require("path");

const moduleColumns = [
  "modules.id as id",
  "modules.title as title",
  "modules.start_date as start_date",
  "modules.end_date as end_date",
  "classes.id as class_id",
  "classes.title as class_title"
];

const getModules = async params => {
  const modulesWithClassInfo = await knex("modules")
    .join("classes", "modules.class_id", "=", "classes.id")
    .columns(moduleColumns);

  const moduleTeachersPromises = modulesWithClassInfo.map(module =>
    knex("module_teachers").where("module_teachers.module_id", module.id)
  );

  const moduleTeachers = await Promise.all(moduleTeachersPromises);

  modulesWithClassInfo.forEach(
    (module, i) => (module.teachers = moduleTeachers[i])
  );

  return modulesWithClassInfo;
};

const getModuleById = async moduleId => {
  const modulesWithClassInfo = await knex("modules")
    .join("classes", "modules.class_id", "=", "classes.id")
    .where("modules.id", moduleId)
    .columns(moduleColumns);

  const moduleTeachersPromises = modulesWithClassInfo.map(module =>
    knex("module_teachers").where("module_teachers.module_id", module.id)
  );

  const moduleTeachers = await Promise.all(moduleTeachersPromises);

  modulesWithClassInfo.forEach(
    (module, i) => (module.teachers = moduleTeachers[i])
  );

  return modulesWithClassInfo;
};

const editModule = async (moduleId, updatedModule) => {
  const databaseUpdations = [];
  databaseUpdations.push(
    knex("modules")
      .where({ id: moduleId })
      .update({
        title: updatedModule.title,
        start_date: updatedModule.start_date,
        end_date: updatedModule.end_date,
        class_id: updatedModule.class_id
      })
  );

  if (
    updatedModule.teacher_1_module_teachers_id &&
    updatedModule.teacher_1 !== ""
  ) {
    databaseUpdations.push(
      await knex("module_teachers")
        .where({ id: updatedModule.teacher_1_module_teachers_id })
        .update({
          teacher_id: updatedModule.teacher_1
        })
    );
  } else if (updatedModule.teacher_1 && updatedModule.teacher_1 !== "") {
    // should be done at the same time, teacher1 and teacher2 requests!
    databaseUpdations.push(
      knex("module_teachers").insert({
        teacher_id: updatedModule.teacher_1,
        module_id: moduleId
      })
    );
  }

  if (
    updatedModule.teacher_2_module_teachers_id &&
    updatedModule.teacher_2 !== ""
  ) {
    databaseUpdations.push(
      knex("module_teachers")
        .where({ id: updatedModule.teacher_2_module_teachers_id })
        .update({
          teacher_id: updatedModule.teacher_2
        })
    );
  } else if (updatedModule.teacher_2 && updatedModule.teacher_2 !== "") {
    // should be done at the same time, teacher2 and teacher2 requests!
    databaseUpdations.push(
      knex("module_teachers").insert({
        teacher_id: updatedModule.teacher_2,
        module_id: moduleId
      })
    );
  }

  return Promise.all(databaseUpdations);
};

const deleteModule = async (modulesId, req) => {
  return knex("modules")
    .where({ id: modulesId })
    .del();
};

const createModule = async body => {
  const [moduleId] = await knex("modules").insert({
    title: body.title,
    start_date: body.start_date,
    end_date: body.end_date,
    class_id: body.class_id
  });

  if (body.teacher_1) {
    // should be done at the same time, teacher1 and teacher2 requests!
    await knex("module_teachers").insert({
      teacher_id: body.teacher_1,
      module_id: moduleId
    });
  }

  if (body.teacher_2) {
    // should be done at the same time, teacher1 and teacher2 requests!
    await knex("module_teachers").insert({
      teacher_id: body.teacher_2,
      module_id: moduleId
    });
  }

  return {
    successful: true
  };
};

module.exports = {
  getModules,
  getModuleById,
  deleteModule,
  createModule,
  editModule
};
