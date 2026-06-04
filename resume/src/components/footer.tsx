"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 border border-sky-400">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 flex items-center justify-center text-white font-bold">
                AI
              </div>

              <h2 className="text-xl font-bold text-gray-900">
                Resume Analyzer
              </h2>
            </div>

            <p className="text-gray-600 leading-relaxed">
              AI-powered resume analysis platform helping candidates
              optimize resumes, improve ATS scores, and land better jobs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-sky-600">
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/create-resume"
                  className="text-gray-600 hover:text-sky-600"
                >
                  Create Resume
                </Link>
              </li>

              <li>
                <Link
                  href="/analyze-resume"
                  className="text-gray-600 hover:text-sky-600"
                >
                  Analyze Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Features */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">
              Features
            </h3>

            <ul className="space-y-3">
              <li className="text-gray-600">
                ATS Score Analysis
              </li>

              <li className="text-gray-600">
                Resume Optimization
              </li>

              <li className="text-gray-600">
                Skill Gap Detection
              </li>

              <li className="text-gray-600">
                AI Recommendations
              </li>
            </ul>
          </div>

        {/* AI Powered Card */}
<div>
  <div className="bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-600 rounded-3xl p-6 shadow-xl text-white h-full flex flex-col justify-between">

    <div>
      <span className="inline-block px-3 py-1 text-xs font-semibold bg-white/20 rounded-full backdrop-blur-sm">
        AI Powered
      </span>

      <h3 className="text-2xl font-bold mt-4 mb-3">
        Smart Resume Analysis
      </h3>

      <p className="text-sky-100 leading-relaxed">
        Get instant ATS scores, keyword insights, skill gap analysis,
        and personalized recommendations to make your resume stand out.
      </p>
    </div>

    <div className="mt-6">
      <Link
        href="/analyze-resume"
        className="inline-flex items-center justify-center bg-white text-sky-600 font-semibold px-5 py-3 rounded-xl hover:scale-105 transition-all duration-300 shadow-lg"
      >
        Analyze Resume →
      </Link>
    </div>
  </div>
</div>
        
                </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-sm text-center">
            © {new Date().getFullYear()} Resume Analyzer. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-gray-500 hover:text-sky-600"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-500 hover:text-sky-600"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;