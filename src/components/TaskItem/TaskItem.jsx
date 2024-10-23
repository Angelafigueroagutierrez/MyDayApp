import React, { useState } from 'react';
import { useTasks } from '../../context/TaskContext';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const { toggleTask, removeTask, updateTaskTitle } = useTasks();
  const [isEditing, setIsEditing] = useState(false);
  const [editValue, setEditValue] = useState(task.title);

  // Activar modo de edición
  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  // Manejar cambio en el input de edición
  const handleEditChange = (e) => {
    setEditValue(e.target.value);
  };

  // Guardar cambios al presionar Enter
  const handleEditKeyDown = (e) => {
    if (e.key === 'Enter' && editValue.trim()) {
      updateTaskTitle(task.id, editValue.trim());
      setIsEditing(false);
    } else if (e.key === 'Escape') {
      setIsEditing(false);
      setEditValue(task.title);  // Restablecer el título si se presiona Esc
    }
  };

  // Mostrar input de edición
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
          onChange={() => toggleTask(task.id)}  // Cambiar el estado de la tarea
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
          autoFocus  // El input se enfoca automáticamente en modo edición
        />
      )}
    </li>
  );
};

export default TaskItem;