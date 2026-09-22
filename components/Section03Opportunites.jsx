import React from 'react';
import { Shield, Bell, ArrowDown, User, Send, FileCheck, Check, DollarSign, Briefcase } from 'lucide-react';

export default function Section03Opportunites() {
  const steps = [
    {
      num: "01",
      icon: User,
      text: "Un client de votre commerce se montre intéressé",
      detail: "Au comptoir ou via le formulaire connecté sur votre site vitrine",
    },
    {
      num: "02",
      icon: Send,
      text: "Vous transmettez la demande à Services Indep",
      detail: "En 3 clics sur votre tableau de bord ou par simple message",
    },
    {
      num: "03",
      icon: Briefcase,
      text: "Services Indep prend en charge et suit le dossier",
      detail: "Nous gérons 100% des rendez-vous et de la paperasse",
    },
    {
      num: "04",
      icon: FileCheck,
      text: "Le dossier est validé, selon les conditions prévues",
      detail: "Le contrat est conclu sans que vous n'ayez eu à relancer",
    },
    {
      num: "05",
      icon: DollarSign,
      text: "Une commission est reversée au dirigeant",
      detail: "Un revenu passif direct viré sur le compte de votre société",
      highlight: true,
    },
  ];

  return (
    <section id="section-03" className="py-16 sm:py-20 border-b border-border-subtle bg-[#fcfbf9]">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-Tête Centré */}
        <div className="mb-12 sm:mb-16 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft mb-6 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-base animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase leading-none">
              03 · OPPORTUNITÉS COMPLÉMENTAIRES
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
            Développez de nouvelles opportunités <span className="text-gradient-aventate">avec vos clients.</span>
          </h2>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mx-auto max-w-5xl">
            Deux services premium à proposer à votre clientèle locale, sans avoir à gérer le dossier vous-même.
          </p>
        </div>
          
          {/* Les 2 offres partenaires */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mb-20">
            
            {/* Carte ASSURANCE */}
            <div className="bg-white p-8 sm:p-12 rounded-[28px] border-2 border-border-subtle shadow-sm flex flex-col justify-between hover:border-primary-base hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-subtle text-primary-base border border-primary-soft flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider">
                    Commission : +150 € / contrat
                  </span>
                </div>

                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-base block mb-2">
                  OFFRE PARTENAIRE 01
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense mb-3">
                  ASSURANCE COMMERCE &amp; PARTICULIERS
                </h3>
                <p className="text-base sm:text-lg text-foreground-strong leading-relaxed font-normal">
                  Un client ou confrère recherche une assurance multirisque, une flotte pro ou une complémentaire santé : vous transmettez son contact, Services Indep s'occupe de tout.
                </p>
              </div>
            </div>

            {/* Carte ALARME / TÉLÉSURVEILLANCE */}
            <div className="bg-white p-8 sm:p-12 rounded-[28px] border-2 border-border-subtle shadow-sm flex flex-col justify-between hover:border-primary-base hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group relative overflow-hidden">
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-primary-subtle text-primary-base border border-primary-soft flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-300">
                    <Bell className="w-8 h-8" />
                  </div>
                  <span className="px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-black uppercase tracking-wider">
                    Commission : +150 € / contrat
                  </span>
                </div>

                <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-base block mb-2">
                  OFFRE PARTENAIRE 02
                </span>
                <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense mb-3">
                  ALARME &amp; TÉLÉSURVEILLANCE
                </h3>
                <p className="text-base sm:text-lg text-foreground-strong leading-relaxed font-normal">
                  Même principe pour la sécurité des locaux commerciaux et des résidences privées : vous signalez l'intérêt, Services Indep réalise l'étude et finalise le dossier.
                </p>
              </div>
            </div>

          </div>

          {/* Déroulement 5 étapes épuré & mis en valeur */}
          <div className="bg-white p-8 sm:p-14 lg:p-16 rounded-[32px] border border-border-subtle shadow-md mb-20 relative overflow-hidden">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider mb-3">
                <span>COMMENT ÇA FONCTIONNE</span>
              </div>
              <h4 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-foreground-intense">
                Un processus fluide en 5 étapes
              </h4>
              <p className="text-sm sm:text-base text-slate-500 mt-2 font-medium max-w-2xl mx-auto">
                Chaque étape est tracée en temps réel dans votre Espace Buraliste pour une transparence absolue.
              </p>
            </div>

            <div className="space-y-4 max-w-5xl mx-auto">
              
              {/* Étape 01 */}
              <div className="group bg-white hover:bg-primary-subtle/30 p-6 sm:p-7 rounded-2xl border border-primary-soft/80 hover:border-primary-base/50 hover:shadow-md transition-all duration-300 flex items-center justify-between gap-5">
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xs shrink-0">
                    01
                  </span>
                  <div>
                    <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                      Un client de votre commerce se montre intéressé
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      Au comptoir lors d'un échange ou via le formulaire connecté de votre site vitrine.
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-bold px-3 py-1.5 rounded-full bg-primary-subtle text-primary-strong border border-primary-soft whitespace-nowrap">
                  Détection locale
                </span>
              </div>

              {/* Connecteur animé */}
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-0.5 h-3 bg-gradient-to-b from-primary-base/50 to-primary-base/20" />
                <ArrowDown className="w-4 h-4 text-primary-base/70 animate-bounce-gentle" />
              </div>

              {/* Étape 02 */}
              <div className="group bg-white hover:bg-primary-subtle/30 p-6 sm:p-7 rounded-2xl border border-primary-soft/80 hover:border-primary-base/50 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xs shrink-0">
                    02
                  </span>
                  <div>
                    <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                      Vous transmettez la demande à Services Indep
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      En 3 clics sur votre Espace Buraliste ou par simple message à notre équipe.
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-bold px-3 py-1.5 rounded-full bg-primary-subtle text-primary-strong border border-primary-soft whitespace-nowrap self-end md:self-auto">
                  Transmission 30 sec
                </span>
              </div>

              {/* Connecteur animé */}
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-0.5 h-3 bg-gradient-to-b from-primary-base/50 to-primary-base/20" />
                <ArrowDown className="w-4 h-4 text-primary-base/70 animate-bounce-gentle" />
              </div>

              {/* Étape 03 */}
              <div className="group bg-white hover:bg-primary-subtle/30 p-6 sm:p-7 rounded-2xl border border-primary-soft/80 hover:border-primary-base/50 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xs shrink-0">
                    03
                  </span>
                  <div>
                    <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                      Services Indep prend en charge et suit 100% du dossier
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      Prise de rendez-vous, conseil sur-mesure et formalités administratives intégrales.
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-bold px-3 py-1.5 rounded-full bg-primary-subtle text-primary-strong border border-primary-soft whitespace-nowrap self-end md:self-auto">
                  Zéro paperasse
                </span>
              </div>

              {/* Connecteur animé */}
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-0.5 h-3 bg-gradient-to-b from-primary-base/50 to-primary-base/20" />
                <ArrowDown className="w-4 h-4 text-primary-base/70 animate-bounce-gentle" />
              </div>

              {/* Étape 04 */}
              <div className="group bg-white hover:bg-primary-subtle/30 p-6 sm:p-7 rounded-2xl border border-primary-soft/80 hover:border-primary-base/50 hover:shadow-md transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xs shrink-0">
                    04
                  </span>
                  <div>
                    <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                      Le contrat est validé selon les conditions prévues
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-medium">
                      Le client signe son contrat sans que vous n'ayez jamais eu à relancer.
                    </span>
                  </div>
                </div>
                <span className="hidden sm:inline-flex text-xs font-bold px-3 py-1.5 rounded-full bg-primary-subtle text-primary-strong border border-primary-soft whitespace-nowrap self-end md:self-auto">
                  Dossier conclu
                </span>
              </div>

              {/* Connecteur animé vers le payoff */}
              <div className="flex flex-col items-center justify-center py-1">
                <div className="w-0.5 h-3 bg-gradient-to-b from-primary-base/50 to-primary-base/20" />
                <ArrowDown className="w-4 h-4 text-primary-base/70 animate-bounce-gentle" />
              </div>

              {/* Étape 05 : LE POINT D'ORGUE MIS EN VALEUR */}
              <div className="group bg-gradient-to-r from-primary-subtle/70 via-white to-primary-subtle/40 p-6 sm:p-7 rounded-2xl border-2 border-primary-base shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-5">
                <div className="flex items-center gap-5 sm:gap-7">
                  <span className="font-mono font-black text-xs sm:text-sm px-3.5 py-2 rounded-xl bg-slate-900 text-white shadow-xs shrink-0">
                    05
                  </span>
                  <div>
                    <span className="font-display font-bold text-base sm:text-lg text-foreground-intense block">
                      Une commission est reversée au dirigeant
                    </span>
                    <span className="text-xs sm:text-sm text-slate-600 font-medium mt-0.5 block">
                      Un revenu passif direct viré sur le compte de votre société (virement le 05 du mois).
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 self-end md:self-auto shrink-0 mt-4 md:mt-0">
                  <span className="hidden sm:inline-flex text-xs sm:text-sm font-black uppercase tracking-wider text-primary-strong bg-primary-subtle px-4 py-2 rounded-xl border border-primary-soft shadow-xs whitespace-nowrap">
                    Revenu Passif
                  </span>
                  <span className="font-display font-black text-base sm:text-lg text-white bg-primary-base px-4 py-2 rounded-xl shadow-md whitespace-nowrap">
                    +150 € net
                  </span>
                </div>
              </div>

            </div>

          </div>
        </div>

    </section>
  );
}
