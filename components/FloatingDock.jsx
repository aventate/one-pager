import Link from 'next/link';
import { Button, Navigation, NavigationList, NavigationItem, Separator } from '@appica/ui-react';
import { Monitor, Calculator, ShieldCheck, Phone, LayoutDashboard } from 'lucide-react';

export default function FloatingDock({ onOpenContact }) {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Navigation className="floating-dock px-3 py-2" aria-label="Navigation rapide">
      <NavigationList className="items-center gap-2 text-xs font-bold text-foreground-strong">
        <NavigationItem>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('section-02')}
            className="rounded-full font-bold"
          >
            <Monitor className="w-3.5 h-3.5 text-primary-base" />
            <span className="hidden sm:inline">Démo Live</span>
          </Button>
        </NavigationItem>

        <NavigationItem>
          <Button
            variant="ghost"
            size="sm"
            className="rounded-full text-primary-base font-extrabold hover:text-primary-strong"
            render={<Link href="/espace-buraliste" />}
          >
            <LayoutDashboard className="w-3.5 h-3.5 text-primary-base" />
            <span className="hidden sm:inline">Espace Buraliste</span>
          </Button>
        </NavigationItem>

        <NavigationItem>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('section-roi')}
            className="rounded-full font-bold text-foreground-strong"
          >
            <Calculator className="w-3.5 h-3.5 text-primary-base" />
            <span>Simulateur ROI</span>
          </Button>
        </NavigationItem>

        <NavigationItem>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => scrollTo('section-04')}
            className="rounded-full font-bold"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Tarifs</span>
          </Button>
        </NavigationItem>

        <NavigationItem className="flex items-center">
          <Separator orientation="vertical" className="h-4 mx-1" />
        </NavigationItem>

        <NavigationItem>
          <Button
            size="sm"
            onClick={onOpenContact}
            className="aventate-glow-button rounded-full font-black"
          >
            <Phone className="w-3 h-3" />
            <span>Thomas M.</span>
          </Button>
        </NavigationItem>
      </NavigationList>
    </Navigation>
  );
}
