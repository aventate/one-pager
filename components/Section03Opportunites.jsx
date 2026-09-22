import { Badge, Card, CardTitle, CardDescription } from '@appica/ui-react';
import { Shield, Bell, ArrowDown } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function Section03Opportunites() {
  const partnerOffers = [
    {
      icon: Shield,
      kicker: "OFFRE PARTENAIRE 01",
      title: "ASSURANCE COMMERCE & PARTICULIERS",
      desc: "Un client ou confrère recherche une assurance multirisque, une flotte pro ou une complémentaire santé : vous transmettez son contact, Services Indep s'occupe de tout.",
    },
    {
      icon: Bell,
      kicker: "OFFRE PARTENAIRE 02",
      title: "ALARME & TÉLÉSURVEILLANCE",
      desc: "Même principe pour la sécurité des locaux commerciaux et des résidences privées : vous signalez l'intérêt, Services Indep réalise l'étude et finalise le dossier.",
    },
  ];

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
        <div className="mb-12 sm:mb-16 text-center max-w-7xl mx-auto">
          <div className="mb-6">
            <SectionEyebrow dot>03 · OPPORTUNITÉS COMPLÉMENTAIRES</SectionEyebrow>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
            Développez de nouvelles opportunités <span className="text-gradient-aventate">avec vos clients.</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal mx-auto max-w-6xl">
            Deux services premium à proposer à votre clientèle locale, sans avoir à gérer le dossier vous-même.
          </p>
        </div>

        {/* Les 2 offres partenaires */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
          {partnerOffers.map((offer) => {
            const Icon = offer.icon;
            return (
              <Card
                key={offer.kicker}
                className="[--card-radius:1.75rem] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
                contentProps={{
                  className:
                    'p-8 sm:p-12 border-2 border-border-subtle group-hover:border-primary-base transition-colors flex flex-col justify-between relative overflow-hidden',
                }}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary-subtle text-primary-base border border-primary-soft flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8" />
                    </div>
                    <Badge
                      variant="success"
                      className="px-3.5 py-1.5 text-xs font-black uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200"
                    >
                      Commission : +150 € / contrat
                    </Badge>
                  </div>

                  <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-base block mb-2">
                    {offer.kicker}
                  </span>
                  <CardTitle className="font-display font-black text-2xl sm:text-3xl text-foreground-intense mb-3">
                    {offer.title}
                  </CardTitle>
                  <CardDescription className="text-base sm:text-lg text-foreground-strong leading-relaxed font-normal">
                    {offer.desc}
                  </CardDescription>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Déroulement 5 étapes épuré & mis en valeur */}
        <Card
          className="[--card-radius:2rem] shadow-md mb-20"
          contentProps={{ className: 'p-8 sm:p-14 lg:p-16 relative overflow-hidden' }}
        >
          <div className="text-center mb-12">
            <div className="mb-3">
              <SectionEyebrow tone="sm">COMMENT ÇA FONCTIONNE</SectionEyebrow>
            </div>
            <h4 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-foreground-intense">
              Un processus fluide en 5 étapes
            </h4>
            <p className="text-sm sm:text-base text-foreground-muted mt-2 font-medium max-w-3xl mx-auto">
              Chaque étape est tracée en temps réel dans votre Espace Buraliste pour une transparence absolue.
            </p>
          </div>

          <div className="space-y-4 max-w-6xl mx-auto">
            {steps.map((step) => (
              <div key={step.num}>
                <div className="group bg-white hover:bg-primary-subtle/30 p-6 sm:p-7 rounded-2xl border border-primary-soft/80 hover:border-primary-base/50 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5">
                  <div className="flex items-center gap-5 sm:gap-7">
                    <Badge
                      variant="soft"
                      className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-foreground-intense text-white before:bg-transparent shadow-xs shrink-0"
                    >
                      {step.num}
                    </Badge>
                    <div>
                      <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                        {step.text}
                      </span>
                      <span className="text-xs sm:text-sm text-foreground-muted font-medium">
                        {step.detail}
                      </span>
                    </div>
                  </div>
                  <SectionEyebrow
                    tone="sm"
                    className="hidden sm:inline-flex self-end md:self-auto normal-case tracking-normal font-bold"
                  >
                    {step.tag}
                  </SectionEyebrow>
                </div>

                {/* Connecteur animé */}
                <div className="flex flex-col items-center justify-center py-1">
                  <div className="w-0.5 h-3 bg-gradient-to-b from-primary-base/50 to-primary-base/20" />
                  <ArrowDown className="w-4 h-4 text-primary-base/70 animate-bounce-gentle" />
                </div>
              </div>
            ))}

            {/* Étape 05 : LE POINT D'ORGUE MIS EN VALEUR */}
            <div className="group bg-gradient-to-r from-primary-subtle/70 via-white to-primary-subtle/40 p-6 sm:p-7 rounded-2xl border-2 border-primary-base shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5">
              <div className="flex items-center gap-5 sm:gap-7">
                <Badge
                  variant="soft"
                  className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-foreground-intense text-white before:bg-transparent shadow-xs shrink-0"
                >
                  05
                </Badge>
                <div>
                  <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                    Une commission est reversée au dirigeant
                  </span>
                  <span className="text-xs sm:text-sm text-foreground-muted font-medium mt-0.5 block">
                    Un revenu passif direct viré sur le compte de votre société (virement le 05 du mois).
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 self-end md:self-auto shrink-0 mt-4 md:mt-0">
                <SectionEyebrow tone="sm" className="hidden sm:inline-flex px-4 py-2 rounded-xl shadow-xs">
                  Revenu Passif
                </SectionEyebrow>
                <Badge
                  variant="primary"
                  className="font-display font-black text-base sm:text-lg px-4 py-2 rounded-xl shadow-md"
                >
                  +150 € net
                </Badge>
              </div>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
