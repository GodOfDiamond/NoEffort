import { Metadata } from "next";
import PricingCardSinglePlan from "@/components/PricingCardSinglePlan";
import FAQAccordion from "@/components/FAQAccordion";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Prijzen — Eén plan, rustige groei | NEW Lifestyle",
  description: "14 dagen gratis proberen. Daarna €5,99 per maand. Opzeggen kan altijd.",
};

const features = [
  { text: "Rustig financieel overzicht" },
  { text: "Challenges en gestructureerde momenten" },
  { text: "Voortgang inzichten (uitlegbaar)" },
  { text: "Privacy-first, geen advertenties" },
  { text: "Alle toekomstige updates inbegrepen" },
];

const faqItems = [
  {
    question: "Hoe werkt de proefperiode?",
    answer: "Je start 14 dagen gratis. Geen creditcard nodig om te beginnen. Na 14 dagen word je automatisch €5,99 per maand gefactureerd, tenzij je opzegt.",
  },
  {
    question: "Kan ik op elk moment opzeggen?",
    answer: "Ja. Opzeggen kan altijd, direct vanuit de app. Je behoudt toegang tot het einde van je betaalde periode.",
  },
  {
    question: "Zijn er verborgen kosten?",
    answer: "Nee. €5,99 per maand is alles. Geen setup-kosten, geen premium features achter extra betaling, geen advertenties.",
  },
  {
    question: "Wat gebeurt er met mijn data als ik opzeg?",
    answer: "Je kunt je data exporteren voor je opzegt. Na opzegging wordt je data verwijderd conform ons privacybeleid.",
  },
];

export default function PricingPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-white mb-4">Eén plan. Rustige groei.</h1>
          <p className="text-xl text-white/60">Geen keuze-stress. Geen tier-vergelijkingstabellen.</p>
        </div>

        <PricingCardSinglePlan
          planName="NEW Lifestyle"
          trialText="14 dagen gratis"
          priceText="Daarna €5,99 / maand"
          features={features}
          ctaText="Start 14 dagen gratis"
          ctaHref="/#waitlist"
        />

        <div className="flex flex-wrap justify-center gap-8 mt-10 text-white/40 text-sm">
          <span>Opzeggen kan altijd</span>
          <span>Geen verborgen kosten</span>
          <span>Geen advertenties</span>
        </div>

        <FAQAccordion items={faqItems} title="Proefperiode & facturatie" />

        <div className="text-center mt-8 text-white/30 text-xs">
          Door je in te schrijven ga je akkoord met onze{" "}
          <Link href="/terms" className="underline hover:text-white/60">
            Algemene Voorwaarden
          </Link>{" "}
          en{" "}
          <Link href="/privacy" className="underline hover:text-white/60">
            Privacybeleid
          </Link>
          .
        </div>
      </div>
    </div>
  );
}
