import React from 'react';
import Link from 'next/link';
import { LayoutDashboard, ArrowRight, ShieldCheck, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';

export default function SectionDashboardTeaser() {
  return (
    <section id="section-dashboard-teaser" className="pt-8">
      
      {/* En-Tête Centré Concis Fond Lumineux */}
      <div className="bg-transparent text-foreground-intense py-16 sm:py-20 border-b border-border-subtle text-center">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft mb-6 mx-auto">
            <LayoutDashboard className="w-4 h-4 text-primary-base" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase">
              ESPACE BURALISTE · SUIVI SIMPLIFIÉ
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
            Pilotez votre commerce et vos commissions <span className="text-gradient-gold">en 30 secondes par jour.</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground-strong max-w-5xl mx-auto leading-relaxed font-normal">
            En complément de votre site vitrine, vous disposez d'un espace privé ultra-épuré pour suivre vos gains sans aucune charge mentale.
          </p>

        </div>
      </div>

      {/* Carte Teaser de Prestige Pleine Largeur Fond Blanc */}
      <div className="bg-transparent py-16 sm:py-20 border-b border-border-subtle">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="relative overflow-hidden bg-white text-foreground-intense p-8 sm:p-12 lg:p-16 rounded-[32px] border border-border-subtle shadow-xl hover:border-primary-base/40 transition-colors">
            
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              
              {/* Gauche : Argumentaire & 3 Piliers */}
              <div className="lg:col-span-7 space-y-6">
                
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-black uppercase tracking-wider">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span>DÉMO INTERACTIVE DISPONIBLE</span>
                </div>

                <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black text-foreground-intense tracking-tight leading-tight">
                  Un tableau de bord épuré, <span className="text-gradient-gold">compris en 1 coup d'œil.</span>
                </h3>

                <p className="text-base sm:text-lg text-foreground-strong leading-relaxed font-normal">
                  Zéro formation, zéro complication technique. Vous visualisez vos commissions partenaires créditées, vos commandes Click &amp; Collect prêtes et les tendances d'achats de votre quartier.
                </p>

                {/* 3 piliers compacts fond clair */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-2xl bg-primary-subtle/40 border border-primary-soft space-y-1 shadow-xs">
                    <ShieldCheck className="w-5 h-5 text-primary-base" />
                    <span className="text-sm font-bold text-foreground-intense block">Commissions tracées</span>
                    <span className="text-xs text-slate-500">150 € / contrat · Virement le 05</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-primary-subtle/40 border border-primary-soft space-y-1 shadow-xs">
                    <ShoppingBag className="w-5 h-5 text-primary-base" />
                    <span className="text-sm font-bold text-foreground-intense block">Click &amp; Collect</span>
                    <span className="text-xs text-slate-500">Scan QR Code ou code 4 chiffres</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-primary-subtle/40 border border-primary-soft space-y-1 shadow-xs">
                    <Sparkles className="w-5 h-5 text-primary-base" />
                    <span className="text-sm font-bold text-foreground-intense block">Radar Tendances</span>
                    <span className="text-xs text-slate-500">Ce que vos clients cherchent</span>
                  </div>
                </div>

              </div>

              {/* Droite : Bouton d'Action de Prestige vers la page interne */}
              <div className="lg:col-span-5 flex flex-col items-center justify-center text-center p-6 sm:p-8 bg-surface-subtle rounded-2xl border border-border-subtle space-y-6 shadow-inner">
                
                <div className="w-16 h-16 rounded-2xl bg-primary-subtle border border-primary-soft flex items-center justify-center text-primary-base shadow-sm">
                  <LayoutDashboard className="w-8 h-8" />
                </div>

                <div>
                  <h4 className="font-display font-black text-xl text-foreground-intense">
                    Explorer l'Espace Buraliste
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Accédez à la console de gestion en pleine immersion sur un espace dédié.
                  </p>
                </div>

                <Link
                  href="/espace-buraliste"
                  className="gold-glow-button w-full py-4 px-6 text-white font-black text-base rounded-xl shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 group"
                >
                  <span>Ouvrir l'Espace Buraliste</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

          </div>

        </div>
      </div>

    </section>
  );
}
