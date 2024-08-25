import React, {useState} from 'react';
import axios from 'axios';
import { Input } from 'postcss';

const TaskForm = ({fetchTasks}) => {
    const [task, setTask] = useState({name: ''});

    const handleChange = (e) => {
        setTask({...task, [e.target.name]: e.target.value});
    };

    const handleSubmit =(e) => {
        e.preventDefault();
        axios(() => {
            fetchTasks();
            setTask({name:''});
        })
        .catch(error => console.error(error));
    };
    
    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="name"
                value={task.name}
                onChange={handleChange}
                placeholder="Add a new task"
                />
                <button type="submit">Add Task</button>
        </form>
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

export default TaskForm;