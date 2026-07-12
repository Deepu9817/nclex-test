"use client";

import QuestionCard from "../components/QuestionCard";
import QuestionStatus from "../components/QuestionStatus";
import QuestionNavigator from "../components/QuestionNavigator";
import BottomActions from "../components/BottomActions";

export default function PracticePage() {
  return (
    <main className="bg-[#FAFBFF] h-[calc(100vh-105px)] p-3 flex flex-col gap-3 overflow-hidden">
      {/* Main Content */}
      <div className="flex-1 grid grid-cols-1 xl:grid-cols-[1fr_380px] gap-3 overflow-hidden">
        {/* Question */}
        <section className="bg-white border border-gray-300 rounded-2xl shadow-sm overflow-hidden">
          <QuestionCard />
        </section>

        {/* Sidebar */}
        <aside className="bg-white border border-gray-300 rounded-2xl shadow-sm p-4 flex flex-col overflow-hidden">
          <QuestionStatus />

          <div className="border-t mt-4 pt-4 flex-1 overflow-y-auto">
            <QuestionNavigator />
          </div>
        </aside>
      </div>

      {/* Footer */}
      <BottomActions />
    </main>
  );
}