import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle,
  Sparkles,
  FileText,
} from "lucide-react";

export default function CreateResume() {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium">
              <Sparkles size={16} />
              Resume Builder
            </span>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Build a Professional Resume
              <span className="block text-sky-500">
                In Minutes
              </span>
            </h2>

            <p className="mt-6 text-lg text-slate-600 leading-relaxed">
              Create ATS-friendly resumes with AI-powered
              recommendations, professional templates,
              and recruiter-approved formatting.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-4">

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">
                  ATS-Friendly Templates
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">
                  AI Suggestions
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">
                  Instant PDF Download
                </span>
              </div>

              <div className="flex items-center gap-3">
                <CheckCircle className="text-sky-500" size={22} />
                <span className="text-slate-700">
                  Real-Time Preview
                </span>
              </div>

            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">

              <Link
                href="/create-resume"
                className="px-8 py-4 rounded-2xl bg-sky-500 text-white font-semibold shadow-lg hover:bg-sky-600 transition-all"
              >
                Create Resume
              </Link>

              <Link
                href="/templates"
                className="px-8 py-4 rounded-2xl border border-sky-500 text-sky-600 font-semibold hover:bg-sky-50 transition-all"
              >
                View Templates
              </Link>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute w-96 h-96 bg-sky-300/20 rounded-full blur-3xl"></div>

            {/* Resume Image */}
            <div className="relative z-10 bg-white p-4 rounded-[32px] border border-sky-100 shadow-2xl">

              <Image
                src="/resume-builder.png"
                alt="Resume Builder"
                width={500}
                height={600}
                className="rounded-3xl"
              />

            </div>

            {/* Floating Card 1 */}
            <div className="absolute -top-4 -left-4 bg-white border border-sky-100 rounded-2xl shadow-xl p-4 animate-bounce z-20">

              <div className="flex items-center gap-3">
                <FileText
                  className="text-sky-500"
                  size={22}
                />

                <div>
                  <p className="text-xs text-slate-500">
                    ATS Template
                  </p>

                  <p className="font-bold text-slate-900">
                    95% Friendly
                  </p>
                </div>
              </div>

            </div>

            {/* Floating Card 2 */}
            <div className="absolute top-20 -right-8 bg-white border border-sky-100 rounded-2xl shadow-xl p-4 z-20">

              <p className="text-xs text-slate-500">
                AI Suggestion
              </p>

              <p className="font-semibold text-slate-900">
                Add React & Next.js
              </p>

            </div>

            {/* Floating Card 3 */}
            <div className="absolute bottom-8 -left-8 bg-white border border-sky-100 rounded-2xl shadow-xl p-4 z-20">

              <p className="text-xs text-slate-500">
                PDF Ready
              </p>

              <p className="font-semibold text-green-500">
                Download Available
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}