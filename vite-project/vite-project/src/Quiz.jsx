import React, { useState } from 'react';

const Quiz = ({ question, options, correctAnswer }) => {
  const [message, setMessage] = useState('');

  const handleAnswerClick = (answer) => {
    if (answer === correctAnswer) {
      setMessage('ПРАВИЛЬНО');
    } else {
      setMessage('');
    }
  };

  return (
    <div className="quiz-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <button 
            key={index} 
            onClick={() => handleAnswerClick(option)}
            className="option-button"
          >
            {option}
          </button>
        ))}
      </div>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default Quiz;
