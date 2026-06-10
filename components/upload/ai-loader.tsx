"use client";

export default function AILoader() {
  return (
    <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-8">

      <div className="flex justify-center">

        <div className="relative h-24 w-24">

          <div className="absolute inset-0 animate-ping rounded-full bg-cyan-500/20"></div>

          <div className="absolute inset-3 rounded-full bg-cyan-400"></div>

        </div>

      </div>

      <h2 className="mt-8 text-center text-2xl font-bold">
        AI is analyzing your resume...
      </h2>

      <p className="mt-3 text-center text-gray-400">
        Extracting skills • Checking ATS • Finding keywords
      </p>

      <div className="mt-8 h-2 overflow-hidden rounded-full bg-white/10">

        <div className="h-full w-full animate-pulse rounded-full bg-cyan-400"></div>

      </div>

    </div>
  );
}