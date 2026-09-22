import React from 'react';
import { Search, Clock, Package, Sparkles, HeartHandshake, Layers, ArrowRight, Globe, Compass, UserCheck, CheckCircle2, TrendingDown, TrendingUp, Check, X } from 'lucide-react';

export default function Section01Presence() {
  const cards = [
    {
      icon: Search,
      title: "Trouvé sur Google",
      desc: "Vos clients locaux vous trouvent dès qu'ils cherchent près de chez eux.",
    },
    {
      icon: Clock,
      title: "Ouvert 24 h/24",
      desc: "Horaires, adresse et coordonnées consultables même rideau baissé.",
    },
    {
      icon: Package,
      title: "Vos produits et services",
      desc: "Votre offre présentée clairement, sans aucun jargon technique.",
    },
    {
      icon: Sparkles,
      title: "Une image soignée",
      desc: "Un site soigné, à l’image d’un commerce moderne et bien tenu.",
    },
    {
      icon: HeartHandshake,
      title: "La confiance avant la visite",
      desc: "Le client sait où il va et se déplace en confiance chez vous.",
    },
    {
      icon: Layers,
      title: "Tout au même endroit",
      desc: "Une seule adresse qui centralise toutes vos informations utiles.",
    },
  ];

  const steps = [
    {
      num: "01",
      icon: Globe,
      name: "Internet & Google",
      role: "Le client cherche",
      detail: "Recherche sur smartphone près de chez lui",
    },
    {
      num: "02",
      icon: Compass,
      name: "Votre site web",
      role: "Il vous trouve",
      detail: "Horaires à jour et informations claires",
    },
    {
      num: "03",
      icon: Layers,
      name: "Vos informations",
      role: "Il découvre votre offre",
      detail: "Produits, services et disponibilités",
    },
    {
      num: "04",
      icon: UserCheck,
      name: "Votre commerce",
      role: "Il pousse votre porte",
      detail: "Visite en boutique et achat en caisse",
    },
  ];

  return (
    <section id="section-01" className="pt-20 sm:pt-24 border-b border-border-subtle bg-white">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* En-Tête Centré */}
        <div className="mb-12 sm:mb-16 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft mb-6 shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-base animate-pulse shrink-0" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase leading-none">
              01 · VOTRE COMMERCE SUR INTERNET
            </span>
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
            Votre commerce doit aussi <span className="text-gradient-aventate">exister sur Internet.</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed font-normal mb-10 mx-auto max-w-5xl">
            Aujourd’hui, un client cherche, compare et se renseigne sur Internet avant même de pousser la porte d’un commerce. <strong>Votre site devient votre vitrine digitale</strong> : il présente votre commerce, vos services et vos informations pratiques, à toute heure.
          </p>

          {/* Les 3 garanties parfaitement alignées */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 pt-8 border-t border-slate-200 text-base sm:text-lg text-slate-700 font-bold mx-auto">
            <div className="inline-flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
              <span className="leading-tight">Visible sur Google Maps 24h/24</span>
            </div>
            <div className="inline-flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
              <span className="leading-tight">Zéro maintenance pour vous</span>
            </div>
            <div className="inline-flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
              <span className="leading-tight">Le client vous trouve facilement</span>
            </div>
          </div>
        </div>

      </div>

      {/* 2. Comparatif Neuro-Vente Expansif Fond Clair */}
      <div className="bg-slate-50 py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-slate-200">
        <div className="w-full max-w-[1780px] mx-auto">
          
          <div className="text-center mb-14">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-slate-500 block mb-3">
              LA RÉALITÉ DU MARCHÉ
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-slate-900 tracking-tight">
              Pourquoi l'absence de site représente un manque à gagner chaque mois
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Sans vitrine */}
            <div className="p-10 sm:p-14 rounded-3xl bg-white border-2 border-rose-200 text-slate-700 shadow-md">
              <div className="flex items-center gap-3 font-black text-base sm:text-lg uppercase tracking-wider mb-8 text-rose-600">
                <TrendingDown className="w-6 h-6 shrink-0" />
                <span>SANS VITRINE DIGITALE</span>
              </div>
              <ul className="space-y-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4" />
                  </div>
                  <span><strong className="text-slate-900">Rideau baissé</strong> : invisibilité totale sur Google et perte des nouveaux habitants ou clients de passage du quartier.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4" />
                  </div>
                  <span><strong className="text-slate-900">Fuite de chiffre d'affaires</strong> : les achats récurrents (vapotage, CBD) s'orientent vers des sites e-commerce concurrents.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-4 h-4" />
                  </div>
                  <span><strong className="text-slate-900">Temps perdu au comptoir</strong> : interruptions téléphoniques répétées pour de simples questions d'horaires, de stock ou de colis.</span>
                </li>
              </ul>
            </div>

            {/* Avec solution */}
            <div className="p-10 sm:p-14 rounded-3xl bg-white border-2 border-emerald-300 text-slate-700 shadow-md">
              <div className="flex items-center gap-3 font-black text-base sm:text-lg uppercase tracking-wider mb-8 text-emerald-600">
                <TrendingUp className="w-6 h-6 shrink-0" />
                <span>AVEC VOTRE SOLUTION DIGITALE</span>
              </div>
              <ul className="space-y-6 text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed">
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span><strong className="text-slate-900">Présence permanente</strong> : fiche Google 24h/24 avec horaires officiels certifiés, même en période de fermeture.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span><strong className="text-slate-900">Commandes Click &amp; Collect</strong> : paniers préparés d'avance sans encombrer la file d'attente au comptoir.</span>
                </li>
                <li className="flex items-start gap-3.5">
                  <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4" />
                  </div>
                  <span><strong className="text-slate-900">Commissions passives directes</strong> : revenus récurrents reversés sur l'assurance et la télésurveillance sans paperasse.</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* 3. Ce que cela change pour vous */}
      <div className="bg-[#fcfbf9] py-16 sm:py-24 border-b border-slate-200 text-center">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs font-black uppercase tracking-wider mb-3">
              <span>CE QUE CELA CHANGE POUR VOUS</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight">
              Une vitrine ouverte en permanence pour votre commerce
            </h2>
          </div>

          {/* Grille 6 tuiles grand format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20 text-left">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-8 sm:p-10 rounded-3xl border border-primary-soft/60 hover:border-primary-base/50 shadow-xs hover:shadow-lg transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center mb-6 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <h3 className="font-display font-black text-xl sm:text-2xl text-slate-900 mb-3">
                      {card.title}
                    </h3>
                    <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-medium">
                      {card.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Parcours Linéaire */}
          <div className="bg-white p-8 sm:p-14 rounded-3xl border border-border-subtle shadow-xs">
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-slate-400 block mb-10">
              Du premier réflexe du client à sa venue dans votre commerce
            </span>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {steps.map((s, idx) => {
                const Icon = s.icon;
                return (
                  <div
                    key={idx}
                    className="p-7 bg-primary-subtle/30 rounded-2xl border border-primary-soft/70 flex flex-col items-center text-center hover:border-primary-base/40 transition-all"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-white border border-primary-soft text-primary-base flex items-center justify-center mb-4 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-black text-lg text-slate-900">
                      {s.name}
                    </h4>
                    <span className="text-xs font-black text-primary-strong mt-1 uppercase tracking-wider">
                      {s.role}
                    </span>
                    <span className="text-sm text-slate-500 mt-2 leading-relaxed">
                      {s.detail}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

    </section>
  );
}
