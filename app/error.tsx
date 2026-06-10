"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">

      <div className="max-w-lg rounded-3xl border border-red-500/20 bg-white/5 p-10 text-center backdrop-blur-xl">

        <h1 className="text-5xl font-bold text-red-400">
          Oops!
        </h1>

        <p className="mt-6 text-gray-400">
          Something went wrong while loading the page.
        </p>

        <p className="mt-4 text-sm text-gray-500 break-all">
          {error.message}
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-black transition hover:bg-cyan-400"
        >
          Try Again
        </button>

      </div>

    </div>
  );
}