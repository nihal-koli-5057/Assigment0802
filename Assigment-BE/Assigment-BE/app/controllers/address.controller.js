const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");
const ApiError = require("../utils/ApiError");
const addressService = require("../services/address.service");

const addAddress = catchAsync(async (req, res) => {
  const users = await addressService.addAddress(req);
  res.send({ users });
});

const getAddress = catchAsync(async (req, res) => {
  const address = await addressService.getAddressById(req.params.addressId);

  if (!address) {
    throw new ApiError(httpStatus.NOT_FOUND, "address not found");
  }

  res.send({ address });
});

module.exports = {
  addAddress,
  getAddress,
};
