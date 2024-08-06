import React, { useState } from "react";
import { createTodo } from "../../services/todoService";
import { FaPlus } from "react-icons/fa";

const TodoForm = ({ projectId, onTodoAdded }) => {
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!description.trim()) {
      return;
    }
    try {
      await createTodo(projectId, { description });
      setDescription("");
      onTodoAdded();
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-4"
    >
      <div className="mb-4">
        <label
          htmlFor="todo-description"
          className="block text-gray-700 font-bold mb-2"
        >
          Add New Todo
        </label>
        <input
          type="text"
          id="todo-description"
          placeholder="Enter todo description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition duration-200"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
      >
        <FaPlus className="mr-2" />
        Add Todo
      </button>
    </form>
  );
};

export default TodoForm;
