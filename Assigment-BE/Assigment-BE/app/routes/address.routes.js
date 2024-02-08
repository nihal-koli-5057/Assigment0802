const validate = require("../middlewares/validate")
const authMiddleware = require("../middlewares/auth.middleware")
const reqValidation = require("../validators/address.validation")
module.exports = app => {
  const addressController = require("../controllers/address.controller");

  const router = require("express").Router();

  router.post("/",authMiddleware.user,validate(reqValidation.createAddress), addressController.addAddress);
  router
	.route('/:addressId')
	.get(
    authMiddleware.user,
		validate(reqValidation.getaddress),
		addressController.getAddress
	)

  app.use("/api/address", router);
};
