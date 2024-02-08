const userService = require("../services/user.service")
const ApiError = require('../utils/ApiError');
const httpStatus = require('http-status');
const bycrypt = require('bcrypt');
const { generateExpires,generateToken } = require("../utils/auth.js");
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

async function generateAuthTokens(userId, email) {

	const accessTokenExpires = generateExpires(6);
	const accessToken = generateToken({ userId, email }, accessTokenExpires);

	return {
		access: {
			token: accessToken,
			expires: accessTokenExpires,
		},
	};
}
module.exports = {
  login,
};
