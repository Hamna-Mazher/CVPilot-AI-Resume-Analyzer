import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import StatsCard from "@/components/dashboard/stats-card";
import ATSChart from "@/components/ats-chart";
import SkillsChart from "@/components/skills-chart";
import AITips from "@/components/dashboard/ai-tips";
import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-white lg:flex pb-20 lg:pb-0">

      <DashboardSidebar />

      <main className="w-full flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10">

        {/* Hero */}

        <div className="mb-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

          <div>

            <h1 className="text-4xl font-bold md:text-5xl">
              Welcome Back 👋
            </h1>

            <p className="mt-3 max-w-2xl text-gray-400">
              Monitor your resume performance, improve ATS score and
              increase your interview chances with AI powered insights.
            </p>

          </div>

          <div className="flex flex-wrap gap-3">

            <Link
              href="/upload"
              className="rounded-2xl bg-cyan-500 px-6 py-3 font-semibold text-black transition-all hover:-translate-y-1 hover:bg-cyan-400"
            >
              Upload Resume
            </Link>

            <Link
              href="/analysis"
              className="rounded-2xl border border-white/10 px-6 py-3 transition hover:bg-white/10"
            >
              View Analysis
            </Link>

          </div>

        </div>

        {/* Stats */}

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

          <StatsCard
            title="ATS Score"
            value="86"
            subtitle="+12% improvement"
          />

          <StatsCard
            title="Recruiter Fit"
            value="92"
            subtitle="Excellent"
          />

          <StatsCard
            title="Skills Found"
            value="24"
            subtitle="Detected"
          />

          <StatsCard
            title="Keyword Match"
            value="89%"
            subtitle="Strong"
          />

        </div>

        {/* Charts */}

        <div className="mt-10 grid gap-8 xl:grid-cols-3">

          <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/20">

            <div className="mb-8">

              <h2 className="text-2xl font-semibold">
                Resume Performance
              </h2>

              <p className="mt-2 text-gray-400">
                ATS score trend over recent resume analyses.
              </p>

            </div>

            <ATSChart />

          </div>

          <AITips />

        </div>

        {/* Bottom */}

        <div className="mt-10 grid gap-8 xl:grid-cols-2">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:border-cyan-500/20">

            <h2 className="mb-6 text-2xl font-semibold">
              Skills Distribution
            </h2>

            <SkillsChart />

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

            <div className="mb-8 flex items-center justify-between">

              <h2 className="text-2xl font-semibold">
                Recent Resume
              </h2>

              <Link
                href="/upload"
                className="text-sm text-cyan-400 hover:underline"
              >
                Upload New →
              </Link>

            </div>

            <div className="space-y-5">
                            <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h3 className="text-lg font-semibold text-white">
                      Frontend_Resume.pdf
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Uploaded Today • 463 KB
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                      ATS 86
                    </span>

                    <Link
                      href="/analysis"
                      className="rounded-xl border border-cyan-500/30 px-4 py-2 text-sm transition hover:bg-cyan-500 hover:text-black"
                    >
                      View
                    </Link>

                  </div>

                </div>

              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h3 className="text-lg font-semibold text-white">
                      React_Developer.pdf
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Yesterday • ATS Optimized
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                      ATS 82
                    </span>

                    <Link
                      href="/analysis"
                      className="rounded-xl border border-cyan-500/30 px-4 py-2 text-sm transition hover:bg-cyan-500 hover:text-black"
                    >
                      View
                    </Link>

                  </div>

                </div>

              </div>

              <div className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/10">

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                  <div>

                    <h3 className="text-lg font-semibold text-white">
                      Software_Engineer.pdf
                    </h3>

                    <p className="mt-2 text-sm text-gray-400">
                      Last Week • AI Enhanced
                    </p>

                  </div>

                  <div className="flex items-center gap-3">

                    <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
                      ATS 91
                    </span>

                    <Link
                      href="/analysis"
                      className="rounded-xl border border-cyan-500/30 px-4 py-2 text-sm transition hover:bg-cyan-500 hover:text-black"
                    >
                      View
                    </Link>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

        {/* Quick Actions */}

        <div className="mt-10 grid gap-5 md:grid-cols-3">

          <Link
            href="/upload"
            className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500/20"
          >

            <h3 className="text-xl font-bold">
              Upload New Resume
            </h3>

            <p className="mt-3 text-gray-300">
              Analyze another resume with AI.
            </p>

          </Link>

          <Link
            href="/analysis"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >

            <h3 className="text-xl font-bold">
              View Analysis
            </h3>

            <p className="mt-3 text-gray-400">
              Explore ATS reports and AI suggestions.
            </p>

          </Link>

          <Link
            href="/settings"
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
          >

            <h3 className="text-xl font-bold">
              Settings
            </h3>

            <p className="mt-3 text-gray-400">
              Manage preferences and appearance.
            </p>

          </Link>

        </div>

        <div className="h-10" />

      </main>

    </div>
  );
}