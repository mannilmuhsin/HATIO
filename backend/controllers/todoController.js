// Import necessary modules using ESM syntax
import Todo from '../models/Todo.js'; // Ensure to include the .js extension

// Create a new Todo item
export const createTodo = async (req, res) => {
  try {
    const todo = new Todo({
      ...req.body,
      project: req.params.projectId,
    });
    await todo.save();
    res.status(201).send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Get all Todo items for a specific project
export const getTodos = async (req, res) => {
  try {
    const todos = await Todo.find({ project: req.params.projectId })
    .sort({ status: 1, updatedDate: -1 }); // Sort by status first, then by updatedDate
  
    res.send(todos);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a specific Todo item
export const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id, project: req.params.projectId },
      { ...req.body, updatedDate: Date.now() },
      { new: true, runValidators: true }
    );
    if (!todo) {
      return res.status(404).send();
    }
    res.send(todo);
  } catch (error) {
    res.status(400).send(error);
  }
};

// Delete a specific Todo item
export const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findOneAndDelete({ _id: req.params.id, project: req.params.projectId });
    if (!todo) {
      return res.status(404).send();
    }
    res.send(todo);
  } catch (error) {
    res.status(500).send(error);
  }
};
