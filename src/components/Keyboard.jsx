const Keyboard = ({ currentWord, word, handleWord, isGameOver }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const keyboardButtons = alphabet.split("").map((letter) => {
    const isGuessed = word.includes(letter);

    const bgColor = isGuessed
      ? currentWord.includes(letter)
        ? "bg-green-400"
        : "bg-red-500"
      : "bg-yellow-400 hover:bg-yellow-500";

    return (
      <button
        key={letter}
        onClick={() => handleWord(letter)}
        disabled={isGameOver || isGuessed} // ✅ IMPORTANT LINE
        className={`w-10 h-10 text-black font-bold rounded-md shadow 
        ${bgColor} 
        ${isGameOver ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {letter}
      </button>
    );
  });

  return (
    <div className="flex flex-wrap justify-center gap-2 w-full max-w-xl mx-auto mt-8">
      {keyboardButtons}
    </div>
  );
};

export default Keyboard;
