import { useState } from 'react';
import { Alert, AlertIcon, AlertDescription, Badge, Card, CardTitle, RadioGroup, Radio } from '@appica/ui-react';
import { Server, Rocket, Wrench, Shield, HardDrive, Database, RefreshCw, Activity, Headphones, Check, Clock } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function Section04OffreTarifs() {
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

  const planCardClass = (isSelected, accent) =>
    `p-6 sm:p-8 rounded-2xl border-2 transition-all cursor-pointer flex flex-col justify-between relative overflow-hidden ${
      isSelected
        ? accent === 'primary'
          ? 'bg-white border-primary-base shadow-lg ring-2 ring-primary-soft'
          : 'bg-white border-foreground-intense shadow-lg ring-2 ring-foreground-intense/10'
        : 'bg-surface-subtle border-border-subtle hover:border-border-strong'
    }`;

  return (
    <section id="section-04" className="py-16 sm:py-20 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-Tête Centré */}
        <div className="mb-10 sm:mb-14 text-center max-w-7xl mx-auto">
          <div className="mb-6">
            <SectionEyebrow dot>04 · VOTRE OFFRE TARIFAIRE</SectionEyebrow>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground-intense mb-4">
            Une offre claire, adaptée à votre projet.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-foreground-strong leading-relaxed font-normal mx-auto max-w-6xl">
            Sa création initiale sur-mesure, puis sa gestion complète au quotidien avec un engagement de 24 mois.
          </p>
        </div>

        {/* 1. CARTE CRÉATION DE VOTRE SOLUTION */}
        <Card
          className="[--card-radius:1.5rem] shadow-sm mb-12"
          contentProps={{ className: 'p-6 sm:p-10 text-center sm:text-left' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div>
              <div className="mb-3">
                <SectionEyebrow tone="sm">CRÉATION DE VOTRE SOLUTION DIGITALE</SectionEyebrow>
              </div>
              <CardTitle className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                Site web et solution digitale de votre commerce
              </CardTitle>
              <div className="mt-4 flex items-baseline justify-center sm:justify-start gap-3">
                <span className="text-sm text-foreground-subtle font-bold uppercase tracking-wider">À partir de</span>
                <span className="font-display text-5xl sm:text-6xl font-black text-foreground-intense">
                  5 000 €
                </span>
                <span className="text-sm font-bold text-foreground-muted">HT</span>
              </div>
            </div>

            <div className="max-w-2xl bg-primary-subtle/50 p-6 rounded-2xl border border-primary-soft text-sm sm:text-base text-foreground-strong leading-relaxed font-medium">
              <span className="font-display font-bold text-primary-strong block mb-1 text-base sm:text-lg">
                Un budget adapté à votre projet
              </span>
              Plus votre projet est important, complexe et demande du temps de développement, plus le budget évolue en conséquence. Tout est cadré et validé dès le départ.
            </div>
          </div>
        </Card>

        {/* 2. UNE SOLUTION GÉRÉE DE A À Z (9 PILIERS TECHNIQUES INTERVERTIS EN PREMIER) */}
        <Card
          className="[--card-radius:1.5rem] shadow-sm mb-12"
          contentProps={{ className: 'p-6 sm:p-10' }}
        >
          <div className="text-center mb-8 max-w-6xl mx-auto">
            <div className="mb-3">
              <SectionEyebrow tone="sm">UNE SOLUTION GÉRÉE DE A À Z</SectionEyebrow>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-foreground-intense tracking-tight">
              Toute la technique est prise en charge pour vous
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-medium">
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
                    <p className="text-xs sm:text-sm text-foreground-muted mt-0.5 leading-snug font-medium">
                      {p.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Card>

        {/* 3. LES DEUX FORMULES D'ABONNEMENT (COMPACTES COMME LA SECTION 5) */}
        <Card
          className="[--card-radius:1.5rem] shadow-md"
          contentProps={{ className: 'p-6 sm:p-10' }}
        >
          <div className="text-center mb-8 max-w-6xl mx-auto">
            <div className="mb-3">
              <SectionEyebrow tone="sm">ABONNEMENT · DEUX FORMULES DE PAIEMENT</SectionEyebrow>
            </div>
            <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-foreground-intense tracking-tight">
              Choisissez votre rythme de paiement
            </h3>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-medium">
              Gestion, maintenance et jusqu’à <strong className="text-foreground-intense font-bold">4 h de modifications incluses</strong> chaque mois.
            </p>
          </div>

          {/* Deux cartes condensées — sélection au clavier via RadioGroup */}
          <RadioGroup
            value={selectedPlan}
            onValueChange={setSelectedPlan}
            orientation="horizontal"
            aria-label="Rythme de paiement de l'abonnement"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto items-stretch"
          >

            {/* Option 1 : Mensuel */}
            <label className={planCardClass(selectedPlan === 'monthly', 'dark')}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Radio value="monthly" />
                    <span className="text-sm font-mono font-bold text-foreground-subtle">OPTION 1 :</span>
                    <span className="text-sm font-black uppercase tracking-wider text-foreground-intense">MENSUEL</span>
                  </div>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-foreground-intense">149 €</span>
                  <span className="text-sm font-bold text-foreground-muted">/ mois HT</span>
                </div>

                <div className="text-xs font-bold text-foreground-muted mb-5">
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
            </label>

            {/* Option 2 : Annuel (-20%) */}
            <label className={planCardClass(selectedPlan === 'annual', 'primary')}>
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Radio value="annual" />
                    <span className="text-sm font-mono font-bold text-primary-base">OPTION 2 :</span>
                    <span className="text-sm font-black uppercase tracking-wider text-foreground-intense">ANNUEL</span>
                  </div>
                  <Badge variant="primary" className="text-xs font-black px-3 py-1 uppercase tracking-wider shadow-xs">
                    -20 %
                  </Badge>
                </div>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-display text-4xl sm:text-5xl font-black text-foreground-intense">1 430,40 €</span>
                  <span className="text-sm font-bold text-foreground-muted">/ an HT</span>
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
            </label>

          </RadioGroup>

          {/* Engagement */}
          <Alert
            layout="inline"
            className="mt-8 rounded-2xl bg-surface-subtle border border-border-subtle text-xs sm:text-sm text-foreground-strong justify-center gap-3 shadow-xs text-center font-medium max-w-3xl mx-auto"
          >
            <AlertIcon>
              <Clock className="w-4 h-4 text-primary-base shrink-0" />
            </AlertIcon>
            <AlertDescription className="text-foreground-strong">
              <strong className="text-foreground-intense font-bold">Engagement de 24 mois minimum</strong>, renouvelable ensuite.
            </AlertDescription>
          </Alert>
        </Card>

      </div>
    </section>
  );
}
