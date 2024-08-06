// Import mongoose using ESM syntax
import mongoose from "mongoose";

// Define the todo schema
const todoSchema = new mongoose.Schema({
  description: { type: String, required: true },
  status: { type: String, enum: ["pending", "completed"], default: "pending" },
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
    required: true,
  },
});

// Create the Todo model
const Todo = mongoose.model("Todo", todoSchema);

// Export the Todo model as the default export
export default Todo;
