"use client";

import {
  ChevronLeft,
  ChevronRight,
  Eraser,
  Save,
  Send,
} from "lucide-react";

export default function BottomActions({
  currentQuestionIndex,
  totalQuestions,
  onPrevious,
  onNext,
  onSaveAndNext,
  onClearSelection,
  hasSelection,
  onSubmit,
}) {
  const isFirstQuestion = currentQuestionIndex === 0;
  const isLastQuestion = currentQuestionIndex === totalQuestions - 1;

  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">

          {/* Previous */}
          <button
            type="button"
            onClick={onPrevious}
            disabled={isFirstQuestion}
            className="flex items-center gap-2  bg-gray-200 hover:bg-gray-400 text-black transition px-4 py-2 rounded-xl font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft size={14} />
            PREV. QUES.
          </button>

          {/* Next */}
          <button
            type="button"
            onClick={onNext}
            disabled={isLastQuestion}
            className="flex items-center bg-blue-500 hover:bg-blue-800 text-white transition px-4 py-2 rounded-xl font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            NEXT QUES.
            <ChevronRight size={14} />
          </button>

          {/* Save */}
          <button
            type="button"
            onClick={onSaveAndNext}
            disabled={isLastQuestion}
            className="flex items-center gap-2 bg-green-500 text-white hover:bg-green-600 transition px-4 py-2 rounded-xl font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Save size={14} />
            SAVE &amp; NEXT
          </button>

          <button
            type="button"
            onClick={onClearSelection}
            disabled={!hasSelection}
            className="flex items-center gap-2 border-2 border-gray-300 hover:bg-gray-100 text-gray-700 transition px-4 py-2 rounded-xl font-semibold text-sm disabled:cursor-not-allowed disabled:opacity-50"
          >
            <Eraser size={14} />
            CLEAR SELECTION
          </button>

        </div>

        {/* Submit */}
        <button
          type="button"
          onClick={onSubmit}
          className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white transition px-6 py-2.5 rounded-xl font-semibold text-[15px] w-full md:w-auto"
        >
          <Send size={17} />
          SUBMIT TEST
        </button>

      </div>
    </div>
  );
}
