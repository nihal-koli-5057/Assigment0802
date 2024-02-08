const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const userService = require("../services/user.service");

const createUser = catchAsync(async (req, res) => {
  const users = await userService.createUser(req);
  res.send({ users });
});

const getUser = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }
  delete user.password;
  res.send({ user });
});


module.exports = {
  createUser,
  getUser,
};
