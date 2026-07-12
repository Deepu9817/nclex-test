"use client";

export default function QuestionNavigator({
  questions,
  currentQuestionIndex,
  answers,
  onSelectQuestion,
  disabled,
}) {
  const totalQuestions = questions.length;

  const getButtonStyle = (number) => {
    if (number === currentQuestionIndex + 1)
      return "bg-[#1D4ED8] text-white border-[#1D4ED8]";

    if (answers[questions[number - 1].id] !== undefined)
      return "bg-[#0CC84A] text-white border-[#0CC84A]";

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
          {currentQuestionIndex + 1}/{totalQuestions}
        </span>
      </div>

      {/* Questions */}
      <div className="flex-1 overflow-y-auto pr-1">
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {questions.map((question, index) => {
            const number = index + 1;

            return (
              <button
                key={question.id}
                type="button"
                onClick={() => onSelectQuestion(index)}
                disabled={disabled}
                className={`w-7 h-7 rounded-lg border text-xs font-semibold transition disabled:cursor-not-allowed ${getButtonStyle(
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
