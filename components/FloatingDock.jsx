import React from 'react';
import Link from 'next/link';
import { Monitor, Calculator, ShieldCheck, Phone, LayoutDashboard } from 'lucide-react';

export default function FloatingDock({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="floating-dock px-3 py-2 flex items-center gap-2 text-xs font-bold text-foreground-strong">
      <button
        onClick={() => scrollTo('section-02')}
        className="px-3 py-1.5 rounded-full hover:text-foreground-intense hover:bg-surface-subtle transition-all flex items-center gap-1.5"
      >
        <Monitor className="w-3.5 h-3.5 text-primary-base" />
        <span className="hidden sm:inline">Démo Live</span>
      </button>

      <Link
        href="/espace-buraliste"
        className="px-3 py-1.5 rounded-full hover:text-primary-strong hover:bg-primary-subtle transition-all flex items-center gap-1.5 text-primary-base font-extrabold"
      >
        <LayoutDashboard className="w-3.5 h-3.5 text-primary-base" />
        <span className="hidden sm:inline">Espace Buraliste</span>
      </Link>

      <button
        onClick={() => scrollTo('section-roi')}
        className="px-3 py-1.5 rounded-full hover:text-foreground-intense hover:bg-surface-subtle transition-all flex items-center gap-1.5 text-foreground-strong"
      >
        <Calculator className="w-3.5 h-3.5 text-primary-base" />
        <span>Simulateur ROI</span>
      </button>

      <button
        onClick={() => scrollTo('section-04')}
        className="px-3 py-1.5 rounded-full hover:text-foreground-intense hover:bg-surface-subtle transition-all flex items-center gap-1.5"
      >
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
        <span className="hidden sm:inline">Tarifs</span>
      </button>

      <span className="w-px h-4 bg-border-subtle mx-1" />

      <button
        onClick={onOpenContact}
        className="gold-glow-button px-3.5 py-1.5 rounded-full text-white font-black flex items-center gap-1.5 shadow-sm"
      >
        <Phone className="w-3 h-3" />
        <span>Thomas M.</span>
      </button>
    </div>
  );
}
