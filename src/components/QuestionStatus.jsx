"use client";

export default function QuestionStatus() {
  const status = [
    {
      label: "Answered",
      color: "bg-green-500",
      border: "",
    },
    {
      label: "Not Answered",
      color: "bg-white",
      border: "border border-gray-400",
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Heading */}
      <h2 className="text-[18px] font-bold tracking-wide text-[#111827] uppercase">
        Question Status
      </h2>

      {/* Legend */}
      <div className="mt-2 flex gap-8">
        {status.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2"
          >
            <div
              className={`w-4 h-4 rounded-md shadow-sm ${item.color} ${item.border}`}
            />

            <span className="text-sm text-gray-800">
              {item.label}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}
