// Import necessary modules using ESM syntax
import express from "express";
import auth from "../middleware/auth.js"; // Ensure to include the .js extension
import {
  createTodo,
  getTodos,
  updateTodo,
  deleteTodo,
} from "../controllers/todoController.js"; // Ensure to include the .js extension

// Create an instance of the express router
const router = express.Router();

// Apply the auth middleware to all routes in this router
router.use(auth);

// Define routes with their respective handlers
router.post("/:projectId", createTodo);
router.get("/:projectId", getTodos);
router.patch("/:projectId/:id", updateTodo);
router.delete("/:projectId/:id", deleteTodo);

// Export the router as the default export
export default router;
