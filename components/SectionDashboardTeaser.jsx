import Link from 'next/link';
import { Button, Card, CardTitle } from '@appica/ui-react';
import { LayoutDashboard, ArrowRight, ShieldCheck, ShoppingBag, Sparkles } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function SectionDashboardTeaser() {
  const pillars = [
    { icon: ShieldCheck, title: "Commissions tracées", desc: "150 € / contrat · Virement le 05" },
    { icon: ShoppingBag, title: "Click & Collect", desc: "Scan QR Code ou code 4 chiffres" },
    { icon: Sparkles, title: "Tendances de quartier", desc: "Ce que vos clients cherchent" },
  ];

  return (
    <section id="section-dashboard-teaser" className="pt-8">

      {/* Section fusionnée : un seul en-tête (au lieu de deux titres qui se
          répétaient l'un l'autre) au-dessus de la carte teaser. */}
      <div className="bg-transparent py-16 sm:py-20 border-b border-border-subtle">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10 sm:mb-14 text-center max-w-4xl mx-auto">
            <div className="mb-6">
              <SectionEyebrow icon={LayoutDashboard}>
                ESPACE BURALISTE · SUIVI SIMPLIFIÉ
              </SectionEyebrow>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
              Un tableau de bord épuré, <span className="text-gradient-gold">compris en 1 coup d'œil.</span>
            </h2>

            <p className="text-lg sm:text-xl text-foreground-strong leading-relaxed font-normal">
              Zéro formation, zéro complication technique : pilotez vos commissions, vos commandes et vos tendances de quartier en 30 secondes par jour.
            </p>
          </div>

          <Card
            className="[--card-radius:2rem] shadow-xl"
            contentProps={{
              className:
                'relative overflow-hidden p-8 sm:p-12 lg:p-16 text-foreground-intense hover:border-primary-base/40 transition-colors',
            }}
          >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

              {/* Gauche : 3 Piliers */}
              <div className="lg:col-span-7 space-y-6">

                {/* 3 piliers compacts fond clair */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  {pillars.map((p) => {
                    const Icon = p.icon;
                    return (
                      <div
                        key={p.title}
                        className="p-4 rounded-2xl bg-primary-subtle/40 border border-primary-soft space-y-1 shadow-xs"
                      >
                        <Icon className="w-5 h-5 text-primary-base" />
                        <span className="text-sm font-bold text-foreground-intense block">{p.title}</span>
                        <span className="text-xs text-foreground-muted">{p.desc}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Droite : Bouton d'Action de Prestige vers la page interne */}
              <Card
                className="lg:col-span-5 [--card-radius:1.5rem] shadow-inner"
                contentProps={{
                  className:
                    'flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-surface-subtle space-y-6',
                }}
              >

                <div className="w-16 h-16 rounded-2xl bg-primary-subtle border border-primary-soft flex items-center justify-center text-primary-base shadow-sm">
                  <LayoutDashboard className="w-8 h-8" />
                </div>

                <div>
                  <CardTitle className="font-display font-black text-xl text-foreground-intense">
                    Explorer l'Espace Buraliste
                  </CardTitle>
                  <p className="text-xs sm:text-sm text-foreground-muted mt-1">
                    Accédez à la console de gestion en pleine immersion sur un espace dédié.
                  </p>
                </div>

                <Button
                  size="lg"
                  className="aventate-glow-button group w-full h-auto py-4 px-6 font-black text-base rounded-xl shadow-xl hover:scale-105 gap-3"
                  render={<Link href="/espace-buraliste" />}
                >
                  <span>Ouvrir l'Espace Buraliste</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>

            </div>

          </Card>

        </div>
      </div>

    </section>
  );
}
