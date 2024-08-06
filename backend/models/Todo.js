import mongoose from "mongoose";

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

const Todo = mongoose.model("Todo", todoSchema);

export default Todo;
