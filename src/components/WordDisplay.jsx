const WordDisplay = ({ currentWord, word, isGameLost }) => {
  return (
    <div className="flex gap-2 mb-10 mt-6">
      {currentWord.split("").map((letter, index) => {
        const isGuessed = word.includes(letter);

        return (
          <div
            key={index}
            className={`w-12 h-12 border-b-4 border-gray-500 flex items-center justify-center font-bold text-xl
        ${
          isGuessed
            ? "bg-amber-300 text-black"
            : isGameLost
              ? "bg-red-500 text-white" // ✅ red when lost
              : "bg-amber-300"
        }`}
          >
            {isGuessed || isGameLost ? letter : ""}
          </div>
        );
      })}
    </div>
  );
};

export default WordDisplay;
