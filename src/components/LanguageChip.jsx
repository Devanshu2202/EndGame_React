import LanguageChip from "./LanguageChip";

const LanguageChips = ({ wrongWordCount }) => {
  const languages = [
    { name: "HTML", color: "bg-orange-500" },
    { name: "CSS", color: "bg-blue-500" },
    { name: "JavaScript", color: "bg-yellow-400 text-black" },
    { name: "React", color: "bg-cyan-400 text-black" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Python", color: "bg-indigo-500" },
    { name: "Ruby", color: "bg-red-500" },
    { name: "Assembly", color: "bg-gray-700" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-md mx-auto mb-8">
      {languages.map((lang, index) => {
        const isDisabled = index < wrongWordCount;

        return (
          <LanguageChip
            key={lang.name}
            name={lang.name}
            color={lang.color}
            isDisabled={isDisabled}
          />
        );
      })}
    </div>
  );
};

export default LanguageChips;
