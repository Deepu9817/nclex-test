"use client";

import {
  CheckCircle2,
  CheckCircle,
  XCircle,
  MinusCircle,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ResultSummary({
  totalQuestions,
  correctCount,
  wrongCount,
  unattemptedCount,
}) {
  const score = totalQuestions
    ? Math.round((correctCount / totalQuestions) * 100)
    : 0;

  const radius = 70;
  const circumference = 2 * Math.PI * radius;
  const progress = circumference - (score / 100) * circumference;
  const router = useRouter();

  const cards = [
    {
      icon: CheckCircle,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
      value: correctCount,
      title: "Questions Correct",
      subtitle: `${correctCount} out of ${totalQuestions}`,
      percentage: `(${score}%)`,
      valueColor: "text-green-600",
    },
    {
      icon: XCircle,
      iconBg: "bg-red-100",
      iconColor: "text-red-500",
      value: wrongCount,
      title: "Questions Wrong",
      subtitle: `${wrongCount} out of ${totalQuestions}`,
      percentage: `(${totalQuestions ? Math.round((wrongCount / totalQuestions) * 100) : 0}%)`,
      valueColor: "text-red-500",
    },
    {
      icon: MinusCircle,
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-500",
      value: unattemptedCount,
      title: "Questions Unattempted",
      subtitle: `${unattemptedCount} out of ${totalQuestions}`,
      percentage: `(${totalQuestions ? Math.round((unattemptedCount / totalQuestions) * 100) : 0}%)`,
      valueColor: "text-yellow-500",
    },
  ];

  return (
    <section className="bg-white rounded-2xl shadow-md p-5">
      {/* Header */}
      <div className="flex flex-col items-center text-center">
        <CheckCircle2
          size={36}
          className="text-green-500"
          strokeWidth={1.8}
        />

        <h2 className="mt-2 text-2xl font-bold text-[#0B245B]">
          Test Submitted Successfully!
        </h2>

        <p className="mt-1 text-sm text-gray-600">
          Thank you for completing the NCLEX Test.
          <br />
          Here is your performance summary.
        </p>
      </div>

      {/* Cards */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {/* Score */}
        <div className="rounded-xl bg-white shadow-sm p-4 flex justify-center items-center">
          <div className="relative w-48 h-48">
            <svg
              width="180"
              height="180"
              className="-rotate-90"
            >
              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="#E5E7EB"
                strokeWidth="8"
                fill="none"
              />

              <circle
                cx="90"
                cy="90"
                r={radius}
                stroke="#22C55E"
                strokeWidth="8"
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={progress}
              />
            </svg>

            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <span className="text-4xl font-bold text-green-600">
                {score}%
              </span>

              <span className="text-md font-semibold text-gray-700">
                Total Score
              </span>
            </div>
          </div>
        </div>

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="rounded-xl bg-white shadow-sm p-4 flex flex-col items-center justify-center text-center"
            >
              <div
                className={`w-12 h-12 rounded-full ${card.iconBg} flex items-center justify-center`}
              >
                <Icon
                  size={26}
                  className={card.iconColor}
                />
              </div>

              <h3
                className={`mt-3 text-3xl font-bold ${card.valueColor}`}
              >
                {card.value}
              </h3>

              <p className="mt-1 text-base font-semibold">
                {card.title}
              </p>

              <p className="text-sm text-gray-500 mt-1">
                {card.subtitle}
              </p>

              <span
                className={`mt-1 font-semibold ${card.valueColor}`}
              >
                {card.percentage}
              </span>
            </div>
          );
        })}
      </div>
        <Link href="/" className="flex justify-center mt-5 ">
            <button onClick={() => router.push("/")} className="cursor-pointer px-4 py-2 bg-blue-500 text-white rounded-xl font-semibold hover:bg-blue-800 transition duration-200 shadow-md">
                 ← Back to Home Page
            </button>
        </Link>
      
    </section>
  );
}
