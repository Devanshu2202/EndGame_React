import { useState } from "react";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import LanguageChips from "./components/LanguageChip";
import WordDisplay from "./components/WordDisplay";
import Confetti from "react-confetti";

function App() {
  const [currentWord, setCurrentWord] = useState("PYTHON");

  console.log("currentWord", currentWord);
  const [word, setWord] = useState([]);

  const wrongWordCount = word.filter(
    (letter) => !currentWord.includes(letter),
  ).length;

  const isGameWon = currentWord
    .split("")
    .every((letter) => word.includes(letter));

  console.log("isGameWon", isGameWon);

  const isGameLost = wrongWordCount >= 9;

  console.log("isGameLost", isGameLost);

  const isGameOver = isGameWon || isGameLost;

  console.log("isGameOver", isGameOver);

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

    setCurrentWord(random.name); // take name as word
    setWord([]); // reset guesses
  }

  return (
    <div className="min-h-screen bg-[#262626] text-white flex flex-col items-center p-8">
      {isGameWon && <Confetti />}
      <Header />

      <LanguageChips wrongWordCount={wrongWordCount} languages={languages} />

      <WordDisplay currentWord={currentWord} word={word} />

      <Keyboard
        currentWord={currentWord}
        word={word}
        handleWord={handleWord}
        isGameOver={isGameOver}
      />

      {isGameWon && <h2 className="text-green-400 mt-4">You Win 🎉</h2>}
      {isGameLost && <h2 className="text-red-400 mt-4">Game Over 💀</h2>}

      {isGameOver && (
        <button
          onClick={getNewWord}
          className="mt-4 bg-blue-500 px-4 py-2 rounded"
        >
          New Game
        </button>
      )}
    </div>
  );
}

export default App;
