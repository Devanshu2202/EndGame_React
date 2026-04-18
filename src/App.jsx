import { useState } from "react";
import Header from "./components/Header";
import WordDisplay from "./components/WordDisplay";

function App() {
  const [currentWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <div>
      <Header />
      <WordDisplay currentWord={currentWord} guessedLetters={guessedLetters} />
    </div>
  );
}

export default App;
