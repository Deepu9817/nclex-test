"use client";

import { useState } from "react";
import QuestionCard from "../components/QuestionCard";
import QuestionStatus from "../components/QuestionStatus";
import QuestionNavigator from "../components/QuestionNavigator";
import BottomActions from "../components/BottomActions";
import mockTest from "../data/questions";

export default function PracticePage() {
  const { questions } = mockTest;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [savedAnswers, setSavedAnswers] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const handleAnswerChange = (answerIndex) => {
    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: answerIndex,
    }));
    setSubmissionMessage("");
  };

  const handleSaveAndNext = () => {
    const selectedAnswer = selectedAnswers[currentQuestion.id];

    if (selectedAnswer !== undefined) {
      setSavedAnswers((currentAnswers) => ({
        ...currentAnswers,
        [currentQuestion.id]: selectedAnswer,
      }));
    }

    setCurrentQuestionIndex((index) => index + 1);
  };

  const handleClearSelection = () => {
    const questionId = currentQuestion.id;

    setSelectedAnswers((currentAnswers) => {
      const { [questionId]: removedAnswer, ...remainingAnswers } = currentAnswers;
      return remainingAnswers;
    });
    setSavedAnswers((currentAnswers) => {
      const { [questionId]: removedAnswer, ...remainingAnswers } = currentAnswers;
      return remainingAnswers;
    });
    setSubmissionMessage("");
  };

  const handleSubmit = () => {
    const answeredCount = Object.keys(savedAnswers).length;
    setSubmissionMessage(
      `You have answered ${answeredCount} of ${totalQuestions} questions.`
    );
  };

  if (totalQuestions === 0) {
    return <main className="p-6">No questions are available.</main>;
  }

  return (
    <main className="bg-[#FAFBFF] h-[calc(100vh-105px)] p-3 flex flex-col gap-3 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-3 overflow-hidden">
        {/* Question */}
        <section className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
          <QuestionCard
            question={currentQuestion}
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={totalQuestions}
            selectedAnswer={selectedAnswers[currentQuestion.id]}
            onAnswerChange={handleAnswerChange}
          />
        </section>

        {/* Sidebar */}
        <aside className="bg-white border border-gray-300 rounded-2xl shadow-sm p-4 flex flex-col overflow-hidden">
          <QuestionStatus />

          <div className="border-t mt-4 pt-4 flex-1 overflow-y-auto">
            <QuestionNavigator
              questions={questions}
              currentQuestionIndex={currentQuestionIndex}
              answers={savedAnswers}
              onSelectQuestion={setCurrentQuestionIndex}
            />
          </div>
        </aside>
      </div>

      {/* Footer */}
      {submissionMessage && (
        <p className="text-center text-sm font-medium text-[#19346F]">
          {submissionMessage}
        </p>
      )}

      <BottomActions
        currentQuestionIndex={currentQuestionIndex}
        totalQuestions={totalQuestions}
        onPrevious={() => setCurrentQuestionIndex((index) => index - 1)}
        onNext={() => setCurrentQuestionIndex((index) => index + 1)}
        onSaveAndNext={handleSaveAndNext}
        onClearSelection={handleClearSelection}
        hasSelection={
          selectedAnswers[currentQuestion.id] !== undefined ||
          savedAnswers[currentQuestion.id] !== undefined
        }
        onSubmit={handleSubmit}
      />
    </main>
  );
}
