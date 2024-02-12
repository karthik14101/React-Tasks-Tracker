import React, { useState } from 'react';
import './styles/App.css';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle Completion
  const toggleCompletion = (id) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <div className='container'>
      <header className='header'>
        <h1>Task Tracker</h1>
        <AddTask onAdd={addTask} />
      </header>
      {tasks.length > 0 ? (
        <TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleCompletion} />
      ) : (
        <p>No tasks to show</p>
      )}
    </div>
  );
}

export default App;
