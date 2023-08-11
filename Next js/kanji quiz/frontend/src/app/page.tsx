"use client";

import { useState, useEffect } from "react";

interface QuestionOption {
  kanji: string;
  options: [string, string][];
  correctIdx: number;
  score: number;
  lives: number;
  highScore: number;
}

const IndexPage: React.FC = () => {
  const [question, setQuestion] = useState<QuestionOption | null>(null);

  useEffect(() => {
    fetchQuestion();
  }, []);

  const fetchQuestion = async () => {
    try {
      const response = await fetch("http://localhost:8080/getQuestion");
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error("Error fetching question:", error);
    }
  };

  const checkAnswer = async (answerIdx: number) => {
    try {
      const response = await fetch("http://localhost:8080/checkAnswer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ answerIdx }),
      });

      const data = await response.json();

      if (data.status === "question") {
        setQuestion(data);
      } else if (data.status === "game_over") {
        // Display game over logic here
        alert(
          `Game Over!\nScore: ${data.score}\nHigh Score: ${data.highScore}`
        );
        resetGame();
      }
    } catch (error) {
      console.error("Error checking answer:", error);
    }
  };

  const resetGame = async () => {
    try {
      const response = await fetch("http://localhost:8080/resetGame");
      const data = await response.json();
      setQuestion(data);
    } catch (error) {
      console.error("Error resetting game:", error);
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg shadow-md">
        {question ? (
          <div>
            <h1 className="text-2xl font-semibold mb-4">{question.kanji}</h1>
            {question.options ? (
              <div className="space-y-4">
                {question.options.map((option, idx) => (
                  <button
                    key={idx}
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => checkAnswer(idx)}
                  >
                    {option[0]}
                  </button>
                ))}
              </div>
            ) : (
              <p>No options available</p>
            )}
            <p className="mt-4">Score: {question.score}</p>
            <p>Lives: {question.lives}</p>
            <p>High Score: {question.highScore}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
        <button
          className="mt-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded"
          onClick={resetGame}
        >
          Reset Game
        </button>
      </div>
    </div>
  );
};

export default IndexPage;
