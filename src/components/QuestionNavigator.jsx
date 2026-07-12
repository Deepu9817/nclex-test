"use client";

export default function QuestionNavigator() {
  const totalQuestions = 150;
  const currentQuestion = 12;

  // Demo Status
  const answered = [1, 2, 3, 4, 7, 8, 9, 10, 15, 16, 18, 20];
  const marked = [5, 6, 14, 19];

  const getButtonStyle = (number) => {
    if (number === currentQuestion)
      return "bg-[#1D4ED8] text-white border-[#1D4ED8]";

    if (answered.includes(number))
      return "bg-[#0CC84A] text-white border-[#0CC84A]";

    if (marked.includes(number))
      return "bg-[#FFC107] text-black border-[#FFC107]";

    return "bg-white text-gray-700 border-gray-300 hover:border-[#1D4ED8]";
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-[18px] font-bold text-[#19346F]">
          Question Navigator
        </h3>

        <span className="text-sm text-gray-500">
          {currentQuestion}/{totalQuestions}
        </span>
      </div>

      {/* Questions */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {Array.from({ length: totalQuestions }).map((_, index) => {
            const number = index + 1;

            return (
              <button
                key={number}
                className={`w-7 h-7 rounded-lg border text-xs font-semibold transition ${getButtonStyle(
                  number
                )}`}
              >
                {number}
              </button>
            );
          })}
        </div>
      </div>

      
    </div>
  );
}