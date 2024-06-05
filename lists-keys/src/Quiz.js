import React, { useState } from 'react';

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const questions = [
    { question: 'What is 2 + 2?', answer: '4' },
    // ... other questions
  ];

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  return (
    <div>
      <h2>{questions[currentQuestion].question}</h2>
      <button onClick={() => handleAnswer('3')}>3</button>
      <button onClick={() => handleAnswer('4')}>4</button>
      {/* ... other answer buttons */}
    </div>
  );
}
export default Quiz