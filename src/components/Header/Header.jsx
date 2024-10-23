// src/components/Header.jsx
import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import './Header.css';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const { handleAddTask } = useTasks();  // Extraemos la función del contexto

  // Función para manejar el evento al presionar Enter
  const handleKeyDown = (e) => {
    // Si presiona Enter y el input no está vacío
    if (e.key === 'Enter' && inputValue.trim()) {
      handleAddTask(inputValue.trim());  // Llamamos a la función para añadir la tarea
      setInputValue('');  // Limpiar el input
    }
  };

  return (
    <header className='Header-style'>
      <h1>My Day</h1>
      <h2> All my task in one place</h2>
      <input className='placeholder'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  // Actualiza el valor del input
        onKeyDown={handleKeyDown}  // Detecta cuando el usuario presiona Enter
        placeholder="Type new todo"
        autoFocus  // El input se enfoca al cargar la página
      />
    </header>
  );
};

export default Header;