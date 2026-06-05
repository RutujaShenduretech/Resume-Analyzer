"use client";

import {
  ScanSearch,
  Target,
  Brain,
  FileCheck,
  TrendingUp,
  FileText,
} from "lucide-react";
import Image from "next/image";
export default function Features() {
  const features = [
    {
      icon: ScanSearch,
      title: "ATS Score Analysis",
      desc: "Instantly evaluate ATS compatibility."
    },
    {
      icon: Target,
      title: "Keyword Optimization",
      desc: "Identify missing keywords recruiters want."
    },
    {
      icon: Brain,
      title: "AI Recommendations",
      desc: "Get personalized resume improvements."
    },
    {
      icon: FileCheck,
      title: "Resume Parsing",
      desc: "Extract skills, education and experience."
    },
    {
      icon: TrendingUp,
      title: "Job Match Score",
      desc: "Compare your resume against job descriptions."
    },
    {
      icon: FileText,
      title: "Resume Builder",
      desc: "Create ATS-friendly resumes easily."
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 text-sm font-medium">
              Features
            </span>

            <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-slate-900">
              Everything You Need To
              <span className="text-sky-500">
                {" "}Optimize Your Resume
              </span>
            </h2>

            <p className="mt-5 text-lg text-slate-600">
              AI-powered tools to help you improve ATS scores,
              match job descriptions, and get more interviews.
            </p>

            <div className="mt-10 space-y-5">

              {features.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={index}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-sky-50 transition"
                  >
                    <div className="w-12 h-12 rounded-xl bg-sky-100 flex items-center justify-center">
                      <Icon className="text-sky-600" size={24} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="text-slate-600">
                        {feature.desc}
                      </p>
                    </div>
                  </div>
                );
              })}

            </div>

          </div>

          {/* Right Side Scanner */}

              <div className="relative flex justify-center">

  {/* Glow */}
  <div className="absolute inset-0 bg-sky-300/20 blur-3xl rounded-full"></div>

  {/* Resume Image */}
  <div className="relative overflow-hidden rounded-3xl border border-sky-100 shadow-2xl">

    <Image
      src="/resume.png"
      alt="Resume Analysis"
      width={650}
      height={500}
      className="rounded-3xl"
    />

    {/* Scanner Line */}
    <div className="scanner-line absolute left-0 right-0 h-1">
      <div className="h-full bg-gradient-to-r from-transparent via-sky-500 to-transparent shadow-[0_0_30px_#0EA5E9]" />
    </div>

  </div>


  {/* Keyword Card */}
  <div className="absolute bottom-10 -right-8 bg-white rounded-2xl border border-sky-100 shadow-xl p-4">
    <p className="text-xs text-gray-500">
      Keywords
    </p>

    <h3 className="text-3xl font-bold text-violet-500">
      88%
    </h3>
  </div>

</div>
        </div>

      </div>
    </section>
  );
}