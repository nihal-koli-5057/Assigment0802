const db = require("../models/index.js");
const Address = db.address;

async function addAddress(req) {
  const payload = {
    userId: req.body.userId,
    streetAddress: req.body.streetAddress,
    city: req.body.city,
    state: req.body.state,
    postalCode: req.body.postalCode,
    country: req.body.country,
  };
  const addAddress = await Address.create(payload).then((resultEntity) =>
    resultEntity.get({ plain: true })
  );
  return addAddress;
}

async function getUserById(id) {
  try {
    const address = await Address.findOne({
      where: { id },
      raw: true,
    });
    return address;
  } catch (error) {
    console.error(error.message);
  }
}

module.exports = {
  addAddress,
  getUserById,
};
