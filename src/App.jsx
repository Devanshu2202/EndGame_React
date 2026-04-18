import { useState } from "react";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";
import Keyboard from "./components/Keyboard";

function App() {
  const [currentWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);

  const handleGuess = (letter) => {
    setGuessedLetters((prev) =>
      prev.includes(letter) ? prev : [...prev, letter],
    );
  };

  return (
    <div>
      <Header />
      <WordDisplay currentWord={currentWord} guessedLetters={guessedLetters} />
      <Keyboard handleGuess={handleGuess} />
    </div>
  );
}

export default App;
