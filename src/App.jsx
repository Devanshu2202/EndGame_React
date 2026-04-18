import { useState } from "react";
import Header from "./components/Header";

function App() {
  const [currentWord] = useState("REACT");
  const [guessedLetters, setGuessedLetters] = useState([]);

  return (
    <div>
      <Header />
    </div>
  );
}

export default App;
