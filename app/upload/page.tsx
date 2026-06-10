"use client";

import { useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useDropzone } from "react-dropzone";

import DashboardSidebar from "@/components/layout/dashboard-sidebar";
import AILoader from "@/components/upload/ai-loader";

import {
  UploadCloud,
  FileText,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export default function UploadPage() {
  const router = useRouter();

  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const selectedFile = acceptedFiles[0];

      setFile(selectedFile);
      setUploaded(true);

      localStorage.setItem("resume-name", selectedFile.name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
    },
    multiple: false,
  });

  const analyzeResume = () => {
    if (!file) return;

    setLoading(true);

    setTimeout(() => {
      router.push("/analysis");
    }, 2500);
  };

  return (
    <div className="min-h-screen bg-[#050816] text-white lg:flex pb-20 lg:pb-0">

      <DashboardSidebar />

     <main className="w-full flex-1 overflow-y-auto p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="mx-auto max-w-5xl">

          <div>

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">

              <Sparkles size={16} />

              AI Resume Scanner

            </div>

            <h1 className="mt-6 text-5xl font-bold">

              Upload Your Resume

            </h1>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">

              Upload a PDF resume and receive AI-powered ATS scoring,
              recruiter insights, missing keyword detection and
              personalized recommendations.

            </p>

          </div>

          <div
            {...getRootProps()}
            className={`mt-10 cursor-pointer rounded-3xl border-2 border-dashed p-20 text-center transition-all duration-300

            ${
              isDragActive
                ? "scale-[1.01] border-cyan-400 bg-cyan-500/10"
                : "border-white/10 bg-white/5 hover:border-cyan-500/30 hover:bg-white/10"
            }
            `}
          >

            <input {...getInputProps()} />

            <UploadCloud
              size={70}
              className="mx-auto text-cyan-400"
            />

            <h2 className="mt-6 text-3xl font-semibold">

              Drag & Drop Resume

            </h2>

            <p className="mt-4 text-gray-400">

              Click anywhere or drop your PDF file here

            </p>

            <div className="mt-8 inline-flex rounded-full bg-cyan-500/10 px-5 py-2 text-sm text-cyan-300">

              PDF Files Only

            </div>

          </div>

          {file && (

            <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

                <div className="flex items-center gap-5">

                  <div className="rounded-2xl bg-cyan-500/10 p-4">

                    <FileText
                      className="text-cyan-400"
                      size={34}
                    />

                  </div>

                  <div>

                    <p className="break-all text-xl font-semibold text-white">

                      {file.name}

                    </p>

                    <p className="mt-2 text-gray-400">

                      {(file.size / 1024).toFixed(1)} KB

                    </p>

                  </div>

                </div>

                <div className="rounded-full bg-green-500/20 px-5 py-2 font-semibold text-green-400">

                  Ready ✓

                </div>

              </div>

            </div>

          )}

          {uploaded && !loading && (

            <div className="mt-6 rounded-3xl border border-green-500/20 bg-green-500/10 p-5">

              <div className="flex items-center gap-4">

                <CheckCircle2
                  size={28}
                  className="text-green-400"
                />

                <div>

                  <p className="font-semibold text-green-400">

                    Resume Uploaded Successfully

                  </p>

                  <p className="mt-1 text-sm text-gray-400">

                    Your resume is ready for AI-powered analysis.

                  </p>

                </div>

              </div>

            </div>

          )}

          {loading && <AILoader />}

           <button
            onClick={analyzeResume}
            disabled={!file || loading}
            className="mt-10 flex w-full items-center justify-center rounded-2xl bg-cyan-500 py-5 text-xl font-bold text-black transition-all duration-300 hover:scale-[1.01] hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <div className="flex items-center gap-3">

                <div className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />

                Analyzing Resume...

              </div>
            ) : (
              "Analyze Resume"
            )}
          </button>

          {loading && (

            <div className="mt-8 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-6">

              <div className="mb-4 flex items-center justify-between">

                <span className="text-sm font-medium text-cyan-300">

                  AI Processing...

                </span>

                <span className="text-sm text-gray-400">

                  Please wait

                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-full animate-pulse rounded-full bg-cyan-400" />

              </div>

            </div>

          )}

          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-lg font-semibold text-cyan-400">

                ATS Score

              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">

                Get an instant ATS compatibility score and improve your chances
                of passing automated resume screening.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-lg font-semibold text-cyan-400">

                Skill Analysis

              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">

                Detect technical skills, missing keywords and recruiter-focused
                improvements using AI.

              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-lg font-semibold text-cyan-400">

                AI Suggestions

              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-400">

                Receive personalized recommendations to optimize your resume
                and land more interviews.

              </p>

            </div>

          </div>

        </div>

      </main>

    </div>

  );

}