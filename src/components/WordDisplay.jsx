function WordDisplay({ currentWord, guessedLetters }) {
  return (
    <div className="flex gap-2 mt-8">
      {currentWord.split("").map((letter, index) => (
        <span
          key={index}
          className="w-12 h-12 flex items-center justify-center bg-yellow-400 text-black text-xl font-bold rounded"
        >
          {guessedLetters.includes(letter) ? letter : ""}
        </span>
      ))}
    </div>
  );
}
export default WordDisplay;
