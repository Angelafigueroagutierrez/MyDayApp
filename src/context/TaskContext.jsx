// src/context/TaskContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

// Clave de LocalStorage
const LOCAL_STORAGE_KEY = 'mydayapp-reactjs';

// Función para obtener las tareas desde LocalStorage
const getStoredTasks = () => {
  const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// Contexto y provider de tareas
const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(getStoredTasks);

  // Guardar tareas en LocalStorage cada vez que cambien
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks([...tasks, newTask]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const updateTaskTitle = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <TaskContext.Provider value={{ tasks, handleAddTask, toggleTask, removeTask, updateTaskTitle, clearCompletedTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => useContext(TaskContext);