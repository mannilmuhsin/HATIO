// src/services/todoService.js
import api from './api';

export const getTodos = async (projectId) => {
  const response = await api.get(`/todos/${projectId}`);
  return response.data;
};

export const createTodo = async (projectId, todoData) => {
  const response = await api.post(`/todos/${projectId}`, todoData);
  return response.data;
};

export const updateTodo = async (projectId, todoId, todoData) => {
  const response = await api.patch(`/todos/${projectId}/${todoId}`, todoData);
  return response.data;
};

export const deleteTodo = async (projectId, todoId) => {
  const response = await api.delete(`/todos/${projectId}/${todoId}`);
  return response.data;
};