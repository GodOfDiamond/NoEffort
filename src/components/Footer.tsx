import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 mt-24 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="text-white font-semibold text-lg mb-2">No Effort</div>
            <p className="text-white/50 text-sm">Minder wrijving. Meer intentie.</p>
          </div>
          <div>
            <div className="text-white/70 font-medium text-sm mb-3">Product</div>
            <ul className="space-y-2">
              <li><Link href="/wealth-lifestyle" className="text-white/50 hover:text-white text-sm transition-colors">NEW Lifestyle</Link></li>
              <li><Link href="/wealth-lifestyle/product" className="text-white/50 hover:text-white text-sm transition-colors">Wat is het?</Link></li>
              <li><Link href="/wealth-lifestyle/pricing" className="text-white/50 hover:text-white text-sm transition-colors">Prijzen</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white/70 font-medium text-sm mb-3">Bedrijf</div>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/50 hover:text-white text-sm transition-colors">Over ons</Link></li>
              <li><Link href="/learn" className="text-white/50 hover:text-white text-sm transition-colors">Learn</Link></li>
              <li><Link href="/security" className="text-white/50 hover:text-white text-sm transition-colors">Security</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-white/70 font-medium text-sm mb-3">Juridisch</div>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-white/50 hover:text-white text-sm transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="text-white/50 hover:text-white text-sm transition-colors">Voorwaarden</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-white/30 text-sm text-center">
          © {new Date().getFullYear()} No Effort. Alle rechten voorbehouden.
        </div>
      </div>
    </footer>
  );
}
