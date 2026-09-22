import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Phone, Calculator, Monitor, ChevronRight, ShieldCheck, LayoutDashboard } from 'lucide-react';

export default function Navbar({ onOpenContact }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Barre de progression de lecture toujours visible */}
      <div id="scroll-progress" style={{ width: `${scrollProgress}%` }} />

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          scrolled
            ? '-translate-y-full opacity-0 pointer-events-none'
            : 'translate-y-0 opacity-100 bg-white/92 backdrop-blur-xl text-foreground-intense py-3.5 border-b border-border-subtle shadow-xs'
        }`}
      >
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Alliance des deux logos officiels pour fond clair */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              {/* Logo officiel Services Indep */}
              <div className="flex items-center gap-2">
                <img
                  src="/logos/logo-services-indep-dark-cropped.png"
                  alt="Services Indep"
                  className="h-10 sm:h-12 md:h-14 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-sm shrink-0"
                />
              </div>

              <div className="h-8 w-px bg-slate-200 hidden sm:block shrink-0" />

              {/* Logo officiel Aventate rouge avec mention partenaire */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 leading-none">
                    Opéré par
                  </span>
                  <img
                    src="/logos/logo-aventate-rouge.svg"
                    alt="Aventate"
                    className="h-5 sm:h-6 md:h-7 w-auto object-contain transition-transform hover:scale-105 filter drop-shadow-sm shrink-0 mt-1"
                  />
                </div>
                <img
                  src="/logos/logo-aventate-rouge.svg"
                  alt="Aventate"
                  className="h-5 sm:h-6 w-auto object-contain sm:hidden shrink-0"
                />
              </div>
            </div>

            {/* Navigation 4 piliers */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2 text-xs sm:text-sm font-bold text-slate-700">
              <button
                onClick={() => scrollTo('section-02')}
                className="px-3 py-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Monitor className="w-4 h-4 text-[#c6283c]" />
                <span>Démo du Site</span>
              </button>

              <Link
                href="/espace-buraliste"
                className="px-3 py-2 rounded-xl bg-[#f9e9eb] border border-[#f4d4d8] text-[#c6283c] hover:bg-[#f4d4d8]/70 transition-all flex items-center gap-2 whitespace-nowrap font-black"
              >
                <LayoutDashboard className="w-4 h-4 text-[#c6283c]" />
                <span>Espace Buraliste</span>
              </Link>

              <button
                onClick={() => scrollTo('section-roi')}
                className="px-3 py-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <Calculator className="w-4 h-4 text-[#c6283c]" />
                <span>Simulateur de Gains</span>
              </button>

              <button
                onClick={() => scrollTo('section-04')}
                className="px-3 py-2 rounded-xl hover:text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-2 whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Offres &amp; Tarifs</span>
              </button>
            </nav>

            {/* Boutons d'action */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <button
                onClick={onOpenContact}
                className="gold-glow-button inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-black text-white rounded-xl shadow-md transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Être rappelé par Thomas M.</span>
                <ChevronRight className="w-4 h-4 opacity-80" />
              </button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
