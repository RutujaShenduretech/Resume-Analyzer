"use client";
import {
  CheckCircle,
  AlertTriangle,
  TrendingUp,
} from "lucide-react";
import { useEffect, useState } from "react";


export default function AtsDemo() {
    const [hovered, setHovered] = useState(false);



  const score = 92;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProgress(score);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset =
    circumference - (progress / 100) * circumference;

  

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 font-medium text-sm">
            ATS Score Demo
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            See How Your Resume
            <span className="text-sky-500"> Performs</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Our AI evaluates your resume and provides actionable insights
            to increase your chances of getting shortlisted.
          </p>
        </div>

        {/* Demo Card */}
        <div className="mt-16 bg-white rounded-[32px] border border-sky-100 shadow-2xl p-8 lg:p-12">

          <div className="grid lg:grid-cols-2 gap-12 items-center">

   
    <div className="relative flex justify-center items-center">

      {/* Glow Background */}
      <div className="absolute w-72 h-72 rounded-full bg-gradient-to-r from-sky-400/30 via-blue-500/20 to-violet-500/30 blur-3xl" />

      {/* Main Card */}
      <div className="relative bg-white/80 backdrop-blur-xl border border-sky-100 rounded-[40px] p-8 shadow-[0_20px_60px_rgba(14,165,233,0.15)]">

        {/* Floating Badge */}
        <div className="absolute -top-4 right-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
          ATS Optimized
        </div>
 <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-100 text-green-600 text-xs font-semibold">
              <TrendingUp size={14} />
              Excellent Match
            </div>
        <div className="relative w-72 h-72 flex items-center justify-center">

          {/* SVG Circle */}
          <svg
            className="-rotate-90 absolute"
            width="260"
            height="260"
          >
            <defs>
              <linearGradient
                id="scoreGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#38BDF8" />
                <stop offset="50%" stopColor="#2563EB" />
                <stop offset="100%" stopColor="#8B5CF6" />
              </linearGradient>
            </defs>

            {/* Background */}
            <circle
              cx="130"
              cy="130"
              r={radius}
              stroke="#E0F2FE"
              strokeWidth="18"
              fill="none"
            />

            {/* Progress */}
            <circle
              cx="130"
              cy="130"
              r={radius}
              stroke="url(#scoreGradient)"
              strokeWidth="18"
              fill="none"
              strokeLinecap="round"
              strokeDasharray={circumference}
              strokeDashoffset={strokeDashoffset}
              className="transition-all duration-[2000ms] ease-out"
            />
          </svg>

          {/* Center Content */}
          <div className="text-center z-10">

           

            <h2 className="mt-4 text-7xl font-black bg-gradient-to-r from-sky-500 via-blue-600 to-violet-600 bg-clip-text text-transparent">
              {progress}
            </h2>

            <p className="text-slate-500 font-medium">
              ATS Score
            </p>

          </div>
        </div>

        {/* Bottom Metrics */}
        <div className="grid grid-cols-3 gap-4 mt-8">

          <div className="bg-sky-50 rounded-2xl p-4 text-center">
            <h4 className="text-2xl font-bold text-sky-500">
              95%
            </h4>
            <p className="text-xs text-slate-500">
              Formatting
            </p>
          </div>

          <div className="bg-blue-50 rounded-2xl p-4 text-center">
            <h4 className="text-2xl font-bold text-blue-500">
              88%
            </h4>
            <p className="text-xs text-slate-500">
              Keywords
            </p>
          </div>

          <div className="bg-violet-50 rounded-2xl p-4 text-center">
            <h4 className="text-2xl font-bold text-violet-500">
              91%
            </h4>
            <p className="text-xs text-slate-500">
              Skills
            </p>
          </div>

        </div>
      </div>
    </div>
  
  

            {/* Analysis Side */}
            <div>

              <h3 className="text-2xl font-bold text-slate-900 mb-8">
                Resume Analysis Report
              </h3>


  
 

              {/* Recommendations */}
              <div className="mt-10 space-y-4">

                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle size={20} />
                  Strong ATS-friendly formatting
                </div>

                <div className="flex items-center gap-3 text-green-600">
                  <CheckCircle size={20} />
                  Good project descriptions
                </div>

                <div className="flex items-center gap-3 text-amber-500">
                  <AlertTriangle size={20} />
                  Add Docker and AWS keywords
                </div>

                <div className="flex items-center gap-3 text-sky-600">
                  <TrendingUp size={20} />
                  ATS score can improve to 98%
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}