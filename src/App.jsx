import React from 'react';
import Quiz from './Quiz';

function App() {
  const question = "Какая столица Франции?";
  const options = ["Берлин", "Мадрид", "Париж", "Рим"];
  const correctAnswer = "Париж";

  return (
    <div className="App">
      <Quiz question={question} options={options} correctAnswer={correctAnswer} />
    </div>
  );
}

export default App;
