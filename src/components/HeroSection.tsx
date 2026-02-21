import Link from "next/link";
import WaitlistForm from "./WaitlistForm";

interface HeroSectionProps {
  headline: string;
  subheadline: string;
  microline?: string;
  ctaText?: string;
  showEmailInput?: boolean;
  secondaryLink?: { text: string; href: string };
}

export default function HeroSection({
  headline,
  subheadline,
  microline,
  ctaText = "Join waitlist",
  showEmailInput = false,
  secondaryLink,
}: HeroSectionProps) {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        {microline && (
          <p className="text-green-400 text-sm font-medium tracking-widest uppercase mb-6">
            {microline}
          </p>
        )}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
          {headline}
        </h1>
        <p className="text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed">
          {subheadline}
        </p>
        {showEmailInput ? (
          <div id="waitlist">
            <WaitlistForm ctaText={ctaText} />
            {secondaryLink && (
              <a href={secondaryLink.href} className="mt-4 inline-block text-white/50 hover:text-white text-sm transition-colors underline underline-offset-4">
                {secondaryLink.text}
              </a>
            )}
          </div>
        ) : (
          <Link
            href="/#waitlist"
            className="inline-block bg-green-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-green-300 transition-colors"
          >
            {ctaText}
          </Link>
        )}
      </div>
    </section>
  );
}
