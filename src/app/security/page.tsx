import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Security | No Effort",
  description: "Hoe No Effort omgaat met beveiliging en privacy.",
};

export default function SecurityPage() {
  return (
    <div style={{ backgroundColor: "#0a1a0f" }} className="pt-24 pb-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-4">Security</h1>
        <p className="text-xl text-white/60 mb-12">No Effort is ontworpen met veiligheid als fundament, niet als afterthought.</p>

        <div className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Encryptie</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Alle data wordt versleuteld in transit (TLS 1.3+) en at rest. We gebruiken industriestandaard
              encryptie voor alle gevoelige informatie.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Privacy-by-design</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              We verzamelen alleen data die noodzakelijk is voor de functionaliteit van het product.
              We verkopen geen data aan derde partijen. We tonen geen gepersonaliseerde advertenties.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Verantwoord melden (Responsible Disclosure)</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              Heb je een beveiligingsprobleem gevonden? Meld het ons via{" "}
              <a href="mailto:security@noeffort.life" className="text-green-400 hover:text-green-300">
                security@noeffort.life
              </a>
              . We nemen alle meldingen serieus en reageren binnen 48 uur.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <h2 className="text-white font-semibold text-lg mb-3">Geen dark patterns</h2>
            <p className="text-white/50 text-sm leading-relaxed">
              We ontwerpen geen interfaces die je misleiden. Opzeggen is net zo makkelijk als aanmelden.
              Alle kosten zijn transparant en vooraf duidelijk.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
