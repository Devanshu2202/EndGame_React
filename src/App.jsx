import { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageChips from "./components/LanguageChip";
import WordDisplay from "./components/WordDisplay";
import Confetti from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState("PYTHON");
  const [word, setWord] = useState([]);

  const wrongWordCount = word.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => word.includes(letter));

  const isGameLost = wrongWordCount >= 9;

  const isGameOver = isGameWon || isGameLost;

  function handleWord(letter) {
    setWord((prev) => (prev.includes(letter) ? prev : [...prev, letter]));
  }

  const languages = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JAVASCRIPT", color: "bg-yellow-400 text-black" },
    { name: "REACT", color: "bg-cyan-400 text-black" },
    { name: "TYPESCRIPT", color: "bg-blue-600" },
    { name: "NODE", color: "bg-green-500" },
    { name: "PYTHON", color: "bg-indigo-500" },
    { name: "RUBY", color: "bg-red-500" },
  ];

  function getNewWord() {
    const random = languages[Math.floor(Math.random() * languages.length)];

    setCurrentWord(random.name);
    setWord([]);
  }

  return (
    <div className="min-h-screen bg-[#262626] text-white flex flex-col items-center p-8">
      {/* 🎉 Confetti */}
      {isGameWon && <Confetti />}

      {/* ✅ Center Container */}
      <div className="w-full max-w-xl flex flex-col items-center">
        <Header />

        <LanguageChips wrongWordCount={wrongWordCount} languages={languages} />

        {/* 🎯 Result Banner */}
        {isGameOver && (
          <div
            className={`mt-6 px-6 py-4 rounded-lg text-center font-semibold text-lg w-full max-w-xl mx-auto
    ${isGameWon ? "bg-green-500 text-white" : "bg-red-500 text-white"}`}
          >
            {isGameWon ? (
              <>
                🎉 You win! <br />
                <span className="text-sm font-normal">Well done!</span>
              </>
            ) : (
              <>
                💀 Game over! <br />
                <span className="text-sm font-normal">
                  You lose! Better start learning Assembly 😢
                </span>
              </>
            )}
          </div>
        )}

        <WordDisplay
          currentWord={currentWord}
          word={word}
          isGameLost={isGameLost}
        />

        <Keyboard
          currentWord={currentWord}
          word={word}
          handleWord={handleWord}
          isGameOver={isGameOver}
        />

        {/* 🔁 New Game Button */}
        {isGameOver && (
          <button
            onClick={getNewWord}
            className="mt-6 bg-blue-500 px-6 py-2 rounded-md hover:bg-blue-600 transition"
          >
            New Game
          </button>
        )}
      </div>
    </div>
  );
}

export default App;
