"use client";

import { useState } from "react";
import { Bookmark } from "lucide-react";

export default function QuestionCard() {
  const [selected, setSelected] = useState("C");

  const options = [
    {
      id: "A",
      text: "Place the client in a supine position.",
    },
    {
      id: "B",
      text: "Administer prescribed diuretic.",
    },
    {
      id: "C",
      text: "Restrict the client's fluid intake.",
    },
    {
      id: "D",
      text: "Weigh the client daily.",
    },
  ];

  return (
    <div className="h-full flex flex-col p-8">
      {/* Header */}
      <div className="flex justify-between items-start">
        <h2 className="text-[20px] font-bold text-[#111827]">
          Question 12 of 150
        </h2>

        <button className="text-gray-500 hover:text-blue-700 transition">
          <Bookmark size={26} strokeWidth={1.8} />
        </button>
      </div>

      {/* Question */}
      <div className="mt-7 text-lg text-[#1F2937]">
        <p>
          A client who has heart failure reports increased shortness of breath
          and fatigue.
        </p>
        <p>
          Which intervention should the nurse implement first?
        </p>
      </div>

      <hr className="my-5 border-gray-300" />

      {/* Options */}
      <div className="flex-1 flex flex-col justify-start gap-8">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => setSelected(option.id)}
            className="flex items-center gap-5 text-left group"
          >
            {/* Radio */}
            <div
              className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition
              ${
                selected === option.id
                  ? "border-blue-700"
                  : "border-gray-500 group-hover:border-blue-700"
              }`}
            >
              {selected === option.id && (
                <div className="w-4 h-4 rounded-full bg-blue-700" />
              )}
            </div>

            {/* Option */}
            <div className="flex items-center gap-2">
              <span className="text-blue-700 font-bold text-md min-w-8">
                {option.id}.
              </span>

              <span className="text-md text-gray-900 leading-8">
                {option.text}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}