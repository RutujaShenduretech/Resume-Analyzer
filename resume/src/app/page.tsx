import HowItWorks from "@/components/HowItWorks";
import Image from "next/image";
import Link from "next/link";
import AtsDemo from "@/components/AtsDemo";
import Features from "@/components/Features";
import BeforeAfter from "@/components/BeforeAfter";

export default function Home() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-18 lg:py-24">

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            <span className="inline-flex items-center px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium text-sm border border-sky-200">
              🚀 AI-Powered Resume Analysis
            </span>

            <h1 className="mt-6 text-5xl md:text-6xl xl:text-7xl font-bold leading-tight text-slate-900">
              Optimize Your Resume
              <span className="block text-sky-500">
                For ATS Success
              </span>
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Build professional resumes, improve ATS scores,
              identify missing keywords, and increase your chances
              of getting shortlisted by recruiters.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

              <Link
                href="/create-resume"
                className="px-8 py-4 rounded-2xl bg-sky-500 text-white font-semibold shadow-lg shadow-sky-200 hover:bg-sky-600 transition-all duration-300"
              >
                Create Resume
              </Link>

              <Link
                href="/analyze-resume"
                className="px-8 py-4 rounded-2xl border border-sky-500 text-sky-600 font-semibold hover:bg-sky-50 transition-all duration-300"
              >
                Analyze Resume
              </Link>

            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6 max-w-md mx-auto lg:mx-0">

              <div>
                <h3 className="text-3xl font-bold text-sky-500">
                  95%
                </h3>
                <p className="text-sm text-slate-600">
                  ATS Score
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">
                  10K+
                </h3>
                <p className="text-sm text-slate-600">
                  Users
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-bold text-sky-500">
                  4.9★
                </h3>
                <p className="text-sm text-slate-600">
                  Rating
                </p>
              </div>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">

            {/* ATS Card */}
            <div className="absolute -top-4 left-0 lg:left-4 bg-white border border-sky-100 rounded-3xl p-5 shadow-xl animate-pulse z-10">

              <p className="text-sm text-slate-500">
                ATS Score
              </p>

              <h3 className="text-4xl font-bold text-green-500">
                95%
              </h3>

              <p className="text-sm text-slate-500">
                Excellent Match
              </p>

            </div>

            {/* Skills Card */}
            <div className="absolute bottom-0 right-0 lg:right-4 bg-white border border-sky-100 rounded-3xl p-5 shadow-xl z-10">

              <p className="text-sm text-slate-500">
                Keyword Match
              </p>

              <h3 className="text-3xl font-bold text-sky-500">
                87%
              </h3>

            </div>

            {/* Image Container */}
            <div className="relative bg-white rounded-[32px] p-4 shadow-2xl border border-sky-100">

              <Image
                src="/resume-analyzer.png"
                alt="Resume Analyzer"
                width={700}
                height={500}
                priority
                className="rounded-3xl object-cover w-full h-auto"
              />

            </div>

          </div>

        </div>
    
      </div>
      <HowItWorks></HowItWorks>
      <AtsDemo></AtsDemo>
      <Features></Features>
      <BeforeAfter></BeforeAfter>
    </section>
  );
}