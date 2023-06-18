import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import KanbanBoard from './KanbanBoard';

function App() {
  return (
    <div>
      <Header />
      <div className="main">
        <Sidebar />
        <KanbanBoard />
      </div>
    </div>
  );
}

export default App;
