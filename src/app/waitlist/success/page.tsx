import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Je staat op de lijst | No Effort",
  description: "Bedankt voor je aanmelding bij No Effort.",
};

export default function WaitlistSuccessPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-32 pb-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-12">
          <div className="w-16 h-16 rounded-full bg-green-400/10 border border-green-400/20 flex items-center justify-center mx-auto mb-6">
            <span className="text-green-400 text-2xl">✓</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Je staat op de lijst.</h1>
          <p className="text-white/60 text-lg mb-8 leading-relaxed">
            Bedankt voor je aanmelding. We laten je weten zodra NEW Lifestyle beschikbaar is.
            Geen spam, alleen relevante updates.
          </p>
          <Link
            href="/"
            className="inline-block text-white/50 hover:text-white text-sm transition-colors underline underline-offset-4"
          >
            Terug naar de homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
