"use client";
import React from "react";
import Image from "next/image";
import { Clock3, Info, ClipboardList } from "lucide-react";
import mockTest from "@/data/questions";
import { useRouter } from "next/router";

export default function HomePage() {
  const { totalTime, duration, questions } = mockTest;
  const router = useRouter();

  return (
    <main className="min-h-[calc(100vh-110px)] bg-[#FAFBFF] relative overflow-hidden flex justify-center items-center px-4 py-6">
      {/* Left Waves */}
      <div className="absolute left-0 top-40 opacity-20 hidden lg:block">
        <svg width="220" height="180">
          {[0, 1, 2, 3, 4].map((i) => (
            <path
              key={i}
              d={`M0 ${50 + i * 16} C60 ${20 + i * 16},120 ${
                80 + i * 16
              },220 ${50 + i * 16}`}
              stroke="#2563EB"
              fill="none"
            />
          ))}
        </svg>
      </div>

      {/* Right Dots */}
      <div className="absolute right-16 top-32 hidden lg:grid grid-cols-4 gap-3 opacity-25">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Bottom Left Dots */}
      <div className="absolute left-16 bottom-20 hidden lg:grid grid-cols-4 gap-3 opacity-25">
        {Array.from({ length: 16 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-400" />
        ))}
      </div>

      {/* Main Card */}
      <div className="bg-white w-full max-w-4xl rounded-2xl border border-gray-200 shadow-md p-4">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-center text-[#0B245B]">
          Welcome to the NCLEX Test
        </h2>

        <p className="text-center text-gray-600 mt-3 text-base">
          Read each question carefully and choose the best answer.
          <br />
          You can navigate between questions and review your answers before
          submitting.
        </p>

        {/* Divider */}
        <div className="flex items-center gap-4 my-4">
          <div className="flex-1 h-px bg-gray-300"></div>

          <span className="text-blue-700 font-bold text-lg tracking-wide">
            DETAILS
          </span>

          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

    <div className="flex flex-col md:flex-row items-center md:items-start justify-center gap-2 md:gap-10 max-w-4xl mx-auto">
  {/* Avatar */}
  <div className="flex flex-col items-center shrink-0">
    <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden">
      <Image
        src="/images/Surbhi.jpg"
        alt="Avatar"
        width={128}
        height={128}
        className="w-full h-full object-cover object-top"
      />
    </div>

    <h3 className="mt-3 text-2xl sm:text-3xl font-bold text-[#0B245B] text-center">
      Surbhi
    </h3>
  </div>

  {/* Details */}
  <div className="max-w-lg mt-0 md:mt-4  md:flex-1 border rounded-3xl overflow-hidden">
    {/* Row 1 */}
    <div className="flex items-center border-b px-4 py-3">
      <div className="w-10 flex justify-center shrink-0">
        <Clock3 size={20} />
      </div>

      <div className="flex flex-1 justify-between items-center gap-3">
        <p className="font-semibold text-sm sm:text-base">
          Duration:
        </p>

        <p className="text-right text-xs sm:text-sm md:text-base">
          {totalTime} ({duration} Minutes)
        </p>
      </div>
    </div>

    {/* Row 2 */}
    <div className="flex items-center px-4 py-3">
      <div className="w-10 flex justify-center shrink-0">
        <ClipboardList size={20} />
      </div>

      <div className="flex flex-1 justify-between items-center gap-3">
        <p className="font-semibold text-sm sm:text-base">
          Total Questions:
        </p>

        <p className="text-right text-sm sm:text-base">
          {questions.length}
        </p>
      </div>
    </div>
  </div>
</div>  

        {/* Instructions */}
        <div className="mt-5 rounded-xl border border-blue-200 bg-blue-50 p-5">
          <div className="flex items-center gap-2 text-blue-700 font-semibold text-lg">
            <Info size={20} />
            Important Instructions
          </div>

          <ul className="mt-3 ml-6 list-disc text-sm text-gray-700 space-y-1">
            <li>Do not refresh or close the browser during the test.</li>
            <li>You can save and return to questions anytime.</li>
            <li>Click &quot;Submit Test&quot; after answering all questions.</li>
          </ul>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-7">
          <button  onClick={() => router.push("/practicePage")} className="flex items-center gap-3 bg-blue-700 hover:bg-blue-800 transition text-white font-bold text-xl px-10 py-3 rounded-xl shadow-lg">
            <ClipboardList size={24} />
            START TEST
          </button>
        </div>
      </div>
    </main>
  );
}
