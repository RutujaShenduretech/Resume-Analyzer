import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-white">
      {/* #8A57EA use this colour and white */}
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-black">
        Welcome to Resume Analyzer
      </h1>
      <p className="text-lg text-center text-gray-600 dark:text-gray-800 mt-4">
        Analyze your resume and get insights to improve it.
      </p>
      <div className="mt-8">
        <Image
          src="/resume-analyzer.png"
          alt="Resume Analyzer"
          width={700}
          className="rounded-lg shadow-lg"
          height={400}
        />
      </div>  
    </div>
  );
}
