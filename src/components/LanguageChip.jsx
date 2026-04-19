const LanguageChips = ({ languages, wrongWordCount }) => {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8">
      {languages.map((lang, index) => {
        const isDisabled = index < wrongWordCount;

        return (
          <span
            key={lang.name}
            className={`
              ${lang.color}
              text-white text-sm px-3 py-1 rounded-md font-semibold
              ${isDisabled ? "opacity-30 line-through" : ""}
            `}
          >
            {lang.name}
          </span>
        );
      })}
    </div>
  );
};

export default LanguageChips;
