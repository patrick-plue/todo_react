import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import List from './components/List';

import './assets/app.css';
import './assets/header.css';
import './assets/list.css';
import './assets/sidebar.css';
import './assets/item.css';

function App() {
  const [tasks, setTasks] = useState([]);

  //functions
  function addTask(event, text, progress, category) {
    event.preventDefault();
    const newTask = {
      text: text,
      id: uuidv4(),
      archived: false,
      edit: false,
      progress: progress,
      category: category,
      selected: false,
      important: false,
    };
    setTasks([...tasks, newTask]);
  }

  function select(id) {
    const taskList = [...tasks];
    const index = tasks.findIndex((task) => task.id === id);
    tasks[index].selected = !tasks[index].selected;
    setTasks(taskList);
  }

  function deleteTask() {
    const taskList = [...tasks];
    const newTaskList = taskList.filter((task) => task.selected === false);
    setTasks(newTaskList);
  }

  console.log(tasks);

  return (
    <div className="appContainer">
      <Header deleteTask={deleteTask} />
      <Sidebar addTask={addTask} />
      <div className="mainContainer">
        <List
          title={'todo'}
          tasks={tasks.filter((task) => task.progress === 'todo')}
          select={select}
        />
        <List
          title={'in progress'}
          tasks={tasks.filter((task) => task.progress === 'inprogress')}
          select={select}
        />
        <List
          title={'done'}
          tasks={tasks.filter((task) => task.progress === 'done')}
          select={select}
        />
      </div>
    </div>
  );
}

export default App;
