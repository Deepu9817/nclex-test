"use client";

import { createContext, useContext, useEffect, useState } from "react";
import mockTest from "@/data/questions";

const TestSessionContext = createContext(null);
const testDurationInSeconds = mockTest.duration * 60;

export function TestSessionProvider({ children }) {
  const [startedAt, setStartedAt] = useState(null);
  const [currentTime, setCurrentTime] = useState(null);
  const [submittedAnswers, setSubmittedAnswers] = useState(null);

  const elapsedSeconds = startedAt
    ? Math.floor((currentTime - startedAt) / 1000)
    : 0;
  const remainingSeconds = Math.max(testDurationInSeconds - elapsedSeconds, 0);
  const isExpired = Boolean(startedAt && remainingSeconds === 0);

  useEffect(() => {
    if (!startedAt) {
      return undefined;
    }

    const timer = window.setInterval(() => setCurrentTime(Date.now()), 1000);

    return () => window.clearInterval(timer);
  }, [startedAt]);

  const startTest = () => {
    if (startedAt) {
      return;
    }

    const startTime = Date.now();
    setStartedAt(startTime);
    setCurrentTime(startTime);
  };

  const submitTest = (answers) => {
    setSubmittedAnswers(answers);
  };

  return (
    <TestSessionContext.Provider
      value={{
        startedAt,
        remainingSeconds,
        isExpired,
        startTest,
        submittedAnswers,
        submitTest,
      }}
    >
      {children}
    </TestSessionContext.Provider>
  );
}

export function useTestSession() {
  const context = useContext(TestSessionContext);

  if (!context) {
    throw new Error("useTestSession must be used within TestSessionProvider");
  }

  return context;
}
