import { useState } from "react";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";
import LanguageChips from "./components/LanguageChip";

function App() {
  const [currentWord, setCurrentWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);

  // Handle letter click
  const handleGuess = (letter) => {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  };

  // Wrong guesses count
  const wrongGuesses = guessedLetters.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const maxWrong = 5;

  // Win condition
  const isWinner = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  // Game over condition
  const isGameOver = wrongGuesses >= maxWrong || isWinner;

  // Restart game
  const restartGame = () => {
    setGuessedLetters([]);
    setCurrentWord("REACT"); // later we can randomize this
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center">
      <Header />

      <LanguageChips wrongWordCount={wrongGuesses} />

      <WordDisplay currentWord={currentWord} guessedLetters={guessedLetters} />

      <Keyboard handleGuess={handleGuess} isGameOver={isGameOver} />

      {/* Wrong guess count */}
      <p className="mt-4 text-gray-700">
        Wrong Guesses: {wrongGuesses} / {maxWrong}
      </p>

      {/* Game messages */}
      {isGameOver && !isWinner && (
        <h2 className="mt-4 text-red-500 text-2xl">Game Over 😢</h2>
      )}

      {isWinner && <h2 className="mt-4 text-green-600 text-2xl">You Win 🎉</h2>}

      {/* Restart Button */}
      {isGameOver && (
        <button
          onClick={restartGame}
          className="mt-6 px-4 py-2 bg-black text-white rounded hover:bg-gray-800"
        >
          Restart Game
        </button>
      )}
    </div>
  );
}

export default App;
