const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const { encryptData } = require("../utils/auth.js");
const db = require("../models");
const User = db.user;

async function createUser(req) {
  const {
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    dateOfBirth,
    gender,
  } = req.body;
  const hashedPassword = await encryptData(password);
  const user = await getUserByEmail(email);

  if (user) {
    throw new ApiError(httpStatus.CONFLICT, "This email already exits");
  }

  const createdUser = await User.create({
    email,
    firstName,
    lastName,
    password,
    phoneNumber,
    dateOfBirth,
    gender,
    password: hashedPassword,
  }).then((resultEntity) => resultEntity.get({ plain: true }));

  return createdUser;
}

async function getUserById(id) {
  try {
    const user = await User.findOne({
      where: { id },
      include: [{ model: db.address }],
    });
    return user;
  } catch (error) {
    console.error(error.message);
  }
}

async function getUserByEmail(email) {
  const user = await db.user.findOne({
    where: { email },
    raw: true,
  });

  return user;
}
async function validateUser(id, email) {
  const user = await db.user.findOne({
    where: { id, email },
    raw: true,
  });

  return user;
}
module.exports = {
  createUser,
  getUserById,
  getUserByEmail,
  validateUser,
};
