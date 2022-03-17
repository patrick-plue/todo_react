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
  const [filteredTasks, setFilteredTasks] = useState([]);
  const [filterOption, setFilterOption] = useState('general');
  console.log('tasks', tasks);

  // useEffect

  useEffect(() => {
    filterTasks(filterOption);
  }, [tasks, filterOption]);

  //functions
  function addTask(event, text, progress, currentCategory) {
    event.preventDefault();
    if (text) {
      const newTask = {
        text: text,
        id: uuidv4(),
        archived: false,
        edit: false,
        progress: progress,
        category: currentCategory,
        selected: false,
        important: false,
      };
      setTasks([newTask, ...tasks]);
    } else {
      return;
    }
  }

  function select(id) {
    const taskList = [...tasks];
    const index = tasks.findIndex((task) => task.id === id);
    if (tasks[index].edit != true) {
      tasks[index].selected = !tasks[index].selected;
      setTasks(taskList);
    }
  }

  const editTask = () => {
    let taskList = [...tasks];
    const index = taskList.findIndex((task) => task.selected === true);
    taskList[index].edit = true;
    setTasks(taskList);
  };

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

  function filterTasks(category) {
    let taskList = [...tasks];
    taskList = taskList.filter((task) => task.category === category);
    setFilteredTasks(taskList);
  }

  function changeFilterOption(value) {
    setFilterOption(value);
  }

  return (
    <div className="appContainer">
      <Header deleteTask={deleteTask} editTask={editTask} />
      <Sidebar
        addTask={addTask}
        setProgressStatus={setProgressStatus}
        progressStatus={progressStatus}
        changeFilterOption={changeFilterOption}
      />
      <div className="mainContainer">
        <List
          title={'todo'}
          tasks={filteredTasks.filter((task) => task.progress === 'todo')}
          select={select}
          changeProgressStatus={changeProgressStatus}
        />
        <List
          title={'progress'}
          tasks={filteredTasks.filter((task) => task.progress === 'progress')}
          select={select}
          changeProgressStatus={changeProgressStatus}
        />
        <List
          title={'done'}
          tasks={filteredTasks.filter((task) => task.progress === 'done')}
          select={select}
          changeProgressStatus={changeProgressStatus}
        />
      </div>
    </div>
  );
}

export default App;
