const validate = require("../middlewares/validate");
const authMiddleware = require("../middlewares/auth.middleware");
const userValidation = require("../validators/user.validation");
module.exports = (app) => {
  const userController = require("../controllers/user.controller");
  const authController = require("../controllers/auth.controller");

  const router = require("express").Router();

  router.post(
    "/",
    validate(userValidation.createUser),
    userController.createUser
  );
  router.post("/login", validate(userValidation.login), authController.login);
  router
    .route("/:userId")
    .get(
      authMiddleware.user,
      validate(userValidation.getUser),
      userController.getUser
    );

  app.use("/api/user", router);
};
