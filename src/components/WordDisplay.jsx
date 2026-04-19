const WordDisplay = ({ currentWord, word }) => {
  return (
    <div className="flex gap-2 mb-10">
      {currentWord.split("").map((letter, index) => (
        <div
          key={index}
          className="w-12 h-12 border-b-4 border-gray-500 bg-amber-300 flex items-center justify-center font-bold text-xl"
        >
          {word.includes(letter) ? letter : ""}
        </div>
      ))}
    </div>
  );
};

export default WordDisplay;
