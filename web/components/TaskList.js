import React, {useEffect, usesState} from 'react';
import axios from 'axios';
import { getTasks, deleteTask } from '../services/api';

const fetchTasks = () => {
      getTasks()
        .then(response => setTasks(response.data))
        .catch(error => console.error(error));
    };
  
    useEffect(() => {
      fetchTasks();
    }, []);
  
    const handleDelete = (id) => {
      deleteTask(id).then(fetchTasks).catch(error => console.error(error));
    };
  
    return (
      <div className="task-list">
        <h1>Task List</h1>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => handleDelete(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
const TaskList = () => {
    const [tasks, setTasks] = usesState([]);

    useEffect(() => {
        axios.get('/api/tasks')
        .then(response => setTasks(response.data))
        .catch(error => console.error(error));
    }, []);

    return(
        <div className="task-list">
            <h1>Task List</h1>
            <ul>
                {tasks.map(tasks =>(
                    <li key={tasks.id}>{tasks.name}</li>
                ))}
            </ul>
        </div>
    );
    <div className="task-list p-4 md:p-8">
  <h1 className="text-2xl font-bold mb-4">Task List</h1>
  <ul className="space-y-2">
    {tasks.map(task => (
      <li key={task.id} className="flex justify-between items-center">
        <span>{task.name}</span>
        <button className="text-red-500" onClick={() => handleDelete(task.id)}>Delete</button>
      </li>
    ))}
  </ul>
</div>
};

export default TaskList;