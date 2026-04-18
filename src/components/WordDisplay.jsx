function WordDisplay({ currentWord, guessedLetters }) {
  return (
    <div>
      {currentWord.split("").map((letter, index) => (
        <span key={index}>
          {guessedLetters.includes(letter) ? letter : "_"}
        </span>
      ))}
    </div>
  );
}
export default WordDisplay;
