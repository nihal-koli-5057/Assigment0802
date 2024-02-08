const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const addressService = require("../services/address.service");

const addAddress = catchAsync(async (req, res) => {
  const users = await addressService.addAddress(req);
  res.send({ users });
});

const getAddress = catchAsync(async (req, res) => {
  const user = await userService.getUserById(req.params.userId);

  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, "User not found");
  }

  delete user.password;
  res.send({ user });
});

module.exports = {
  addAddress,
  getAddress,
};
