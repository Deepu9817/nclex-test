"use client";

import Image from "next/image";
import TestTimer from "@/components/TestTimer";

export default function StudentTestInfo() {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-3 py-2 shadow-sm">
      <Image
        src="/images/Surbhi.jpg"
        alt="Surbhi"
        width={44}
        height={44}
        className="h-11 w-11 rounded-full object-cover object-top"
      />
      <span className="text-base font-bold text-[#111827]">Surbhi</span>
      <TestTimer />
    </div>
  );
}
