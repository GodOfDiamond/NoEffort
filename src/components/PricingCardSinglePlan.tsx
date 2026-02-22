import Link from "next/link";

interface PricingFeature {
  text: string;
}

interface PricingCardProps {
  planName: string;
  trialText: string;
  priceText: string;
  features: PricingFeature[];
  ctaText: string;
  ctaHref: string;
}

export default function PricingCardSinglePlan({
  planName,
  trialText,
  priceText,
  features,
  ctaText,
  ctaHref,
}: PricingCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 max-w-md mx-auto">
      <div className="mb-6">
        <h3 className="text-white font-bold text-2xl mb-1">{planName}</h3>
        <div className="text-green-400 font-semibold text-lg">{trialText}</div>
        <div className="text-white/50 text-sm mt-1">{priceText}</div>
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
            <span className="text-green-400 mt-0.5">✓</span>
            {f.text}
          </li>
        ))}
      </ul>
      <Link
        href={ctaHref}
        className="block w-full text-center bg-green-400 text-black font-semibold py-3 rounded-xl hover:bg-green-300 transition-colors"
      >
        {ctaText}
      </Link>
    </div>
  );
}
