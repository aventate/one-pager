import React, { useState } from 'react';
import { Server, Rocket, Wrench, Shield, HardDrive, Database, RefreshCw, Activity, Headphones, Check, Clock, ArrowRight } from 'lucide-react';

export default function Section04OffreTarifs({ onOpenContact }) {
  const [selectedPlan, setSelectedPlan] = useState('monthly'); // 'monthly' | 'annual'

  const technicalPillars = [
    { icon: Server, title: "Hébergement professionnel", desc: "Serveurs ultra-rapides et sécurisés" },
    { icon: Rocket, title: "Mise en production", desc: "Configuration de votre nom de domaine" },
    { icon: Wrench, title: "Maintenance continue", desc: "Surveillance technique permanente" },
    { icon: Shield, title: "Sécurité & SSL", desc: "Certificats et protection anti-attaques" },
    { icon: HardDrive, title: "Sauvegardes automatiques", desc: "Données protégées chaque jour" },
    { icon: Database, title: "Base de données", desc: "Gestion des produits et stocks" },
    { icon: RefreshCw, title: "Mises à jour système", desc: "Compatibilité navigateurs & mobiles" },
    { icon: Activity, title: "Surveillance 24/7", desc: "Disponibilité garantie continue" },
    { icon: Headphones, title: "Support réactif", desc: "Équipe joignable et à votre écoute" },
  ];

  return (
    <section id="section-04" className="py-16 sm:py-20 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-Tête Centré */}
        <div className="mb-10 sm:mb-14 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft mb-6 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-base animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase leading-none">
              04 · VOTRE OFFRE TARIFAIRE
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground-intense mb-4">
            Une offre claire, adaptée à votre projet.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-foreground-strong leading-relaxed font-normal mx-auto max-w-5xl">
            Sa création initiale sur-mesure, puis sa gestion complète au quotidien avec un engagement de 24 mois.
          </p>
        </div>
          
        {/* 1. CARTE CRÉATION DE VOTRE SOLUTION */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-sm mb-12 text-center sm:text-left">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider mb-3">
                <span>CRÉATION DE VOTRE SOLUTION DIGITALE</span>
              </div>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                Site web et solution digitale de votre commerce
              </h3>
              <div className="mt-4 flex items-baseline justify-center sm:justify-start gap-3">
                <span className="text-sm text-slate-400 font-bold uppercase tracking-wider">À partir de</span>
                <span className="font-display text-5xl sm:text-6xl font-black text-foreground-intense">
                  5 000 €
                </span>
                <span className="text-sm font-bold text-slate-500">HT</span>
              </div>
            </div>

            <div className="max-w-xl bg-primary-subtle/50 p-6 rounded-2xl border border-primary-soft text-sm sm:text-base text-foreground-strong leading-relaxed font-medium">
              <span className="font-display font-bold text-primary-strong block mb-1 text-base sm:text-lg">
                Un budget adapté à votre projet
              </span>
              Plus votre projet est important, complexe et demande du temps de développement, plus le budget évolue en conséquence. Tout est cadré et validé dès le départ.
            </div>
          </div>
        </div>

        {/* 2. UNE SOLUTION GÉRÉE DE A À Z (9 PILIERS TECHNIQUES INTERVERTIS EN PREMIER) */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-sm mb-12">
          <div className="text-center mb-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider mb-3">
              <span>UNE SOLUTION GÉRÉE DE A À Z</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-foreground-intense tracking-tight">
              Toute la technique est prise en charge pour vous
            </h3>
            <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">
              Vous n’avez pas à vous occuper de la technique : elle est assurée et surveillée en continu par Services Indep.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {technicalPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-5 bg-primary-subtle/40 hover:bg-primary-subtle/80 rounded-2xl border border-primary-soft hover:border-primary-base/50 transition-all flex items-start gap-4"
                >
                  <div className="w-11 h-11 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                    <Icon className="w-5 h-5 text-primary-base" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-base text-foreground-intense">
                      {p.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-500 mt-0.5 leading-snug font-medium">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 3. LES DEUX FORMULES D'ABONNEMENT (COMPACTES COMME LA SECTION 5) */}
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-border-subtle shadow-md">
          <div className="text-center mb-8 max-w-5xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider mb-3">
              <span>ABONNEMENT · DEUX FORMULES DE PAIEMENT</span>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-foreground-intense tracking-tight">
              Choisissez votre rythme de paiement
            </h3>
            <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium">
              Gestion, maintenance et jusqu’à <strong className="text-foreground-intense font-bold">4 h de modifications incluses</strong> chaque mois.
            </p>
          </div>

          {/* Deux cartes condensées */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto items-stretch">
            
            {/* Option 1 : Mensuel */}
            <div
              onClick={() => setSelectedPlan('monthly')}
              className={`p-6 sm:p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between ${
                selectedPlan === 'monthly'
                  ? 'bg-white border-foreground-intense shadow-lg ring-2 ring-foreground-intense/10'
                  : 'bg-surface-subtle border-border-subtle hover:border-border-strong'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-bold text-slate-400">OPTION 1 :</span>
                    <span className="text-sm font-black uppercase tracking-wider text-foreground-intense">MENSUEL</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-foreground-intense">149 €</span>
                  <span className="text-sm font-bold text-slate-500">/ mois HT</span>
                </div>

                <div className="text-xs font-bold text-slate-500 mb-5">
                  Facturé chaque mois sans à-coup · Soit 3 576 € sur 24 mois
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-strong font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>4h de modifications mensuelles incluses</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Hébergement professionnel &amp; sécurité inclus</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Support réactif et dédié au quotidien</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Option 2 : Annuel (-20%) */}
            <div
              onClick={() => setSelectedPlan('annual')}
              className={`p-6 sm:p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
                selectedPlan === 'annual'
                  ? 'bg-white border-primary-base shadow-lg ring-2 ring-primary-soft'
                  : 'bg-surface-subtle border-border-subtle hover:border-border-strong'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-bold text-primary-base">OPTION 2 :</span>
                    <span className="text-sm font-black uppercase tracking-wider text-foreground-intense">ANNUEL</span>
                  </div>
                  <span className="bg-primary-base text-white text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider shadow-xs">
                    -20 %
                  </span>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-foreground-intense">1 430,40 €</span>
                  <span className="text-sm font-bold text-slate-500">/ an HT</span>
                </div>

                <div className="text-xs font-bold text-emerald-700 mb-5">
                  Soit 119,20 € / mois · <span className="underline">715,20 € économisés sur 24 mois</span>
                </div>

                <ul className="space-y-2.5 text-xs sm:text-sm text-foreground-strong font-medium">
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary-base shrink-0" />
                    <span>4h de modifications mensuelles incluses</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary-base shrink-0" />
                    <span>Tarif préférentiel garanti 24 mois</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-primary-base shrink-0" />
                    <span>Gestion technique prioritaire 24/7</span>
                  </li>
                </ul>
              </div>
            </div>

          </div>

          {/* Engagement */}
          <div className="mt-8 p-4 rounded-2xl bg-surface-subtle border border-border-subtle text-xs sm:text-sm text-foreground-strong flex items-center justify-center gap-3 shadow-xs text-center font-medium max-w-2xl mx-auto">
            <Clock className="w-4 h-4 text-primary-base shrink-0" />
            <span>
              <strong className="text-foreground-intense font-bold">Engagement de 24 mois minimum</strong>, renouvelable ensuite.
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
