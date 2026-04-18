function Keyboard({ handleGuess }) {
  const alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div>
      {alphabets.map((letter) => (
        <button key={letter} onClick={() => handleGuess(letter)}>
          {letter}
        </button>
      ))}
    </div>
  );
}
export default Keyboard;
