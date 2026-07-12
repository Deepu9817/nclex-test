"use client";

import { Clock3 } from "lucide-react";
import { useTestSession } from "@/context/TestSessionContext";

function formatTime(totalSeconds) {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return [hours, minutes, seconds]
    .map((value) => String(value).padStart(2, "0"))
    .join(":");
}

export default function TestTimer() {
  const { remainingSeconds, isExpired } = useTestSession();

  return (
    <div className="flex flex-col items-end border-l border-gray-300 pl-4">
      <span className="text-xs font-medium text-gray-600">Time Remaining</span>
      <div className="flex items-center gap-2 text-[#0A3D91]">
        <span className="text-xl font-bold tabular-nums">
          {formatTime(remainingSeconds)}
        </span>
        <Clock3 size={22} strokeWidth={2.2} />
      </div>
      {isExpired && <span className="text-xs font-medium text-red-600">Time is up</span>}
    </div>
  );
}
