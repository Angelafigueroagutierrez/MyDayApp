import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import './Header.css';

const Header = () => {
  const [inputValue, setInputValue] = useState('');
  const { handleAddTask } = useTasks(); 

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      handleAddTask(inputValue.trim());  
      setInputValue('');  
    }
  };

  return (
    <header className='Header-style'>
      <h1>My Day</h1>
      <h2> All my task in one place</h2>
      <input className='placeholder'
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}  
        onKeyDown={handleKeyDown}  
        placeholder="Type new todo"
        autoFocus  
      />
    </header>
  );
};

export default Header;