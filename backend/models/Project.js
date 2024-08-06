import mongoose from "mongoose";

// Define the project schema
const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  createdDate: { type: Date, default: Date.now },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
});

// Create the Project model
const Project = mongoose.model("Project", projectSchema);

export default Project;
