import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import TrustChips from "@/components/TrustChips";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "No Effort — Minder wrijving, meer intentie",
  description: "No Effort verwijdert de frictie tussen jouw geld, gewoonten en groei. Geen silo's. Één rustige plek.",
};

const productCards = [
  {
    title: "NEW Lifestyle",
    description: "No Effort Wealth — structuur voor geld, gewoonten en groei. Één rustige plek.",
    href: "/wealth-lifestyle",
    status: "available",
  },
  {
    title: "Coming soon",
    description: "Een tweede No Effort product. Details volgen.",
    href: "#",
    status: "soon",
  },
  {
    title: "Coming soon",
    description: "Meer producten in ontwikkeling. Blijf op de hoogte.",
    href: "#",
    status: "soon",
  },
];

const faqItems = [
  {
    question: "Wat is No Effort precies?",
    answer: "No Effort is een platform dat de frictie verwijdert tussen jouw geld, gewoonten en groei. We bouwen producten die rustig, betrouwbaar en transparant zijn — zonder hype, zonder donkere patronen.",
  },
  {
    question: "Wat betekent 'no friction'?",
    answer: "Frictie is de reden waarom goede intenties stranden. Dubbel werk, versnipperde tools, onduidelijke feedback. No Effort ontwerpt alles zodat je intentie direct kan omzetten in actie — zonder omwegen.",
  },
  {
    question: "Is No Effort een trading platform?",
    answer: "Nee. No Effort gaat niet over trading of snelle winsten. Het gaat over structuur, bewustzijn en rustige groei over tijd.",
  },
];

export default function HomePage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }}>
      <HeroSection
        headline="Minder wrijving. Meer intentie."
        subheadline="No Effort verwijdert de frictie tussen jouw geld, gewoonten en groei. Geen silo's. Één rustige plek."
        microline="The effort stays. The friction goes."
        ctaText="Join waitlist"
        showEmailInput={true}
      />

      {/* Product Cards */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Onze producten</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {productCards.map((card) => (
              <div key={card.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
                {card.status === "soon" ? (
                  <>
                    <div className="inline-block bg-white/10 text-white/40 text-xs px-3 py-1 rounded-full mb-4">Binnenkort</div>
                    <h3 className="text-white/40 font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-white/30 text-sm">{card.description}</p>
                  </>
                ) : (
                  <>
                    <div className="inline-block bg-green-400/10 text-green-400 text-xs px-3 py-1 rounded-full mb-4">Beschikbaar</div>
                    <h3 className="text-white font-semibold text-lg mb-2">{card.title}</h3>
                    <p className="text-white/50 text-sm mb-4">{card.description}</p>
                    <Link href={card.href} className="text-green-400 text-sm hover:text-green-300 transition-colors">
                      Meer informatie →
                    </Link>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <TrustChips />
        </div>
      </section>

      <FAQAccordion items={faqItems} />
    </div>
  );
}
