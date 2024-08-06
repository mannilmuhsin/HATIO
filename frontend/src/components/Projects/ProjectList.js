// src/components/Projects/ProjectList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../services/projectService';
import ProjectForm from './ProjectForm';
import { FaPlus, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const data = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  return (
    <div className="container max-w-[700px] mx-auto px-6 py-8">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800">Projects</h2>
        {/* New Project Button */}
        {/* <button
          onClick={() => document.getElementById('new-project-form').scrollIntoView({ behavior: 'smooth' })}
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          <FaPlus className="mr-2" />
          New Project
        </button> */}
      </div>

      {/* Project Form */}
      <div id="new-project-form" className="mb-8">
        <ProjectForm onProjectAdded={fetchProjects} />
      </div>

      {/* Projects List */}
      <div className="bg-white shadow-md rounded-lg p-6">
        {projects.length === 0 ? (
          <p className="text-gray-600 text-center">No projects found. Start by adding a new project!</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {projects.map((project) => (
              <li key={project._id} className="py-4 flex items-center justify-between">
                <div>
                  <Link
                    to={`/projects/${project._id}`}
                    className="text-lg font-semibold text-blue-600 hover:underline"
                  >
                    {project.title}
                  </Link>
                  <p className="text-gray-500">
                  Created Date: {new Date(project.createdDate).toLocaleDateString()}
                  </p>
                </div>
                <Link
                  to={`/projects/${project._id}`}
                  className="flex items-center text-blue-600 hover:text-blue-800 transition-colors duration-200"
                >
                  <FaExternalLinkAlt className="mr-2" />
                  View Project
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProjectList;
