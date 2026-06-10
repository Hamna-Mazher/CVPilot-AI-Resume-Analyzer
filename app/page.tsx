import {
  ArrowRight,
  Brain,
  BarChart3,
  FileText,
  Sparkles,
  Menu,
} from "lucide-react";

import Link from "next/link";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050816] text-white">

      {/* ================= Background ================= */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#164e63_0%,transparent_40%)]" />

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-violet-500/10 blur-[140px]" />

      {/* ================= Navbar ================= */}

      <nav className="relative z-50 border-b border-white/10 backdrop-blur-xl">

        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-5 lg:px-8">

          <Link
            href="/"
            className="text-3xl font-bold tracking-tight transition hover:opacity-80"
          >
            CV
            <span className="text-cyan-400">
              Pilot
            </span>
          </Link>

          {/* Desktop Menu */}

          <div className="hidden items-center gap-4 md:flex">

            <Link
              href="/dashboard"
              className="rounded-xl border border-white/15 px-5 py-3 text-sm transition-all duration-300 hover:bg-white/10"
            >
              Dashboard
            </Link>

            <Link
              href="/upload"
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >
              Get Started
            </Link>

          </div>

          {/* Mobile */}

          <button className="rounded-xl border border-white/10 p-3 transition hover:bg-white/10 md:hidden">

            <Menu size={22} />

          </button>

        </div>

      </nav>

      {/* ================= Hero ================= */}

      <section className="relative z-20 mx-auto flex max-w-7xl flex-col items-center px-5 py-20 text-center lg:px-8 lg:py-28">

        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-3 text-sm text-cyan-300">

          <Sparkles size={16} />

          AI Powered Resume Intelligence

        </div>

        <h1 className="max-w-6xl text-5xl font-black leading-tight md:text-6xl lg:text-7xl">

          Land More Interviews With

          <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-500 bg-clip-text text-transparent">

            {" "}
            AI Resume Analysis

          </span>

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400 md:text-xl">

          Upload your resume and instantly receive ATS scoring,

          recruiter insights, missing keywords, skill-gap analysis,

          and AI-powered recommendations to improve your chances.

        </p>

        {/* Hero Buttons */}

        <div className="mt-12 flex w-full flex-col justify-center gap-5 sm:w-auto sm:flex-row">

          <Link
            href="/upload"
            className="flex items-center justify-center rounded-2xl bg-cyan-500 px-10 py-5 text-lg font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
          >
            Analyze Resume

            <ArrowRight className="ml-2" size={20} />

          </Link>

          <Link
            href="/dashboard"
            className="rounded-2xl border border-white/10 px-10 py-5 text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >
            View Dashboard
          </Link>

        </div>

        {/* Small Stats */}

        <div className="mt-14 flex flex-wrap justify-center gap-4">

          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300">

            ✓ ATS Optimized

          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300">

            ✓ AI Powered

          </div>

          <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-gray-300">

            ✓ Instant Analysis

          </div>

        </div>

      </section>
            {/* ================= Features ================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-5 py-20 lg:px-8">

        <div className="text-center">

          <p className="text-cyan-400 font-semibold uppercase tracking-[0.25em]">

            FEATURES

          </p>

          <h2 className="mt-4 text-4xl font-bold md:text-5xl">

            Why Job Seekers Choose CVPilot

          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-gray-400">

            Everything you need to optimize your resume and increase
            your chances of landing interviews.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          <Link
            href="/analysis"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

              <FileText
                size={34}
                className="text-cyan-400"
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold">

              ATS Optimization

            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              Analyze your resume against modern Applicant
              Tracking Systems and improve visibility.

            </p>

            <div className="mt-8 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100">

              Learn More →

            </div>

          </Link>

          <Link
            href="/analysis"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

              <Brain
                size={34}
                className="text-cyan-400"
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold">

              AI Insights

            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              Receive intelligent suggestions, recruiter feedback,
              and personalized resume improvements.

            </p>

            <div className="mt-8 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100">

              Explore →

            </div>

          </Link>

          <Link
            href="/analysis"
            className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10">

              <BarChart3
                size={34}
                className="text-cyan-400"
              />

            </div>

            <h3 className="mt-8 text-2xl font-bold">

              Skills Analytics

            </h3>

            <p className="mt-4 leading-7 text-gray-400">

              Detect missing keywords, technical skills and
              recruiter expectations instantly.

            </p>

            <div className="mt-8 text-cyan-400 opacity-0 transition-all duration-300 group-hover:opacity-100">

              View Report →

            </div>

          </Link>

        </div>

      </section>

      {/* ================= Stats ================= */}

      <section className="relative z-20 mx-auto max-w-7xl px-5 py-16 lg:px-8">

        <div className="grid gap-8 md:grid-cols-3">

          <Link
            href="/dashboard"
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >

            <h2 className="text-6xl font-black text-cyan-400 transition group-hover:scale-110">

              95%

            </h2>

            <p className="mt-4 text-lg text-gray-300">

              ATS Accuracy

            </p>

            <p className="mt-5 text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">

              Open Dashboard →

            </p>

          </Link>

          <Link
            href="/analysis"
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >

            <h2 className="text-6xl font-black text-cyan-400 transition group-hover:scale-110">

              50K+

            </h2>

            <p className="mt-4 text-lg text-gray-300">

              Resumes Analyzed

            </p>

            <p className="mt-5 text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">

              Explore Reports →

            </p>

          </Link>

          <Link
            href="/upload"
            className="group rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-white/10"
          >

            <h2 className="text-6xl font-black text-cyan-400 transition group-hover:scale-110">

              3x

            </h2>

            <p className="mt-4 text-lg text-gray-300">

              More Interview Chances

            </p>

            <p className="mt-5 text-sm text-cyan-300 opacity-0 transition group-hover:opacity-100">

              Start Now →

            </p>

          </Link>

        </div>

      </section>
            {/* Pricing */}
      <section className="relative z-20 px-5 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">

          <h2 className="text-center text-3xl font-bold sm:text-5xl">
            Simple Pricing
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-center text-gray-400">
            Start free and upgrade whenever you need more powerful AI
            resume insights.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* Free */}

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition duration-300 hover:border-cyan-500/30 hover:bg-white/10">

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold">
                  Free
                </h3>

                <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-400">
                  Popular
                </span>

              </div>

              <h2 className="mt-8 text-6xl font-bold">
                $0
              </h2>

              <p className="mt-2 text-gray-400">
                Perfect for students & job seekers
              </p>

              <div className="mt-10 space-y-5 text-gray-300">

                <p>✓ ATS Score</p>

                <p>✓ Resume Parsing</p>

                <p>✓ Skills Detection</p>

                <p>✓ Keyword Suggestions</p>

                <p>✓ Instant Analysis</p>

              </div>

              <Link
                href="/upload"
                className="mt-10 inline-flex w-full items-center justify-center rounded-2xl bg-cyan-500 py-4 font-semibold text-black transition hover:bg-cyan-400"
              >
                Start Free
              </Link>

            </div>

            {/* Pro */}

            <div className="relative overflow-hidden rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 backdrop-blur-xl">

              <div className="absolute right-0 top-0 rounded-bl-3xl bg-cyan-500 px-6 py-2 font-semibold text-black">
                PRO
              </div>

              <h3 className="text-3xl font-bold">
                CVPilot Pro
              </h3>

              <h2 className="mt-8 text-6xl font-bold">
                $19
              </h2>

              <p className="mt-2 text-gray-300">
                Monthly subscription
              </p>

              <div className="mt-10 space-y-5 text-gray-200">

                <p>✓ Unlimited Resume Uploads</p>

                <p>✓ Advanced AI Suggestions</p>

                <p>✓ Resume Rewrite</p>

                <p>✓ Recruiter Insights</p>

                <p>✓ Download Reports</p>

                <p>✓ Priority Analysis</p>

              </div>

              <Link
                href="/settings"
                className="mt-10 inline-flex w-full items-center justify-center rounded-2xl border border-cyan-400 py-4 font-semibold transition hover:bg-cyan-500 hover:text-black"
              >
                Explore Pro
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* CTA */}

      <section className="relative z-20 px-5 py-24 sm:px-6">

        <div className="mx-auto max-w-5xl rounded-[40px] border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-violet-500/10 p-10 text-center backdrop-blur-xl sm:p-16">

          <h2 className="text-4xl font-bold sm:text-6xl">
            Ready To Boost Your Resume?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">

            Join thousands of candidates improving their resumes with
            AI-powered ATS optimization and recruiter insights.

          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <Link
              href="/upload"
              className="inline-flex items-center justify-center rounded-2xl bg-cyan-500 px-10 py-4 font-semibold text-black transition hover:-translate-y-1 hover:bg-cyan-400"
            >
              Get Started

              <ArrowRight
                className="ml-2"
                size={20}
              />

            </Link>

            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center rounded-2xl border border-white/20 px-10 py-4 transition hover:bg-white/10"
            >
              View Dashboard
            </Link>

          </div>

        </div>

      </section>
            {/* Footer */}

      <footer className="relative z-20 border-t border-white/10 bg-black/40">

        <div className="mx-auto max-w-7xl px-5 py-10 sm:px-6">

          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

            <div>

              <Link
                href="/"
                className="text-3xl font-bold"
              >
                CV
                <span className="text-cyan-400">
                  Pilot
                </span>
              </Link>

              <p className="mt-3 max-w-md text-sm text-gray-500">

                AI-powered resume intelligence platform designed to help
                job seekers improve ATS scores, optimize resumes and land
                more interviews.

              </p>

            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">

              <Link
                href="/"
                className="transition hover:text-cyan-400"
              >
                Home
              </Link>

              <Link
                href="/dashboard"
                className="transition hover:text-cyan-400"
              >
                Dashboard
              </Link>

              <Link
                href="/upload"
                className="transition hover:text-cyan-400"
              >
                Upload
              </Link>

              <Link
                href="/analysis"
                className="transition hover:text-cyan-400"
              >
                Analysis
              </Link>

              <Link
                href="/settings"
                className="transition hover:text-cyan-400"
              >
                Settings
              </Link>

            </div>

          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-500 md:flex-row">

            <p>

              © 2026 CVPilot. All rights reserved.

            </p>

            <div className="flex items-center gap-5">

              <span className="text-cyan-400">
                AI Resume Analyzer
              </span>

              <span>
                •
              </span>

              <span>
                Built with Next.js
              </span>

            </div>

          </div>

        </div>

      </footer>

    </main>

  );
}