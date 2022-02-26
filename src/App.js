import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "Does Netlify Support Terraform?",
      options: [
        { id: 0, text: "WTH is Terraform?", isCorrect: false },
        { id: 1, text: "We do not support Terraform", isCorrect: true },
        {
          id: 2,
          text: "You could have an API to your Terraform Codebase",
          isCorrect: false,
        },
        {
          id: 3,
          text: "You better take that Terraform elsewehere!",
          isCorrect: false,
        },
      ],
    },
    {
      text: "CloudFlare has more POPS.  Why should I use Netlify's Edge?",
      options: [
        {
          id: 0,
          text: "They do have more POPS, but we have enough POPS to keep you performant and up as well as our entire productivity workflow.  CloudFlare does not have that.",
          isCorrect: true,
        },
        { id: 1, text: "We have more than CloudFlare", isCorrect: false },
        { id: 2, text: "CloudFlare is still in business?", isCorrect: false },
        { id: 3, text: "POPS do not matter at all", isCorrect: false },
      ],
    },
    {
      text: "How does Netlify Cache at the Edge?",
      options: [
        { id: 0, text: "Cache Rules Everything Around Me", isCorrect: false },
        { id: 1, text: "We Cache like Normal", isCorrect: false },
        {
          id: 2,
          text: "Our CDN does a cache invalidation system, supporting atomic deploys and rollbacks",
          isCorrect: true,
        },
        { id: 3, text: "We do not use Cache", isCorrect: false },
      ],
    },
    {
      text: "How Does Netlify's Infrastructure Stay Secure?",
      options: [
        {
          id: 0,
          text: "You have to bring your own security",
          isCorrect: false,
        },
        {
          id: 1,
          text: "We use top-tier cloud providers who regularly undergo extensive audits of security and certs",
          isCorrect: true,
        },
        {
          id: 2,
          text: "Our build infra and functions are ephemeral, using temp containers with no idle environments to exploit",
          isCorrect: true,
        },
        { id: 3, text: "What? SECURRRRTYY", isCorrect: false },
      ],
    },
    {
      text: "Can I load test on Netlify?",
      options: [
        { id: 0, text: "Yes do it all you want.", isCorrect: false },
        {
          id: 1,
          text: "You would need to be an Enterprise customer with special permissions and criteria",
          isCorrect: true,
        },
        { id: 2, text: "No, no customer can do load test.", isCorrect: false },
        {
          id: 3,
          text: "You can load test until our servers blow up",
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
      <h1>Fran's Netlify SE Quiz 🤓</h1>

      {/* 2. Current Score  */}
      <h2>Score: {score}</h2>

      {/* 3. Show results or show the question game  */}
      {showResults ? (
        /* 4. Final Results */
        <div className="final-results">
          <h1>Final Results</h1>
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
