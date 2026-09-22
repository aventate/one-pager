import { Badge, Card, CardTitle, CardDescription, Separator } from '@appica/ui-react';
import { Shield, ShieldCheck, Building2, Landmark, HeartPulse, Umbrella, Scale, Briefcase, HeartHandshake, Users, LayoutGrid, CheckCircle2 } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function Section03Opportunites() {
  const offer = {
    kicker: "OFFRE PARTENAIRE",
    title: "ASSURANCE COMMERCE & PARTICULIERS",
    desc: "Un client ou confrère cherche une meilleure assurance sans y passer sa journée : vous transmettez son contact, un conseiller étudie sa situation et lui remet un devis gratuit, sans engagement.",
  };

  const particuliers = {
    desc: "Protéger son foyer, sa santé et ses revenus.",
    items: [
      { icon: Landmark, title: "Assurance emprunteur", desc: "Son crédit immobilier" },
      { icon: HeartPulse, title: "Santé & mutuelle", desc: "Lui et sa famille" },
      { icon: Umbrella, title: "Prévoyance", desc: "Ses revenus protégés" },
      { icon: Scale, title: "Protection juridique", desc: "Conseil et défense" },
      { icon: Building2, title: "Multirisque immeuble", desc: "Son bien immobilier" },
    ],
  };

  const professionnels = {
    desc: "Protéger son activité, lui-même et ses salariés.",
    items: [
      { icon: Briefcase, title: "Multirisques pro", desc: "Locaux et matériel" },
      { icon: HeartHandshake, title: "Prévoyance", desc: "Dirigeant et/ou salariés" },
      { icon: Users, title: "Santé", desc: "Dirigeant et/ou salariés" },
      { icon: LayoutGrid, title: "Autres produits", desc: "Un besoin spécifique" },
    ],
  };

  const trustPoints = ["Devis gratuit", "Sans engagement", "Rappel sous 24h ouvrées"];

  /* Les cinq étapes étaient codées en dur dans le JSX, en doublon d'un tableau
     `steps` obsolète qui n'était jamais lu. Le tableau ci-dessous reprend mot
     pour mot le texte qui s'affichait réellement. */
  const steps = [
    {
      num: "01",
      text: "Un client de votre commerce se montre intéressé",
      detail: "Au comptoir lors d'un échange ou via le formulaire connecté de votre site vitrine.",
      tag: "Détection locale",
    },
    {
      num: "02",
      text: "Vous transmettez la demande à Services Indep",
      detail: "En 3 clics sur votre Espace Buraliste ou par simple message à notre équipe.",
      tag: "Transmission 30 sec",
    },
    {
      num: "03",
      text: "Services Indep prend en charge et suit 100% du dossier",
      detail: "Prise de rendez-vous, conseil sur-mesure et formalités administratives intégrales.",
      tag: "Zéro paperasse",
    },
    {
      num: "04",
      text: "Le contrat est validé selon les conditions prévues",
      detail: "Le client signe son contrat sans que vous n'ayez jamais eu à relancer.",
      tag: "Dossier conclu",
    },
  ];

  return (
    <section id="section-03" className="py-16 sm:py-20 border-b border-border-subtle bg-[#fcfbf9]">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-Tête Centré */}
        <div className="mb-8 sm:mb-10 text-center max-w-7xl mx-auto">
          <div className="mb-4">
            <SectionEyebrow number="03">OPPORTUNITÉS COMPLÉMENTAIRES</SectionEyebrow>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-4">
            Développez de nouvelles opportunités <span className="text-gradient-aventate">avec vos clients.</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal mx-auto max-w-6xl">
            Un service premium à proposer à votre clientèle locale, sans avoir à gérer le dossier vous-même.
          </p>
        </div>

        {/* Offre partenaire unique : Assurance */}
        <Card
          className="[--card-radius:1.75rem] shadow-sm mb-8"
          contentProps={{ className: 'p-6 sm:p-10 lg:p-12' }}
        >
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-8 pb-8 border-b border-border-subtle">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-primary-subtle text-primary-base border border-primary-soft flex items-center justify-center shadow-xs shrink-0">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-base block mb-2">
                  {offer.kicker}
                </span>
                <CardTitle className="font-display font-black text-2xl sm:text-3xl text-foreground-intense mb-3">
                  {offer.title}
                </CardTitle>
                <CardDescription className="text-base sm:text-lg text-foreground-strong leading-relaxed font-normal max-w-3xl">
                  {offer.desc}
                </CardDescription>
              </div>
            </div>
            <Badge
              variant="success"
              className="px-3.5 py-1.5 text-xs font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200 shrink-0 self-start"
            >
              Commission : +150 € / contrat
            </Badge>
          </div>

          {/* Particuliers */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-1">
              <ShieldCheck className="w-5 h-5 text-primary-base shrink-0" />
              <h3 className="font-display font-black text-xl text-foreground-intense">Particuliers</h3>
            </div>
            <p className="text-sm text-foreground-muted mb-6">{particuliers.desc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
              {particuliers.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-primary-subtle/30 border border-primary-soft/70 hover:border-primary-base/40 hover:bg-primary-subtle/50 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center mb-3 shadow-xs">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-foreground-intense leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground-muted mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Professionnels */}
          <div>
            <div className="flex items-center gap-3 mb-1">
              <Briefcase className="w-5 h-5 text-primary-base shrink-0" />
              <h3 className="font-display font-black text-xl text-foreground-intense">Professionnels</h3>
            </div>
            <p className="text-sm text-foreground-muted mb-6">{professionnels.desc}</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {professionnels.items.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="p-4 rounded-2xl bg-primary-subtle/30 border border-primary-soft/70 hover:border-primary-base/40 hover:bg-primary-subtle/50 transition-all"
                  >
                    <div className="w-9 h-9 rounded-xl bg-white border border-primary-soft text-primary-base flex items-center justify-center mb-3 shadow-xs">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h4 className="font-display font-bold text-sm text-foreground-intense leading-snug">
                      {item.title}
                    </h4>
                    <p className="text-xs text-foreground-muted mt-0.5 leading-snug">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Bandeau de réassurance */}
          <Separator className="my-10" />
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trustPoints.map((point) => (
              <div key={point} className="inline-flex items-center gap-2 text-sm font-bold text-foreground-strong">
                <CheckCircle2 className="w-4 h-4 text-primary-base shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>
        </Card>

        {/* Déroulement 5 étapes : version compacte pour ne pas allonger
            inutilement la section (fini les gros connecteurs verticaux). */}
        <Card
          className="[--card-radius:2rem] shadow-md"
          contentProps={{ className: 'p-6 sm:p-10 lg:p-12 relative overflow-hidden' }}
        >
          <div className="text-center mb-8">
            <div className="mb-2">
              <SectionEyebrow tone="sm">COMMENT ÇA FONCTIONNE</SectionEyebrow>
            </div>
            <h4 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
              Un processus fluide en 5 étapes
            </h4>
          </div>

          <div className="space-y-2.5 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group bg-white hover:bg-primary-subtle/30 p-4 sm:p-5 rounded-2xl border border-primary-soft/80 hover:border-primary-base/50 transition-all duration-300 flex items-center gap-4 sm:gap-6"
              >
                <Badge
                  variant="soft"
                  className="font-mono font-black text-xs px-3 py-1.5 rounded-xl bg-foreground-intense text-white before:bg-transparent shadow-xs shrink-0"
                >
                  {step.num}
                </Badge>
                <div className="flex-1 min-w-0">
                  <span className="font-display font-bold text-sm sm:text-base text-foreground-intense block">
                    {step.text}
                  </span>
                  <span className="text-xs text-foreground-muted font-medium">
                    {step.detail}
                  </span>
                </div>
              </div>
            ))}

            {/* Étape 05 : LE POINT D'ORGUE MIS EN VALEUR */}
            <div className="group bg-gradient-to-r from-primary-subtle/70 via-white to-primary-subtle/40 p-4 sm:p-5 rounded-2xl border-2 border-primary-base flex items-center gap-4 sm:gap-6">
              <Badge
                variant="soft"
                className="font-mono font-black text-xs px-3 py-1.5 rounded-xl bg-foreground-intense text-white before:bg-transparent shadow-xs shrink-0"
              >
                05
              </Badge>
              <div className="flex-1 min-w-0">
                <span className="font-display font-bold text-sm sm:text-base text-foreground-intense block">
                  Une commission est reversée au dirigeant
                </span>
                <span className="text-xs text-foreground-muted font-medium block">
                  Revenu passif viré sur le compte de votre société (le 05 du mois).
                </span>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
