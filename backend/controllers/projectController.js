import Project from "../models/Project.js";
import Todo from "../models/Todo.js";
import { createGist } from "../utils/githubGist.js";

// Create project function
export const createProject = async (req, res) => {
  try {
    const project = new Project({
      ...req.body,
      user: req.user._id,
    });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all projects function
export const getProjects = async (req, res) => {
  try {
    const projects = await Project.find({ user: req.user._id });
    res.send(projects);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Get a single project function
export const getProject = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update project function
export const updateProject = async (req, res) => {
  try {
    const project = await Project.findOneAndUpdate(
      { _id: req.params.id, user: req.user._id },
      req.body,
      { new: true, runValidators: true }
    );
    if (!project) {
      return res.status(404).send();
    }
    res.send(project);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete project function
export const deleteProject = async (req, res) => {
  try {
    const project = await Project.findOneAndDelete({
      _id: req.params.id,
      user: req.user._id,
    });
    if (!project) {
      return res.status(404).send();
    }
    await Todo.deleteMany({ project: project._id });
    res.send(project);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Export project summary function
export const exportProjectSummary = async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.id,
      user: req.user._id,
    });

    if (!project) {
      return res.status(404).send();
    }
    console.log("hello");

    const todos = await Todo.find({ project: project._id });
    const completedTodos = todos.filter((todo) => todo.status === "completed");
    const pendingTodos = todos.filter((todo) => todo.status === "pending");

    const summary = `<h1>${project.title}</h1>

<p><strong>Summary:</strong> ${completedTodos.length} / ${
      todos.length
    } completed</p>

<h2>Pending Todos</h2>
<ul>
  ${pendingTodos
    .map((todo) => `<li><input type="checkbox"> ${todo.description}</li>`)
    .join("\n")}
</ul>

<h2>Completed Todos</h2>
<ul>
  ${completedTodos
    .map(
      (todo) =>
        `<li><input type="checkbox" checked> [x]  ${todo.description}</li>`
    )
    .join("\n")}
</ul>`;

    const gistUrl = await createGist(project.title, summary);
    res.send({ gistUrl });
  } catch (error) {
    console.error("Error exporting project summary:", error);
    res.status(500).send(error);
  }
};
