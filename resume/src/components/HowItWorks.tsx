import {
  Upload,
  ScanSearch,
  Brain,
  Download,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload Resume",
      description:
        "Upload your resume in PDF or DOCX format for instant analysis.",
    },
    {
      icon: ScanSearch,
      title: "ATS Analysis",
      description:
        "Our AI scans your resume and checks ATS compatibility, formatting, and keywords.",
    },
    {
      icon: Brain,
      title: "Get AI Insights",
      description:
        "Receive ATS scores, skill gap analysis, keyword suggestions, and improvements.",
    },
    {
      icon: Download,
      title: "Optimize & Download",
      description:
        "Apply recommendations and download your optimized resume.",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-sky-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-sky-100 text-sky-600 font-medium text-sm">
            How It Works
          </span>

          <h2 className="mt-5 text-4xl md:text-5xl font-bold text-slate-900">
            Improve Your Resume in
            <span className="text-sky-500"> 4 Simple Steps</span>
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            Upload your resume, get AI-powered feedback, improve your ATS score,
            and increase your chances of landing interviews.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white rounded-3xl p-8 border border-sky-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Step Number */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-sky-100 text-sky-600 text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-sky-100 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-sky-600" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {step.title}
                </h3>

                <p className="mt-3 text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}