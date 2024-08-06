import express from "express";
import auth from "../middleware/auth.js";
import {
  createProject,
  getProjects,
  getProject,
  updateProject,
  deleteProject,
  exportProjectSummary,
} from "../controllers/projectController.js";

const router = express.Router();

// Apply the auth middleware to all routes in this router
router.use(auth);

// Define the routes with their respective handlers
router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProject);
router.patch("/:id", updateProject);
router.delete("/:id", deleteProject);
router.post("/:id/export", exportProjectSummary);

export default router;
