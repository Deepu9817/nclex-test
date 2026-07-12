"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import QuestionCard from "../components/QuestionCard";
import QuestionStatus from "../components/QuestionStatus";
import QuestionNavigator from "../components/QuestionNavigator";
import BottomActions from "../components/BottomActions";
import mockTest from "../data/questions";
import { useTestSession } from "@/context/TestSessionContext";

export default function Practice() {
  const router = useRouter();
  const { questions } = mockTest;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [savedAnswers, setSavedAnswers] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const hasAutoSubmitted = useRef(false);
  const { isExpired, submitTest } = useTestSession();

  const currentQuestion = questions[currentQuestionIndex];
  const totalQuestions = questions.length;

  const isTestComplete = isExpired || isSubmitted;

  const completeTest = () => {
    const answersToSubmit = { ...savedAnswers, ...selectedAnswers };
    const answeredCount = Object.keys(answersToSubmit).length;

    submitTest(answersToSubmit);
    setIsSubmitted(true);
    setSubmissionMessage(
      `Your test was submitted with ${answeredCount} of ${totalQuestions} answers.`
    );
    router.push("/result");
  };

  useEffect(() => {
    if (!isExpired || hasAutoSubmitted.current) {
      return;
    }

    const answersToSubmit = { ...savedAnswers, ...selectedAnswers };
    hasAutoSubmitted.current = true;
    submitTest(answersToSubmit);
    router.push("/result");
  }, [isExpired, router, savedAnswers, selectedAnswers, submitTest]);

  const displayedSubmissionMessage = isExpired
    ? `Time is up. Your test was automatically submitted with ${Object.keys(savedAnswers).length} of ${totalQuestions} saved answers.`
    : submissionMessage;

  const handleAnswerChange = (answerIndex) => {
    if (isTestComplete) return;

    setSelectedAnswers((currentAnswers) => ({
      ...currentAnswers,
      [currentQuestion.id]: answerIndex,
    }));
    setSubmissionMessage("");
  };

  const handleSaveAndNext = () => {
    if (isTestComplete) return;

    const selectedAnswer = selectedAnswers[currentQuestion.id];

    if (selectedAnswer !== undefined) {
      setSavedAnswers((currentAnswers) => ({
        ...currentAnswers,
        [currentQuestion.id]: selectedAnswer,
      }));
    }

    if (currentQuestionIndex < totalQuestions - 1) {
      setCurrentQuestionIndex((index) => index + 1);
    }
  };

  const handleClearSelection = () => {
    if (isTestComplete) return;

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

  const handleSubmit = () => completeTest();

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
            selectedAnswer={
              selectedAnswers[currentQuestion.id] ?? savedAnswers[currentQuestion.id]
            }
            onAnswerChange={handleAnswerChange}
            disabled={isTestComplete}
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
              disabled={isTestComplete}
            />
          </div>
        </aside>
      </div>

      {/* Footer */}
      {displayedSubmissionMessage && (
        <p className="text-center text-sm font-medium text-[#19346F]">
          {displayedSubmissionMessage}
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
        isTestComplete={isTestComplete}
      />
    </main>
  );
}
