import React from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskCard 
          key={index} 
          task={task.task} 
          date={task.date} 
          complited={task.complited} 
        />
      ))}
    </div>
  );
};

export default TaskList;
