import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Item from './components/Item';
import Sidebar from './components/Sidebar';
import List from './components/List';

import './assets/app.css';
import './assets/header.css';
import './assets/list.css';
import './assets/sidebar.css';
import './assets/item.css';

function App() {
  const [tasks, setTask] = useState([
    {
      text: 'beispiel',
      subtext: 'subtextbeispiel',
      id: uuidv4(),
      complete: false,
      edit: false,
      time: 'day',
      category: 'general',
    },
  ]);

  //functions
  function addTask(text, time, category) {
    const newTask = {
      text: text,
      id: uuidv4(),
      complete: false,
      edit: false,
      time: time,
      category: category,
    };
    setTask([...tasks, newTask]);
  }

  return (
    <div className="appContainer">
      <Header />
      <Sidebar />
      <div className="mainContainer">
        <List
          title={'day'}
          tasks={tasks.filter((task) => task.time === 'day')}
        />
        <List
          title={'week'}
          tasks={tasks.filter((task) => task.time === 'week')}
        />
        <List
          title={'month'}
          tasks={tasks.filter((task) => task.time === 'month')}
        />
      </div>
    </div>
  );
}

export default App;
