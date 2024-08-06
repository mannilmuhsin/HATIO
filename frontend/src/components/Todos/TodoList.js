// src/components/Todos/TodoList.js
import React, { useState, useEffect } from 'react';
import { getTodos } from '../../services/todoService';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const TodoList = ({ projectId }) => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetchTodos();
  }, [projectId]);

  const fetchTodos = async () => {
    try {
      const data = await getTodos(projectId);
      setTodos(data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 mx-auto max-w-[700px] rounded-lg shadow-md">
      <h3 className="text-2xl font-semibold mb-4 text-gray-800">Todos</h3>
      <TodoForm projectId={projectId} onTodoAdded={fetchTodos} />
      {todos.length > 0 ? (
        <ul className="list-none p-0">
          {todos.map((todo) => (
            <TodoItem key={todo._id} todo={todo} onTodoUpdated={fetchTodos} />
          ))}
        </ul>
      ) : (
        <p className="text-gray-600">No todos available. Add a new todo to get started!</p>
      )}
    </div>
  );
};

export default TodoList;
