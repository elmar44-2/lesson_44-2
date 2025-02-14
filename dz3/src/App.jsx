import React from 'react';
import TaskList from './TaskList';

const App = () => {
  const tasks = [
    { task: 'Выучить React', date: '10.01.2025', complited: false },
    { task: 'Сделать домашку по JS', date: '11.01.2025', complited: true },
    { task: 'Купить продукты', date: '12.01.2025', complited: false },
    { task: 'Погулять с собакой', date: '13.01.2025', complited: true },
  ];

  return (
    <div style={{ padding: '20px' }}>
      <h1>Список задач</h1>
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
