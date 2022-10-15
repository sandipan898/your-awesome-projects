import axios from 'axios';

const END_POINT = 'http://localhost:5000/api'
const API = axios.create({ baseURL: END_POINT });

export const getTodo = (id) => API.get(`/todos/${id}`);
export const getAllTodos = () => API.get("/todos");
export const createTodo = (todoData) => API.post("/todos", todoData);
export const updateTodo = (id, todoData) => API.put(`/todos/${id}`, todoData);
export const deleteTodo = (id) => API.delete(`/todos/${id}`);
