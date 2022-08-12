import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "How does traditional WordPress render HTML?",
      options: [
        { id: 0, text: "It is Server Side Rendered", isCorrect: true },
        { id: 1, text: "Client Side", isCorrect: false },
        {
          id: 2,
          text: "It does not render HTML",
          isCorrect: false,
        },
        {
          id: 3,
          text: "It is Statically Pre-Built",
          isCorrect: false,
        },
      ],
    },
    {
      text: "How is Headless WP rendered on the browser?",
      options: [
        {
          id: 0,
          text: "The beauty is you have options on how you render!",
          isCorrect: true,
        },
        { id: 1, text: "On the server", isCorrect: false },
        { id: 2, text: "Only on the client", isCorrect: false },
        { id: 3, text: "What the hell is rendering?", isCorrect: false },
      ],
    },
    {
      text: "Why use Headless over Traditional?",
      options: [
        { id: 0, text: "Cuz it is the new hotness", isCorrect: false },
        { id: 1, text: "Cuz it sounds cooler", isCorrect: false },
        {
          id: 2,
          text: "It has better perceived performance and by default is more secure",
          isCorrect: true,
        },
        { id: 3, text: "No- Headless sucks, do not use it", isCorrect: false },
      ],
    },
    {
      text: "What is a CDN?",
      options: [
        {
          id: 0,
          text: "A news channel",
          isCorrect: false,
        },
        {
          id: 1,
          text: "Content Delivery Network, an edge layer that allows you to serve your site to users closer to their location.",
          isCorrect: true,
        },
        {
          id: 2,
          text: "A network of servers across the globe that stores data.",
          isCorrect: true,
        },
        { id: 3, text: "Computer Density Network", isCorrect: false },
      ],
    },
    {
      text: "What does Atlas provide?",
      options: [
        { id: 0, text: "Headless frontend CI/CD", isCorrect: false },
        {
          id: 1,
          text: "A WP server, a Node Host, and a Global CDN.  All in one platform.",
          isCorrect: true,
        },
        { id: 2, text: "Enterprise grade security", isCorrect: false },
        {
          id: 3,
          text: "Fast sites out of the box",
          isCorrect: false,
        },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect) => {
    // Increment the score
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      {/* 1. Header  */}
      <h1>Fran's Headless WP Quiz 🤓</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results Are Here</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        /* 5. Question Card  */
        <div className="question-card">
          {/* Current Question  */}
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          {/* List of possible answers  */}
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
