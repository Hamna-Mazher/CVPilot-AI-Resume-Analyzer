"use client";

import Link from "next/link";

export default function DashboardHeader() {
  return (
    <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <p className="text-cyan-400 font-medium">
          AI Resume Intelligence
        </p>

        <h1 className="mt-2 text-5xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mt-3 max-w-2xl text-gray-400">
          Track ATS performance, discover missing keywords and improve
          your chances of landing more interviews.
        </p>
      </div>

      <Link
        href="/upload"
        className="rounded-xl bg-cyan-500 px-6 py-4 font-semibold text-black transition hover:scale-105 hover:bg-cyan-400"
      >
        + New Analysis
      </Link>
    </div>
  );
}