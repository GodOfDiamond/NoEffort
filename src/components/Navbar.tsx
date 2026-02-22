"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isPricing = pathname === "/wealth-lifestyle/pricing";
  const ctaText = isPricing ? "Start 14 dagen gratis" : "Join waitlist";
  const ctaHref = isPricing ? "/wealth-lifestyle/pricing" : "/#waitlist";
  const isWealthLifestyle = pathname?.startsWith("/wealth-lifestyle");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/20 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="text-white font-semibold text-lg">No Effort</span>
          {isWealthLifestyle && (
            <span className="text-green-400 text-xs font-medium">NEW Lifestyle</span>
          )}
        </Link>
        <div className="hidden md:flex items-center gap-8">
          <Link href="/wealth-lifestyle/product" className="text-white/70 hover:text-white text-sm transition-colors">Product</Link>
          <Link href="/wealth-lifestyle/pricing" className="text-white/70 hover:text-white text-sm transition-colors">Pricing</Link>
          <Link href="/learn" className="text-white/70 hover:text-white text-sm transition-colors">Learn</Link>
          <Link href="/security" className="text-white/70 hover:text-white text-sm transition-colors">Security</Link>
        </div>
        <Link
          href={ctaHref}
          className="bg-green-400 text-black text-sm font-semibold px-4 py-2 rounded-lg hover:bg-green-300 transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </nav>
  );
}
