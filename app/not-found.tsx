import Link from "next/link";

export default function NotFound() {
  return (

    <div className="flex min-h-screen items-center justify-center bg-[#050816] text-white">

      <div className="text-center">

        <h1 className="text-8xl font-bold text-cyan-400">

          404

        </h1>

        <p className="mt-4 text-gray-400">

          Page not found.

        </p>

        <Link
          href="/"
          className="mt-8 inline-block rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black"
        >

          Back Home

        </Link>

      </div>

    </div>

  );
}