const Joi = require("@hapi/joi");

const createAddress = {
  body: Joi.object().keys({
    userId: Joi.number().integer().required(),
    streetAddress: Joi.string().required(),
    city: Joi.string().required(),
    state: Joi.string().required(),
    postalCode: Joi.string().required(),
    country: Joi.string().required(),
  }),
};

const getaddress = {
  params: Joi.object().keys({
    addressId: Joi.string(),
  }),
};

module.exports = { getaddress, createAddress };
