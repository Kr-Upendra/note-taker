import express from "express";
import authController from "../controllers/authController.js";
import userController from "../controllers/userController.js";
const router = express.Router();

router.route("/signup").post(authController.signup);
router.route("/login").post(authController.login);

router
  .route("/")
  .get(
    authController.protectRoute,
    authController.restrictTo("admin"),
    userController.getAllUser
  );

router
  .route("/:id")
  .delete(
    authController.protectRoute,
    authController.restrictTo("admin"),
    userController.getAllUser
  );

export default router;
