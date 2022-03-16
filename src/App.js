import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import Item from './components/Item';
import Sidebar from './components/Sidebar';
import List from './components/List';

import './assets/app.css';
import './assets/header.css';
import './assets/list.css';
import './assets/sidebar.css';

function App() {
  const [task, setTask] = useState([]);

  return (
    <div className="appContainer">
      <Header />
      <Sidebar />
      <div className="mainContainer">
        <List title={'day'} />
        <List title={'week'} />
        <List title={'month'} />
      </div>
    </div>
  );
}

export default App;
