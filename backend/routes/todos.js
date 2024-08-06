import express from "express";
import auth from "../middleware/auth.js";
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js";

const router = express.Router();

// Apply the auth middleware to all routes in this router
router.use(auth);

// Define routes with their respective handlers
router.post("/:projectId", createTodo);
router.get("/:projectId", getTodos);
router.patch("/:projectId/:id", updateTodo);
router.delete("/:projectId/:id", deleteTodo);

export default router;
