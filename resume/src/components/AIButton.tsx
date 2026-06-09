"use client";

import { Sparkles } from "lucide-react";

type Props = {
  section: string;
  value: string;
  onApply: (text: string) => void;
};

export default function AIButton({
  section,
  value,
  onApply,
}: Props) {
  const generateAI = async () => {
    const res = await fetch("/api/ai", {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        section,
        text: value,
      }),
    });

    const data = await res.json();

    if (data.success) {
      onApply(data.result);
    }
  };

  return (
    <button
      onClick={generateAI}
      className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-2 text-white"
    >
      <Sparkles size={18} />

      AI Improve
    </button>
  );
}