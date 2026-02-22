import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import FeatureCards from "@/components/FeatureCards";
import TrustChips from "@/components/TrustChips";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "NEW Lifestyle — Structuur, zonder silo's | No Effort",
  description: "NEW Lifestyle brengt geld, intentie en momentum samen in één rustige plek.",
};

const pillars = [
  {
    title: "Clarity",
    description: "Helder inzicht in je financiële situatie, zonder ruis. Wat er is, is wat je ziet.",
  },
  {
    title: "Intent",
    description: "Zet intentie om in concrete stappen. Geen abstract doelen, maar een werkbaar ritme.",
  },
  {
    title: "Momentum",
    description: "Kleine, consistente beweging. Geen hypes, geen shortcuts — gewoon voortgang.",
  },
];

const whyCards = [
  {
    title: "Geen trading app",
    description: "NEW Lifestyle is geen beleggingstool. Het is een structuurtool voor mensen die bewuster willen leven met geld.",
  },
  {
    title: "Silo's verwijderd",
    description: "Geld, gewoonten en groei leven nu in aparte apps. NEW Lifestyle brengt ze samen in één rustige interface.",
  },
  {
    title: "Ontworpen voor vertrouwen",
    description: "Privacy-first, geen advertenties, geen donkere patronen. Alles is transparant en uitlegbaar.",
  },
];

const faqItems = [
  {
    question: "Voor wie is NEW Lifestyle?",
    answer: "Voor mensen die meer structuur willen in hun financiële leven, maar geen zin hebben in complexe spreadsheets of trading platforms. Je hoeft geen expert te zijn.",
  },
  {
    question: "Is het een budgetapp?",
    answer: "Niet alleen. NEW Lifestyle combineert financieel overzicht met gewoonten en voortgang. Het gaat over het hele plaatje, niet alleen de cijfers.",
  },
  {
    question: "Hoe zit het met mijn privacy?",
    answer: "We verkopen geen data. We tonen geen advertenties. We ontwerpen elke feature met privacy in gedachten. Lees onze Security pagina voor meer details.",
  },
  {
    question: "Wanneer is het beschikbaar?",
    answer: "We bouwen momenteel de eerste versie. Schrijf je in voor de waitlist en we laten je als eerste weten wanneer je kunt starten.",
  },
  {
    question: "Wat kost het na de proefperiode?",
    answer: "€5,99 per maand. Geen verborgen kosten, geen jaarlijkse lock-in. Opzeggen kan altijd.",
  },
];

export default function WealthLifestylePage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }}>
      <HeroSection
        headline="Structuur, zonder silo's."
        subheadline="NEW Lifestyle brengt geld, intentie en momentum samen in één rustige plek. Je doet nog steeds het werk — maar niet meer dubbel, niet meer versnipperd."
        microline="The effort stays. The friction goes."
        ctaText="Join waitlist"
        showEmailInput={true}
        secondaryLink={{ text: "Bekijk concept (1 min)", href: "#concept" }}
      />

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Drie pijlers</h2>
          <FeatureCards cards={pillars} columns={3} />
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Waarom NEW Lifestyle?</h2>
          <FeatureCards cards={whyCards} columns={3} />
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
