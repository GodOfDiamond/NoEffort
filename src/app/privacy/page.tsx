import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacybeleid | No Effort",
  description: "Het privacybeleid van No Effort.",
};

export default function PrivacyPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Privacybeleid</h1>
        <p className="text-white/40 text-sm mb-12">Laatste update: 2024</p>

        <div className="space-y-6 text-white/60 leading-relaxed">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Wie zijn wij?</h2>
            <p className="text-sm">No Effort is een product in ontwikkeling. Dit privacybeleid beschrijft hoe wij omgaan met persoonlijke gegevens van gebruikers van noeffort.life.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Welke data verzamelen we?</h2>
            <p className="text-sm">We verzamelen alleen data die noodzakelijk is: e-mailadressen van waitlist-inschrijvingen. We verzamelen geen data van derde partijen en we plaatsen geen tracking cookies.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Hoe gebruiken we je data?</h2>
            <p className="text-sm">Je e-mailadres wordt uitsluitend gebruikt om je op de hoogte te houden van No Effort. We verkopen geen data en delen niets met derde partijen zonder jouw toestemming.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Jouw rechten</h2>
            <p className="text-sm">Je hebt het recht op inzage, rectificatie en verwijdering van je gegevens. Stuur een e-mail naar privacy@noeffort.life voor verzoeken.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
