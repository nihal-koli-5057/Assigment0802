const userService = require("../services/user.service");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const bycrypt = require("bcrypt");
const { generateExpires, generateToken } = require("../utils/auth.js");
const db = require("../models");
const User = db.user;

async function login(req) {
  try {
    const { email, password } = req.body;
    const user = await userService.getUserByEmail(email);
    if (!user) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid email or password");
    }
    const validPassword = await bycrypt.compare(password, user.password);
    if (validPassword != true) {
      throw new ApiError(httpStatus.UNAUTHORIZED, "Invalid email or password");
    }
    const token = await generateAuthTokens(user.id, user.email);
    return { user, token };
  } catch (error) {
    console.error(error.message);
  }
}

async function generateAuthTokens(id, email) {
  const accessTokenExpires = generateExpires(1);
  const accessToken = generateToken({ id, email }, accessTokenExpires);

  const refreshTokenExpires = generateExpires(24);
  const refreshToken = generateToken({ id, email }, refreshTokenExpires);

  return {
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires,
    },
    access: {
      token: accessToken,
      expires: accessTokenExpires,
    },
  };
}

async function refreshToken(req, res) {
  const access = {
    token: "",
    expires: "",
  };
  try {
    const { id, email } = req.tokenUser;
    const accessTokenExpires = generateExpires(1);
    const accessToken = generateToken({ id, email }, accessTokenExpires);

    access.token = accessToken;
    access.expires = accessTokenExpires;
  } catch (error) {
    console.error(error, error.message);
  }
  return {
    access,
  };
}
module.exports = {
  login,
  refreshToken,
};
