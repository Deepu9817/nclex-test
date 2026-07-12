"use client";

export default function ReviewList({ questions }) {

  const badgeStyle = (status) => {
    switch (status) {
      case "correct":
        return "bg-green-100 text-green-700";
      case "wrong":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  const badgeText = (status) => {
    switch (status) {
      case "correct":
        return "Correct";
      case "wrong":
        return "Wrong";
      default:
        return "Unattempted";
    }
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-5">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3">
        <h2 className="text-xl font-bold text-[#0B245B]">
          All Questions Review
        </h2>

        <div className="flex flex-wrap gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-green-500"></span>
            Correct
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-red-500"></span>
            Wrong
          </div>

          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded bg-yellow-400"></span>
            Unattempted
          </div>
        </div>
      </div>

      {/* Questions */}
      <div className="mt-5 space-y-5">
        {questions.map((question) => (
          <div
            key={question.id}
            className="bg-white rounded-xl shadow-sm p-5"
          >
            {/* Top */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <h3 className="font-bold text-lg text-[#0B245B]">
                Question {question.id}
              </h3>

              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold w-fit ${badgeStyle(
                  question.status
                )}`}
              >
                {badgeText(question.status)}
              </span>
            </div>

            {/* Question */}
            <p className="mt-3 text-gray-700 text-[15px] leading-7">
              {question.question}
            </p>

            {/* Options */}
            <div className="mt-4 space-y-2">
              {question.options.map((option, index) => {
                const isCorrect = index === question.correctAnswer;
                const isUser = index === question.userAnswer;

                let classes =
                  "bg-gray-50";

                if (isCorrect)
                  classes = "bg-green-50";

                if (isUser && !isCorrect)
                  classes = "bg-red-50";

                return (
                  <div
                    key={index}
                    className={`rounded-lg px-4 py-3 flex gap-3 ${classes}`}
                  >
                    <span className="font-semibold text-[#0B245B] min-w-[22px]">
                      {String.fromCharCode(65 + index)}.
                    </span>

                    <span className="text-[15px] text-gray-700">
                      {option}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Answers */}
            <div className="grid md:grid-cols-2 gap-4 mt-5">
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="text-blue-700 font-semibold text-sm">
                  Your Answer
                </p>

                <p className="mt-1 text-[15px]">
                  {question.userAnswer !== undefined
                    ? `${String.fromCharCode(
                        65 + question.userAnswer
                      )}. ${question.options[question.userAnswer]}`
                    : "Not Answered"}
                </p>
              </div>

              <div className="bg-green-50 rounded-lg p-4">
                <p className="text-green-700 font-semibold text-sm">
                  Correct Answer
                </p>

                <p className="mt-1 text-[15px]">
                  {String.fromCharCode(
                    65 + question.correctAnswer
                  )}
                  .{" "}
                  {question.options[
                    question.correctAnswer
                  ]}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
