"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({
  question,
  answer,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mb-4 rounded-xl border border-sky-200 bg-white shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 text-left transition hover:bg-sky-50"
      >
        <h3 className="font-semibold text-gray-800">
          {question}
        </h3>

        {open ? (
          <ChevronUp className="text-sky-600" size={20} />
        ) : (
          <ChevronDown className="text-sky-600" size={20} />
        )}
      </button>

      {open && (
        <div className="border-t border-sky-100 bg-sky-50 p-4">
          <p className="text-gray-600">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}