import { Metadata } from "next";
import FeatureCards from "@/components/FeatureCards";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Wat is NEW Lifestyle? | No Effort",
  description: "NEW Lifestyle is een structuurtool voor mensen die bewuster willen leven met geld, gewoonten en groei.",
};

const features = [
  {
    title: "Financieel overzicht",
    description: "Een rustig, helder overzicht van je financiële situatie. Geen ruis, geen scores — gewoon inzicht.",
  },
  {
    title: "Gestructureerde momenten",
    description: "Challenges en routines die je helpen bewuster met geld om te gaan. Niet opgedrongen, maar ondersteunend.",
  },
  {
    title: "Voortgang inzichten",
    description: "Uitlegbare feedback over je gewoonten en groei. Je begrijpt altijd waarom iets groen of rood is.",
  },
  {
    title: "Privacy-first architectuur",
    description: "Je data is van jou. We verkopen niets, we tonen geen advertenties, we ontwerpen voor vertrouwen.",
  },
  {
    title: "Geen silo's",
    description: "Geld, gewoonten en groei samengevoegd in één interface. Niet drie losse apps, maar één rustig systeem.",
  },
  {
    title: "Calm design",
    description: "Bewust ontworpen om geen stress te veroorzaken. Rustige kleuren, duidelijke taal, geen dark patterns.",
  },
];

export default function ProductPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">Wat is NEW Lifestyle?</h1>
        <p className="text-xl text-white/60 mb-4 leading-relaxed">
          NEW Lifestyle is de eerste No Effort applicatie. Het staat voor No Effort Wealth — maar
          het gaat niet over rijkdom als doel. Het gaat over structuur als fundament.
        </p>
        <p className="text-lg text-white/50 mb-12 leading-relaxed">
          Veel mensen hebben goede intenties, maar de tools schieten tekort. Apps zijn versnipperd,
          feedback is onduidelijk, en het systeem werkt harder dan jij. NEW Lifestyle verwijdert die
          wrijving.
        </p>
        <FeatureCards cards={features} columns={3} />
        <div className="mt-12 text-center">
          <Link
            href="/wealth-lifestyle/pricing"
            className="inline-block bg-green-400 text-black font-semibold px-8 py-4 rounded-xl hover:bg-green-300 transition-colors"
          >
            Bekijk prijzen
          </Link>
        </div>
      </div>
    </div>
  );
}
