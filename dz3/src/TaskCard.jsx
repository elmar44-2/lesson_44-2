import React from 'react';

const TaskCard = ({ task, date, complited }) => {
  return (
    <div 
      style={{
        backgroundColor: complited ? 'lightgray' : 'white', 
        padding: '10px', 
        margin: '10px', 
        borderRadius: '5px', 
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        opacity: complited ? 0.6 : 1,
      }}
    >
      <h3>{task}</h3>
      <p>{date}</p>
      <p>Номер задачи: {Math.floor(Math.random() * 1000)}</p>
      {!complited && (
        <button 
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Done
        </button>
      )}
    </div>
  );
};

export default TaskCard;

