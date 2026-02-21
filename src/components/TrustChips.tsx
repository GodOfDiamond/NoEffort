interface TrustChipsProps {
  chips?: string[];
}

const defaultChips = [
  "Privacy-first",
  "No data selling",
  "Security-by-design",
  "Explainable progress",
  "No dark patterns",
];

export default function TrustChips({ chips = defaultChips }: TrustChipsProps) {
  return (
    <div className="flex flex-wrap justify-center gap-3 py-8">
      {chips.map((chip) => (
        <span
          key={chip}
          className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white/60 text-sm"
        >
          {chip}
        </span>
      ))}
    </div>
  );
}
