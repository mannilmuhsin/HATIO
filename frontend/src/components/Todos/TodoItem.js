import React, { useState } from 'react';
import { updateTodo, deleteTodo } from '../../services/todoService';
import { FaEdit, FaTrash, FaCheckCircle, FaCircle } from 'react-icons/fa';

const TodoItem = ({ todo, onTodoUpdated }) => {
  const [description, setDescription] = useState(todo.description);
  const [isEditing, setIsEditing] = useState(false);

  const handleStatusChange = async () => {
    try {
      await updateTodo(todo.project, todo._id, {
        status: todo.status === 'pending' ? 'completed' : 'pending',
      });
      onTodoUpdated();
    } catch (error) {
      console.error('Error updating todo status:', error);
    }
  };

  const handleDescriptionChange = async () => {
    try {
      await updateTodo(todo.project, todo._id, { description });
      setIsEditing(false);
      onTodoUpdated();
    } catch (error) {
      console.error('Error updating todo description:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.project, todo._id);
      onTodoUpdated();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white shadow-md rounded-lg">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.status === 'completed'}
          onChange={handleStatusChange}
          className="form-checkbox h-5 w-5 text-green-600"
        />
        {isEditing ? (
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            onBlur={handleDescriptionChange}
            className="flex-1 px-2 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
          />
        ) : (
          <span
            onClick={() => setIsEditing(true)}
            className={`flex-1 cursor-pointer ${todo.status === 'completed' ? 'line-through text-gray-500' : 'text-gray-800'}`}
          >
            {todo.description}
          </span>
        )}
      </div>
      <div className="flex space-x-2">
        <button
          onClick={handleDelete}
          className="text-red-600 hover:text-red-800 transition duration-300"
        >
          <FaTrash className="h-5 w-5" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
