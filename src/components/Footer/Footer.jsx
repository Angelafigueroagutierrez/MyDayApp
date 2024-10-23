
import React from 'react';
import { useTasks } from '../../context/TaskContext';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const { tasks, clearCompletedTasks } = useTasks();
  const pendingTasks = tasks.filter(task => !task.completed).length;
  const completedTasks = tasks.filter(task => task.completed).length;

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{pendingTasks}</strong> {pendingTasks === 1 ? 'item' : 'items'} left
      </span>
      <ul className="filters">
        <li>
          <Link to="/all" className={currentPath === '/all' ? 'selected' : ''}>All</Link>
        </li>
        <li>
          <Link to="/pending" className={currentPath === '/pending' ? 'selected' : ''}>Pending</Link>
        </li>
        <li>
          <Link to="/completed" className={currentPath === '/completed' ? 'selected' : ''}>Completed</Link>
        </li>
      </ul>
      {completedTasks > 0 && (
        <button className="clear-completed" onClick={clearCompletedTasks}>
          Clear completed
        </button>
      )}
    </footer>
  );
};

export default Footer;
