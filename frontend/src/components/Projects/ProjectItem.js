import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  getProject,
  updateProject,
  exportProjectSummary,
} from "../../services/projectService";
import TodoList from "../Todos/TodoList";
import { FaEdit, FaFileExport } from "react-icons/fa";

const ProjectItem = () => {
  const [project, setProject] = useState(null);
  const [title, setTitle] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    fetchProject();
  }, [id]);

  const fetchProject = async () => {
    try {
      const data = await getProject(id);
      setProject(data);
      setTitle(data.title);
    } catch (error) {
      console.error("Error fetching project:", error);
    }
  };

  const handleTitleChange = async () => {
    try {
      await updateProject(id, { title });
      setIsEditing(false);
      fetchProject();
    } catch (error) {
      console.error("Error updating project title:", error);
    }
  };

  const handleExport = async () => {
    try {
      const gistUrl = await exportProjectSummary(id);
      window.open(gistUrl, "_blank");
    } catch (error) {
      console.error("Error exporting project summary:", error);
    }
  };

  if (!project)
    return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="container mx-auto p-6 bg-white shadow-md rounded-lg">
      <div className="flex justify-between items-center mb-4">
        {isEditing ? (
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            onBlur={handleTitleChange}
            className="border-b-2 border-blue-500 focus:outline-none text-xl font-semibold text-gray-700"
          />
        ) : (
          <h2 className="text-2xl font-bold text-gray-800">
            {title}
            <button
              className="ml-2 text-blue-600 hover:text-blue-800 transition-colors duration-200"
              onClick={() => setIsEditing(true)}
            >
              <FaEdit className="inline-block h-5 w-5" />
            </button>
          </h2>
        )}

        {/* Export Button */}
        <button
          onClick={handleExport}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          <FaFileExport className="mr-2" />
          Export Summary
        </button>
      </div>

      {/* Todo List */}
      <TodoList projectId={id} />
    </div>
  );
};

export default ProjectItem;
