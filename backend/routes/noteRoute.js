import express from "express";
import noteController from "../controllers/noteController.js";
import authController from "../controllers/authController.js";
const router = express.Router();

router.use(authController.protectRoute);

router
  .route("/")
  .get(noteController.getAllNote)
  .post(noteController.createNote);
router
  .route("/:id")
  .get(noteController.getNote)
  .patch(noteController.updateNote)
  .delete(noteController.deleteNote);

export default router;
