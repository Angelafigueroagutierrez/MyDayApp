
import React from 'react';
import TaskItem from '../TaskItem/TaskItem';
import { useTasks } from '../../context/TaskContext';
import './TaskList.css';

const TaskList = ({ filter }) => {
  const { tasks } = useTasks();

  const filteredTasks = tasks.filter(task => {
    if (filter === 'pending') {
      return !task.completed;
    } else if (filter === 'completed') {
      return task.completed;
    } else {
      return true;
    }
  });

  return (
    <ul className="todo-list">
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;