// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import TaskList from './components/TaskList/TaskList';
import Footer from './components/Footer/Footer';
import { TaskProvider } from './context/TaskContext';

const App = () => {
  return (
    <TaskProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<TaskList filter="all" />} />
          <Route path="/all" element={<TaskList filter="all" />} />
          <Route path="/pending" element={<TaskList filter="pending" />} />
          <Route path="/completed" element={<TaskList filter="completed" />} />
        </Routes>
        <Footer />
      </Router>
    </TaskProvider>
  );
};

export default App;
