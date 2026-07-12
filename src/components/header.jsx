"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

import StudentTestInfo from "@/components/StudentTestInfo";
import { useTestSession } from "@/context/TestSessionContext";

export default function Header() {
  const router = useRouter();
  const { startedAt } = useTestSession();

  const showTestInfo =
    router.pathname === "/practice" && startedAt;

  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-white border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between h-24 px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="block">
          <div className="relative w-25 h-5 md:w-50 md:h-10 cursor-pointer">
            <Image
              src="/images/nclex-logo.png"
              alt="NCLEX Logo"
              fill
              priority
              className="object-contain"
            />
          </div>
        </Link>

        {showTestInfo && <StudentTestInfo />}
      </div>

      <div className="h-1 bg-[#0A3D91]" />
    </header>
  );
}