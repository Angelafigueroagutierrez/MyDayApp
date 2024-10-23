import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask, updateTaskTitle } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter' && editValue.trim()) {
      updateTaskTitle(task.id, editValue.trim());
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(task.title);  
    }
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  return (
    <li className={`${task.completed ? 'completed' : ''} ${isEditing ? 'editing' : ''}`}>
      <div className="view">
        <input
          className="toggle"
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)} 
        />
        {!isEditing && (
          <label onDoubleClick={handleDoubleClick}>{task.title}</label>
        )}
        <button className="destroy" onClick={() => removeTask(task.id)}></button>
      </div>
      {isEditing && (
        <input
          className="edit"
          value={editValue}
          onChange={handleEditChange}
          onKeyDown={handleEditKeyDown}
          onBlur={handleBlur}
          autoFocus  
        />
      )}
    </li>
  );
};

export default TaskItem;