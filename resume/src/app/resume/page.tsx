"use client";

import { Sparkles, User, Briefcase, GraduationCap, Code2 } from "lucide-react";
import { useState } from "react";
import AIButton from "@/components/AIButton";
export default function CreateResumePage() {
  const [summary, setSummary] = useState("");
const [experience, setExperience] = useState("");
const [skills, setSkills] = useState("");


  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-100 py-25 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Form */}

        <div className="lg:col-span-2">
          <div className="rounded-3xl bg-white/80 backdrop-blur-xl shadow-2xl border border-slate-200 p-8">
            <h1 className="text-4xl font-bold text-slate-800">
              Create Your Resume
            </h1>

            <p className="text-slate-500 mt-2">
              Build an ATS-friendly resume with AI-powered recommendations.
            </p>

            {/* PERSONAL */}

            <section className="mt-10">
              <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                  <User className="w-6 h-6 text-sky-500" />

                  <h2 className="text-2xl font-semibold text-sky-500">
                    Personal Information
                  </h2>
                </div>

                <button className="flex items-center gap-2 rounded-xl transition bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-gray-50 hover:bg-sky-600 transition">
                  <Sparkles size={18} />
                  AI Improve
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5 text-gray-700">
                <Input label="Full Name" />
                <Input label="Email" />
                <Input label="Phone" />
                <Input label="Location" />
                <Input label="LinkedIn" />
                <Input label="GitHub" />
              </div>
            </section>

            {/* SUMMARY */}

            <section className="mt-12">
              <div className="flex justify-between items-center mb-5">
<textarea
  value={summary}
  onChange={(e) => setSummary(e.target.value)}
/>

<AIButton
  section="Professional Summary"
  value={summary}
  onApply={(text) => setSummary(text)}
/>

                <button className="flex items-center gap-2 rounded-xl transition bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-gray-50 hover:bg-sky-600">
                  <Sparkles size={18} />
                  AI Generate
                </button>
              </div>

              <textarea
                rows={5}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-sky-400 text-gray-700" 
                placeholder="Write about yourself..."
              />
            </section>

            {/* EXPERIENCE */}

            <section className="mt-12">
              <div className="flex justify-between items-center mb-5">
                <div className="flex gap-2 items-center">
                  <Briefcase className="text-sky-500" />


<textarea
  value={experience}
  onChange={(e) => setExperience(e.target.value)}
/>

<AIButton
  section="Work Experience"
  value={experience}
  onApply={(text) => setExperience(text)}
/>                </div>

                <button className="flex items-center gap-2 rounded-xl transition bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-gray-50 hover:bg-sky-600">
                  <Sparkles size={18} />
                  Improve Description
                </button>
              </div>

              <div className="space-y-5 text-gray-700">
                <Input label="Company Name" />
                <Input label="Job Title" />

                <textarea
                  rows={5}
                  className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-sky-400 text-gray-700"
                  placeholder="Describe your work..."
                />
              </div>
            </section>

            {/* EDUCATION */}

            <section className="mt-12">
              <div className="flex justify-between items-center mb-5">
                <div className="flex gap-2 items-center">
                  <GraduationCap className="text-sky-500" />

                  <h2 className="text-2xl font-semibold text-sky-500">
                    Education
                  </h2>
                </div>

                <button className="flex items-center gap-2 rounded-xl transition bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-gray-50 hover:bg-sky-600">
                  <Sparkles size={18} />
                  AI Improve
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-5 text-gray-700">
                <Input label="College Name" />
                <Input label="Degree" />
                <Input label="CGPA" />
                <Input label="Passing Year" />
              </div>
            </section>

            {/* SKILLS */}

            <section className="mt-12">
              <div className="flex justify-between items-center mb-5">
                <div className="flex gap-2 items-center">
                  <Code2 className="text-sky-500" />


<textarea
  value={skills}
  onChange={(e) => setSkills(e.target.value)}
/>

<AIButton
  section="Skills"
  value={skills}
  onApply={(text) => setSkills(text)}
/>                </div>

                <button className="flex items-center gap-2 rounded-xl  bg-gradient-to-r from-sky-500 to-blue-600  px-4 py-2 text-gray-50 ">
                  <Sparkles size={18} />
                  Suggest Skills
                </button>
              </div>

              <textarea
                rows={4}
                className="w-full rounded-xl border border-slate-300 p-4 outline-none focus:ring-2 focus:ring-sky-400 text-gray-700"
                placeholder="React, Next.js, Node.js..."
              />
            </section>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-xl  px-8 py-3 font-semibold text-gray-50  transition bg-gradient-to-r from-sky-500 to-blue-600">
                Download Resume
              </button>

              <button className="rounded-xl border border-slate-300 px-8 py-3 font-semibold hover:bg-slate-100 transition text-sky-500 border border-sky-500">
                Preview Resume
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT PANEL */}

        <div className="sticky top-8 h-fit">
          <div className="rounded-3xl bg-white shadow-2xl border border-slate-200 p-6">
            <div className="flex items-center gap-2">
              <Sparkles className="text-sky-500" />

              <h2 className="text-2xl font-bold text-sky-500">
                AI Assistant
              </h2>
            </div>

            <div className="mt-6 rounded-2xl bg-sky-50 p-5">
              <h3 className="font-semibold text-sky-400">
                ATS Score
              </h3>

              <div className="mt-4 h-3 rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-[82%] rounded-full  bg-gradient-to-r from-sky-500 to-blue-600"></div>
              </div>

              <p className="mt-2 text-sky-600 font-bold text-xl">
                82 / 100
              </p>
            </div>

            <div className="mt-6 rounded-2xl border p-5">

              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>✓ Add measurable achievements.</li>

                <li>✓ Improve professional summary.</li>

                <li>✓ Include leadership experience.</li>

                <li>✓ Add more technical keywords.</li>
              </ul>
            </div>

            <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 py-3 font-semibold text-gray-200 hover:scale-[1.02] transition">
              Optimize Entire Resume ✨
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Input({
  label,
}: {
  label: string;
}) {
  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <input
        className="w-full rounded-xl border border-slate-300 p-3 outline-none transition focus:ring-2 focus:ring-sky-400 text-gray-700"
        placeholder={label}
      />
    </div>
  );
}