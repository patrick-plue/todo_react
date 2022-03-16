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
  // useStates
  const [tasks, setTasks] = useState([]);
  const [progressStatus, setProgressStatus] = useState();
  console.log(tasks);

  console.log(progressStatus);

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

  function changeProgressStatus(value) {
    let taskList = [...tasks];
    taskList = taskList.filter((task) => task.selected === true);
    taskList = [...tasks, taskList.map((task) => (task.progress = value))];
    setTasks(taskList);
    removeSelectStatus();
  }

  function removeSelectStatus() {
    let taskList = [...tasks];
    taskList.map((task) => (task.selected = false));
    setTasks(taskList);
  }

  return (
    <div className="appContainer">
      <Header deleteTask={deleteTask} />
      <Sidebar
        addTask={addTask}
        setProgressStatus={setProgressStatus}
        progressStatus={progressStatus}
      />
      <div className="mainContainer">
        <List
          title={'todo'}
          tasks={tasks.filter((task) => task.progress === 'todo')}
          select={select}
          changeProgressStatus={changeProgressStatus}
        />
        <List
          title={'progress'}
          tasks={tasks.filter((task) => task.progress === 'progress')}
          select={select}
          changeProgressStatus={changeProgressStatus}
        />
        <List
          title={'done'}
          tasks={tasks.filter((task) => task.progress === 'done')}
          select={select}
          changeProgressStatus={changeProgressStatus}
        />
      </div>
    </div>
  );
}

export default App;
