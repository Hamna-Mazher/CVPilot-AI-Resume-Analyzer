"use client";

import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import Link from "next/link";

import {
  User,
  Mail,
  Bell,
  Shield,
  ArrowLeft,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

export default function SettingsPage() {
  return (
  <div className="min-h-screen bg-[#050816] text-white lg:flex pb-20 lg:pb-0">

      <DashboardSidebar />

<main className="w-full overflow-y-auto p-4 sm:p-6 md:p-8 lg:flex-1 lg:p-10">

        <div className="mx-auto max-w-6xl">

          {/* Header */}

          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

                <Sparkles size={16} />

                CVPilot Account

              </div>

              <h1 className="mt-5 text-4xl font-bold md:text-5xl">

                Settings

              </h1>

              <p className="mt-3 text-gray-400">

                Manage your profile and AI resume preferences.

              </p>

            </div>

            <div className="rounded-3xl border border-cyan-500/20 bg-cyan-500/10 p-6 text-center">

              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cyan-500 text-3xl font-bold text-black">

                H

              </div>

              <h3 className="mt-4 text-xl font-semibold">

                Hamna

              </h3>

              <p className="text-sm text-gray-400">

                Frontend Developer

              </p>

            </div>

          </div>

          {/* Quick Stats */}

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1">

              <h2 className="text-5xl font-bold text-cyan-400">

                12

              </h2>

              <p className="mt-2 text-gray-400">

                Resume Uploads

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1">

              <h2 className="text-5xl font-bold text-cyan-400">

                86%

              </h2>

              <p className="mt-2 text-gray-400">

                Average ATS Score

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1">

              <h2 className="text-5xl font-bold text-cyan-400">

                Pro

              </h2>

              <p className="mt-2 text-gray-400">

                Current Plan

              </p>

            </div>

          </div>

          {/* Profile */}

          <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <User className="text-cyan-400" />

              <h2 className="text-2xl font-semibold">

                Profile Information

              </h2>

            </div>

            <div className="mt-8 grid gap-6 md:grid-cols-2">

              <div>

                <label className="mb-2 block text-sm text-gray-400">

                  Full Name

                </label>

                <input
                  defaultValue="Hamna"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-cyan-400"
                />

              </div>

              <div>

                <label className="mb-2 block text-sm text-gray-400">

                  Email Address

                </label>

                <input
                  defaultValue="hamna@example.com"
                  className="w-full rounded-2xl border border-white/10 bg-black/30 p-4 outline-none transition focus:border-cyan-400"
                />

              </div>

            </div>

          </div>
                    {/* Resume Preferences */}

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <Mail className="text-cyan-400" />

              <h2 className="text-2xl font-semibold">

                Resume Preferences

              </h2>

            </div>

            <p className="mt-2 text-gray-400">

              AI will use these preferences while analyzing your resume.

            </p>

            <div className="mt-8 grid gap-5 md:grid-cols-2">

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5">

                <p className="text-xs uppercase tracking-widest text-gray-500">

                  Preferred Role

                </p>

                <h3 className="mt-3 text-2xl font-semibold">

                  Frontend Developer

                </h3>

                <p className="mt-3 text-gray-400">

                  Recommendations will focus on React, Next.js and modern frontend technologies.

                </p>

              </div>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5">

                <p className="text-xs uppercase tracking-widest text-gray-500">

                  Resume Format

                </p>

                <h3 className="mt-3 text-2xl font-semibold">

                  PDF

                </h3>

                <p className="mt-3 text-gray-400">

                  ATS optimized format for maximum recruiter compatibility.

                </p>

              </div>

            </div>

          </div>

          {/* Notifications */}

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <Bell className="text-cyan-400" />

              <h2 className="text-2xl font-semibold">

                Notifications

              </h2>

            </div>

            <div className="mt-8 space-y-5">

              <div className="flex items-center justify-between rounded-2xl bg-black/30 p-5">

                <div>

                  <h3 className="font-semibold">

                    AI Resume Tips

                  </h3>

                  <p className="text-sm text-gray-400">

                    Receive weekly optimization suggestions.

                  </p>

                </div>

                <CheckCircle2 className="text-green-400" />

              </div>

              <div className="flex items-center justify-between rounded-2xl bg-black/30 p-5">

                <div>

                  <h3 className="font-semibold">

                    Product Updates

                  </h3>

                  <p className="text-sm text-gray-400">

                    Get notified when new features are available.

                  </p>

                </div>

                <CheckCircle2 className="text-green-400" />

              </div>

            </div>

          </div>

          {/* Security */}

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

            <div className="flex items-center gap-3">

              <Shield className="text-cyan-400" />

              <h2 className="text-2xl font-semibold">

                Privacy & Security

              </h2>

            </div>

            <div className="mt-8 rounded-2xl bg-black/30 p-6">

              <p className="leading-7 text-gray-300">

                Your uploaded resumes remain private and are used only for AI
                analysis. Files are never shared publicly and are processed
                securely to provide ATS scoring and personalized recommendations.

              </p>

            </div>

          </div>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 md:flex-row">

            <button
              className="flex-1 rounded-2xl bg-cyan-500 py-4 font-semibold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-400"
            >

              Save Changes

            </button>

            <Link
              href="/dashboard"
              className="flex flex-1 items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 py-4 transition-all duration-300 hover:-translate-y-1 hover:bg-white/10"
            >

              <ArrowLeft size={18} />

              Back to Dashboard

            </Link>

          </div>

          {/* Footer Card */}

          <div className="mt-10 rounded-3xl border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center">

            <h3 className="text-2xl font-bold text-cyan-400">

              CVPilot AI Resume Analyzer

            </h3>

            <p className="mt-3 text-gray-400">

              Built with Next.js • React • Tailwind CSS

            </p>

            <p className="mt-2 text-sm text-gray-500">

              Version 1.0 • © 2026 CVPilot

            </p>

          </div>

        </div>

      </main>

    </div>
  );
}