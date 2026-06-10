"use client";

export default function GlobalError() {
  return (
    <html>
      <body className="flex min-h-screen items-center justify-center bg-[#050816] text-white">

        <div className="text-center">

          <h1 className="text-6xl font-bold text-red-400">
            Critical Error
          </h1>

          <p className="mt-4 text-gray-400">
            Please refresh the page.
          </p>

        </div>

      </body>
    </html>
  );
}