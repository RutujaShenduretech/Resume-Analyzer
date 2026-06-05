"use client";

import { ArrowRight } from "lucide-react";

import Link from "next/link";

export default function BeforeAfter() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center">
          <span className="px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium">
            Resume Transformation
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900">
            See The Difference AI Makes
          </h2>

          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
            Improve ATS compatibility, keyword matching, and resume quality
            with AI-powered recommendations.
          </p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 items-center">

          {/* Before */}
          <div className="bg-white rounded-3xl border border-red-100 p-8 shadow-lg">
            <h3 className="text-xl font-bold text-red-500">
              Before Analysis
            </h3>

            <div className="mt-6">
              <h2 className="text-6xl font-black text-red-500">
                67%
              </h2>

              <p className="text-gray-500">
                ATS Score
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>❌ Missing Keywords</li>
              <li>❌ Weak Formatting</li>
              <li>❌ Low ATS Compatibility</li>
              <li>❌ Poor Skill Match</li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-sky-100 flex items-center justify-center">
              <ArrowRight className="text-sky-600" size={40} />
            </div>
          </div>

          {/* After */}
          <div className="bg-white rounded-3xl border border-sky-100 p-8 shadow-xl">
            <h3 className="text-xl font-bold text-sky-600">
              After Optimization
            </h3>

            <div className="mt-6">
              <h2 className="text-6xl font-black bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
                92%
              </h2>

              <p className="text-gray-500">
                ATS Score
              </p>
            </div>

            <ul className="mt-8 space-y-3 text-gray-600">
              <li>✅ ATS-Friendly Resume</li>
              <li>✅ Optimized Keywords</li>
              <li>✅ Better Skill Match</li>
              <li>✅ Improved Formatting</li>
            </ul>
          </div>

        </div>

      </div>


    
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 p-10 lg:p-20">

          {/* Background Glow */}
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl" />

          <div className="relative text-center text-white">

            <span className="px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm">
              🚀 Start Today
            </span>

            <h2 className="mt-6 text-4xl lg:text-6xl font-bold">
              Ready To Improve
              <br />
              Your Resume?
            </h2>

            <p className="mt-6 text-lg text-sky-100 max-w-2xl mx-auto">
              Upload your resume, get instant ATS analysis,
              and receive personalized recommendations
              to increase your chances of getting hired.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

              <Link
                href="/analyze-resume"
                className="px-8 py-4 bg-white text-sky-600 rounded-2xl font-semibold shadow-lg hover:scale-105 transition"
              >
                Analyze Resume
              </Link>

              <Link
                href="/create-resume"
                className="px-8 py-4 border border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-sky-600 transition"
              >
                Create Resume
              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  
    </section>
  );
}