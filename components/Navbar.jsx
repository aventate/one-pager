import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button, Navigation, NavigationList, NavigationItem, Separator } from '@appica/ui-react';
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

              <Separator orientation="vertical" className="h-8 hidden sm:block shrink-0" />

              {/* Logo officiel Aventate rouge avec mention partenaire */}
              <div className="flex items-center gap-2">
                <div className="hidden sm:flex flex-col text-left">
                  <span className="text-[9px] font-black uppercase tracking-wider text-foreground-subtle leading-none">
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
            <Navigation className="hidden lg:block" aria-label="Navigation principale">
              <NavigationList className="items-center gap-1 xl:gap-2">
                <NavigationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollTo('section-02')}
                    className="font-bold whitespace-nowrap"
                  >
                    <Monitor className="w-4 h-4 text-primary-base" />
                    <span>Démo du Site</span>
                  </Button>
                </NavigationItem>

                <NavigationItem>
                  <Button
                    variant="soft"
                    size="sm"
                    className="font-black whitespace-nowrap rounded-xl text-primary-base hover:text-primary-strong before:bg-primary-subtle before:border-primary-soft hover:before:bg-primary-soft/70 hover:before:border-primary-soft"
                    render={<Link href="/espace-buraliste" />}
                  >
                    <LayoutDashboard className="w-4 h-4" />
                    <span>Espace Buraliste</span>
                  </Button>
                </NavigationItem>

                <NavigationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollTo('section-roi')}
                    className="font-bold whitespace-nowrap"
                  >
                    <Calculator className="w-4 h-4 text-primary-base" />
                    <span>Simulateur de Gains</span>
                  </Button>
                </NavigationItem>

                <NavigationItem>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => scrollTo('section-04')}
                    className="font-bold whitespace-nowrap"
                  >
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <span>Offres &amp; Tarifs</span>
                  </Button>
                </NavigationItem>
              </NavigationList>
            </Navigation>

            {/* Boutons d'action */}
            <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
              <Button
                onClick={onOpenContact}
                className="aventate-glow-button font-black whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Être rappelé par Thomas M.</span>
                <ChevronRight className="w-4 h-4 opacity-80" />
              </Button>
            </div>

          </div>
        </div>
      </header>
    </>
  );
}
