import React, { useState } from 'react';
import '../Quize.css';

function Quiz() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A JavaScript library for building user interfaces",
        "A framework for building mobile apps",
        "A database management system",
        "A programming language"
      ],
      correctAnswer: "A JavaScript library for building user interfaces"
    },
    {
      question: "What is JSX in React?",
      options: [
        "A templating engine for React",
        "A syntax extension for JavaScript",
        "A state management library",
        "A CSS preprocessor"
      ],
      correctAnswer: "A syntax extension for JavaScript"
    },
    {
      question: "Which hook is used to manage state in functional components?",
      options: ["useState", "useEffect", "useContext", "useReducer"],
      correctAnswer: "useState"
    },
    {
      question: "What does JSX stand for?",
      options: [
        "JavaScript XML",
        "JavaScript Extended",
        "JavaScript X",
        "JavaScript Extern"
      ],
      correctAnswer: "JavaScript XML"
    },
    {
      question: "What is a component in React?",
      options: [
        "A small unit of code",
        "A function that returns HTML",
        "A state management tool",
        "A built-in React API"
      ],
      correctAnswer: "A function that returns HTML"
    },
    {
      question: "Which of the following is a method of React's component lifecycle?",
      options: [
        "render()",
        "update()",
        "componentWillUpdate()",
        "all of the above"
      ],
      correctAnswer: "all of the above"
    },
    {
      question: "What is the purpose of the useEffect hook?",
      options: [
        "To handle side effects in a component",
        "To manage component state",
        "To render JSX",
        "To bind event handlers"
      ],
      correctAnswer: "To handle side effects in a component"
    },
    {
      question: "What does `props` stand for in React?",
      options: [
        "Properties",
        "Property",
        "Protocol",
        "Props"
      ],
      correctAnswer: "Properties"
    },
    {
      question: "Which method is used to update state in React?",
      options: [
        "this.setState()",
        "this.updateState()",
        "this.modifyState()",
        "this.setStateProps()"
      ],
      correctAnswer: "this.setState()"
    },
    {
      question: "Which of the following is not a valid hook in React?",
      options: [
        "useState",
        "useEffect",
        "useContext",
        "useRender"
      ],
      correctAnswer: "useRender"
    }
  ];


  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    setSelectedOption(''); // Clear selection for the next question
    
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div className='outer-box'>
    <div className="quiz-container">
      {showScore ? (
        <div className="score-section">
          <h2>Your Score: {score} / {questions.length}</h2>
        </div>
      ) : (
        <div className="question-section">
          <h2>{questions[currentQuestion].question}</h2>
          <form>
            {questions[currentQuestion].options.map((option, index) => (
              <div key={index} className="oprtion">
                <label>
                  <input
                    type="checkbox"
                    checked={selectedOption === option}
                    onChange={() => handleOptionChange(option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </form>
          <button onClick={handleNextQuestion} disabled={!selectedOption}>
            {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      )}
    </div>
    </div>
  );
}

export default Quiz;
