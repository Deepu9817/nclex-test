"use client";

const optionLabels = ["A", "B", "C", "D"];

export default function QuestionCard({
  question,
  questionNumber,
  totalQuestions,
  selectedAnswer,
  onAnswerChange,
}) {
  return (
    <div className="h-full flex flex-col p-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-[20px] font-bold text-[#111827]">
          Question {questionNumber} of {totalQuestions}
        </h2>
      </div>

      {/* Question */}
      <div className="mt-7 text-lg text-[#1F2937]">
        <p>{question.question}</p>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Options */}
      <div className="flex-1 flex flex-col justify-start gap-8">
        {question.options.map((option, index) => {
          const optionLabel = optionLabels[index] ?? String(index + 1);

          return (
            <button
              key={optionLabel}
              type="button"
              onClick={() => onAnswerChange(index)}
              aria-pressed={selectedAnswer === index}
              className="flex items-center gap-5 text-left group"
            >
              {/* Radio */}
              <div
                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition
              ${
                selectedAnswer === index
                  ? "border-blue-700"
                  : "border-gray-500 group-hover:border-blue-700"
              }`}
              >
                {selectedAnswer === index && (
                  <div className="w-4 h-4 rounded-full bg-blue-700" />
                )}
              </div>

              {/* Option */}
              <div className="flex items-center gap-2">
                <span className="text-blue-700 font-bold text-md min-w-8">
                  {optionLabel}.
                </span>

                <span className="text-md text-gray-900 leading-8">
                  {option}
                </span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
