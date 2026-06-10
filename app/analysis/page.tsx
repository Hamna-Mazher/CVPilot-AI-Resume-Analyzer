"use client";

import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import Link from "next/link";

import {
  CircleCheck,
  TriangleAlert,
  Sparkles,
  FileText,
  Download,
  RotateCcw,
  ArrowRight,
} from "lucide-react";

export default function AnalysisPage() {
  const resumeName =
    typeof window !== "undefined"
      ? localStorage.getItem("resume-name") || "Frontend_Resume.pdf"
      : "Frontend_Resume.pdf";

  const skills = [
    {
      name: "React",
      value: 95,
    },
    {
      name: "Next.js",
      value: 90,
    },
    {
      name: "TypeScript",
      value: 88,
    },
    {
      name: "Tailwind CSS",
      value: 94,
    },
  ];

  const missingKeywords = [
    "Redux",
    "Docker",
    "GraphQL",
    "Jest",
    "CI/CD",
  ];

  const recommendations = [
    "Add measurable achievements with percentages.",
    "Improve your professional summary.",
    "Include more ATS keywords.",
    "Mention project impact using metrics.",
  ];

  return (
<div className="min-h-screen bg-[#050816] text-white lg:flex pb-20 lg:pb-0">

      <DashboardSidebar />

<main className="w-full overflow-y-auto p-4 sm:p-6 md:p-8 lg:flex-1 lg:p-10">

        <div className="mx-auto max-w-7xl">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                <Sparkles size={16} />

                AI Resume Intelligence

              </div>

              <h1 className="mt-5 text-4xl font-bold md:text-5xl">

                Resume Analysis Report

              </h1>

              <p className="mt-3 text-gray-400">

                {resumeName}

              </p>

            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8 text-center backdrop-blur-xl">

              <p className="text-gray-300">

                Overall ATS Score

              </p>

              <h2 className="mt-3 text-7xl font-bold text-cyan-400">

                86%

              </h2>

              <p className="mt-3 rounded-full bg-green-500/10 px-4 py-2 text-green-400">

                Excellent Match

              </p>

            </div>

          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

              <div className="flex items-center gap-3">

                <CircleCheck className="text-cyan-400" />

                <h2 className="text-2xl font-semibold">

                  Skills Match

                </h2>

              </div>

              <div className="mt-8 space-y-6">

                {skills.map((skill) => (

                  <div key={skill.name}>

                    <div className="mb-2 flex justify-between">

                      <span>{skill.name}</span>

                      <span className="text-cyan-400">

                        {skill.value}%

                      </span>

                    </div>

                    <div className="h-3 rounded-full bg-white/10">

                      <div
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-700"
                        style={{
                          width: `${skill.value}%`,
                        }}
                      />

                    </div>

                  </div>

                ))}

              </div>

            </div>

            <div className="space-y-8">

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <TriangleAlert className="text-yellow-400" />

                  <h2 className="text-2xl font-semibold">

                    Missing Keywords

                  </h2>

                </div>

                <div className="mt-8 flex flex-wrap gap-3">

                  {missingKeywords.map((keyword) => (

                    <span
                      key={keyword}
                      className="rounded-full border border-red-500/20 bg-red-500/10 px-4 py-2 text-sm text-red-300 transition hover:scale-105"
                    >

                      {keyword}

                    </span>

                  ))}

                </div>

              </div>

              <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

                <div className="flex items-center gap-3">

                  <Sparkles className="text-cyan-400" />

                  <h2 className="text-2xl font-semibold">

                    AI Recommendations

                  </h2>

                </div>

                <div className="mt-8 space-y-4">

                  {recommendations.map((item, index) => (

                    <div
                      key={index}
                      className="flex items-start gap-3 rounded-2xl bg-white/5 p-4 transition hover:bg-white/10"
                    >

                      <CircleCheck
                        size={20}
                        className="mt-1 text-green-400"
                      />

                      <p className="text-gray-300">

                        {item}

                      </p>

                    </div>

                  ))}

                </div>

              </div>

            </div>

          </div>
                    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <FileText className="text-cyan-400" />

              <h2 className="text-2xl font-semibold">

                AI Resume Summary

              </h2>

            </div>

            <p className="mt-6 leading-8 text-gray-300">

              Your resume demonstrates a strong frontend development profile
              with React, Next.js, TypeScript and Tailwind CSS. The overall
              ATS compatibility is excellent and your technical skills align
              well with modern software engineering roles.

            </p>

            <p className="mt-5 leading-8 text-gray-400">

              To maximize recruiter visibility, consider adding quantified
              achievements, modern development tools like Docker and CI/CD,
              and stronger project descriptions that highlight business impact.
              These improvements can significantly increase interview success.

            </p>

          </div>

          {/* Quick Insights */}

          <div className="mt-8 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-center transition hover:-translate-y-1">

              <h3 className="text-5xl font-bold text-cyan-400">

                24

              </h3>

              <p className="mt-2 text-gray-300">

                Skills Detected

              </p>

            </div>

            <div className="rounded-3xl border border-green-500/20 bg-green-500/10 p-6 text-center transition hover:-translate-y-1">

              <h3 className="text-5xl font-bold text-green-400">

                89%

              </h3>

              <p className="mt-2 text-gray-300">

                Keyword Match

              </p>

            </div>

            <div className="rounded-3xl border border-yellow-500/20 bg-yellow-500/10 p-6 text-center transition hover:-translate-y-1">

              <h3 className="text-5xl font-bold text-yellow-400">

                5

              </h3>

              <p className="mt-2 text-gray-300">

                Missing Keywords

              </p>

            </div>

          </div>

          {/* Action Buttons */}

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">

            <button
              className="flex items-center justify-center gap-3 rounded-2xl bg-cyan-500 px-6 py-5 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >

              <Download size={20} />

              Download Report

            </button>

            <Link
              href="/upload"
              className="flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >

              <RotateCcw size={20} />

              Analyze Another Resume

            </Link>

            <Link
              href="/dashboard"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-6 py-5 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 sm:col-span-2 lg:col-span-1"
            >

              Back to Dashboard

              <ArrowRight size={18} />

            </Link>

          </div>

          {/* Bottom CTA */}

          <div className="mt-12 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center">

            <h2 className="text-3xl font-bold">

              Ready to Improve Your Resume?

            </h2>

            <p className="mt-4 text-gray-400">

              Apply these AI recommendations and increase your chances of
              landing interviews at top companies.

            </p>

            <Link
              href="/upload"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >

              Upload New Resume

              <ArrowRight size={20} />

            </Link>

          </div>

        </div>

      </main>

    </div>

  );

}