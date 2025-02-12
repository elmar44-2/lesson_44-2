import React, { useState } from 'react';

const ToDoApp = () => {
  const [tasks, setTasks] = useState([
    { task: "Выучить React", date: "10.01.2025", complited: false },
    { task: "Купить продукты", date: "12.01.2025", complited: true },
    { task: "Сделать домашку", date: "14.01.2025", complited: false }
  ]);

  const markAsDone = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].complited = true;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>ToDo List</h1> {}
      <div className="tasks">
        {tasks.map((task, index) => (
          <div
            key={index}
            className={`task-card ${task.complited ? 'completed' : ''}`}
            style={{ backgroundColor: task.complited ? '#f0f0f0' : '#fff' }}
          >
            <h3>{task.task}</h3>
            <p>{task.date}</p>
            <p>Номер задачи: {index + 1}</p>
            {!task.complited && (
              <button onClick={() => markAsDone(index)}>Done</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToDoApp;
