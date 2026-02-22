import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | No Effort",
  description: "De algemene voorwaarden van No Effort.",
};

export default function TermsPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Algemene Voorwaarden</h1>
        <p className="text-white/40 text-sm mb-12">Laatste update: 2024</p>

        <div className="space-y-6 text-white/60 leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Toepasselijkheid</h2>
            <p className="text-sm">Deze voorwaarden zijn van toepassing op het gebruik van de website noeffort.life en alle bijbehorende producten en diensten van No Effort.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Gebruik van de dienst</h2>
            <p className="text-sm">Je bent zelf verantwoordelijk voor het gebruik van No Effort producten. De dienst is uitsluitend bedoeld voor persoonlijk gebruik door meerderjarigen.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Abonnement &amp; betaling</h2>
            <p className="text-sm">Na de proefperiode van 14 dagen wordt het abonnement automatisch verlengd voor €5,99 per maand. Opzeggen kan altijd, direct vanuit de app.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Aansprakelijkheid</h2>
            <p className="text-sm">No Effort is een structuurtool, geen financieel adviesbureau. We zijn niet aansprakelijk voor financiële beslissingen die je maakt op basis van inzichten in de app.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
