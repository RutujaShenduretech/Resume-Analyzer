type Props = {
  suggestion: string;
  onApply: () => void;
};

export default function AIPanel({
  suggestion,
  onApply,
}: Props) {
  return (
    <div className="rounded-2xl border p-5 bg-sky-50">
      <h2 className="font-bold text-lg">
        ✨ AI Recommendation
      </h2>

      <p className="mt-4 whitespace-pre-wrap">
        {suggestion}
      </p>

      <button
        onClick={onApply}
        className="mt-5 w-full rounded-xl bg-sky-500 py-2 text-white"
      >
        Apply Suggestion
      </button>
    </div>
  );
}