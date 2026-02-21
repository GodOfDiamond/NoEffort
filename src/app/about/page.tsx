import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over No Effort | No Effort",
  description: "Leer meer over het No Effort platform en onze missie.",
};

export default function AboutPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-8">Over No Effort</h1>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Onze missie</h2>
          <p className="text-white/60 leading-relaxed">
            No Effort is gebouwd op één overtuiging: goede intenties verdienen betere tools.
            We bouwen producten die de frictie wegnemen tussen wat je wil en wat je doet.
            Niet door het makkelijker te maken om fouten te negeren, maar door het makkelijker
            te maken om de juiste dingen te doen.
          </p>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8">
          <h2 className="text-2xl font-semibold text-white mb-4">Wat we geloven</h2>
          <ul className="space-y-3 text-white/60">
            <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5">—</span>Gedragsverandering vraagt structuur, geen motivatie-hype.</li>
            <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5">—</span>Privacy is een ontwerpprincipe, geen afterthought.</li>
            <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5">—</span>Vertrouwen verdien je door transparantie, niet door marketing.</li>
            <li className="flex items-start gap-3"><span className="text-green-400 mt-0.5">—</span>Rustige producten leiden tot betere beslissingen.</li>
          </ul>
        </div>

        <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
          <h2 className="text-2xl font-semibold text-white mb-4">De naam</h2>
          <p className="text-white/60 leading-relaxed">
            &ldquo;No Effort&rdquo; betekent niet dat je niets hoeft te doen. Het betekent dat ons platform
            geen extra wrijving toevoegt. The effort stays. The friction goes.
          </p>
        </div>
      </div>
    </div>
  );
}
