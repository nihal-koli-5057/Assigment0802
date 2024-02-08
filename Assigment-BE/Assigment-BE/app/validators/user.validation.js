const Joi = require("@hapi/joi");

const createUser = {
  body: Joi.object().keys({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string().required(),
    dateOfBirth: Joi.date().iso().required(),
    gender: Joi.string().valid("Male", "Female", "Other").required(),
    password: Joi.string().required(),
  }),
};

const getUser = {
  params: Joi.object().keys({
    userId: Joi.string(),
  }),
};

const login = {
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required(),
  }),
};
module.exports = { createUser, getUser, login };
