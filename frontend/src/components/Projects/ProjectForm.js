import React, { useState } from "react";
import { createProject } from "../../services/projectService";
import { FaPlusCircle } from "react-icons/fa";

const ProjectForm = ({ onProjectAdded }) => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      return;
    }
    try {
      await createProject({ title });
      setTitle("");
      onProjectAdded();
    } catch (error) {
      console.error("Error creating project:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded-lg p-6 mb-6"
    >
      <div className="mb-4">
        <label
          htmlFor="project-title"
          className="block text-gray-700 font-bold mb-2"
        >
          Project Title
        </label>
        <input
          type="text"
          id="project-title"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
        />
      </div>
      <button
        type="submit"
        className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 w-full"
      >
        <FaPlusCircle className="mr-2" />
        Create Project
      </button>
    </form>
  );
};

export default ProjectForm;
