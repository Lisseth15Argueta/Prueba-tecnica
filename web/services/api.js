import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5500/api'
});

export const getTasks = () => api.get('/tasks');
export const createTasks = (task) => api.post('/tasks', task);
export const updateTask = (id, updateTask) => api.put('/tasks/${id}', updateTask);
export const deleteTask = (id) => api.delete('/tasks/${id}');