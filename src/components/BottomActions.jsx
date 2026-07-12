"use client";

import {
  ChevronLeft,
  ChevronRight,
  Save,
  Send,
} from "lucide-react";

export default function BottomActions() {
  return (
    <div className="bg-white border border-gray-300 rounded-2xl shadow-sm px-4 py-3">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3">

        {/* Left Buttons */}
        <div className="flex flex-wrap justify-center md:justify-start gap-3">

          {/* Previous */}
          <button className="flex items-center gap-2 border-2 border-gray-300 hover:bg-gray-50 transition px-4 py-2 rounded-xl font-semibold text-sm">
            <ChevronLeft size={14} />
            PREV. QUES.
          </button>

          {/* Next */}
          <button className="flex items-center gap-2 bg-[#1D4ED8] hover:bg-blue-800 text-white transition px-4 py-2 rounded-xl font-semibold text-sm">
            NEXT QUES.
            <ChevronRight size={14} />
          </button>

          {/* Save */}
          <button className="flex items-center gap-2 border-2 border-green-500 text-green-500 hover:bg-green-100 transition px-4 py-2 rounded-xl font-semibold text-sm">
            <Save size={14} />
            SAVE &amp; NEXT
          </button>

        </div>

        {/* Submit */}
        <button className="flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white transition px-6 py-2.5 rounded-xl font-semibold text-[15px] w-full md:w-auto">
          <Send size={17} />
          SUBMIT TEST
        </button>

      </div>
    </div>
  );
}