"use client";

import ResultSummary from "../components/ResultSummary";
import ReviewList from "../components/ReviewList";
import mockTest from "../data/questions";
import { useTestSession } from "@/context/TestSessionContext";

export default function Result() {
  const { submittedAnswers } = useTestSession();
  const answers = submittedAnswers ?? {};
  const questions = mockTest.questions.map((question) => {
    const userAnswer = answers[question.id];
    const isAnswered = userAnswer !== undefined;

    return {
      ...question,
      userAnswer,
      status: !isAnswered
        ? "unattempted"
        : userAnswer === question.correctAnswer
          ? "correct"
          : "wrong",
    };
  });

  const correctCount = questions.filter(
    (question) => question.status === "correct"
  ).length;
  const wrongCount = questions.filter(
    (question) => question.status === "wrong"
  ).length;
  const unattemptedCount = questions.length - correctCount - wrongCount;

  return (
    <main className="min-h-screen bg-[#FAFBFF] px-4 py-4 lg:px-6">
      <div className="max-w-7xl mx-auto space-y-5">

        {/* Top Summary */}
        <ResultSummary
          totalQuestions={questions.length}
          correctCount={correctCount}
          wrongCount={wrongCount}
          unattemptedCount={unattemptedCount}
        />

        {/* Review Section */}
        <ReviewList questions={questions} />

      </div>
    </main>
  );
}
