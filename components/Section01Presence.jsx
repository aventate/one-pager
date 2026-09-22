import { BackgroundPattern, BorderBeam, Card, CardTitle, CardDescription, Separator, TextAnimate } from '@appica/ui-react';
import { Search, Clock, Package, Sparkles, HeartHandshake, Layers, Globe, Compass, UserCheck, CheckCircle2, TrendingDown, TrendingUp, Check, X, ArrowDown } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

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

  const withoutSite = [
    {
      strong: "Rideau baissé",
      rest: " : invisibilité totale sur Google et perte des nouveaux habitants ou clients de passage du quartier.",
    },
    {
      strong: "Fuite de chiffre d'affaires",
      rest: " : les achats récurrents (vapotage, CBD) s'orientent vers des sites e-commerce concurrents.",
    },
    {
      strong: "Temps perdu au comptoir",
      rest: " : interruptions téléphoniques répétées pour de simples questions d'horaires, de stock ou de colis.",
    },
  ];

  const withSite = [
    {
      strong: "Présence permanente",
      rest: " : fiche Google 24h/24 avec horaires officiels certifiés, même en période de fermeture.",
    },
    {
      strong: "Commandes Click & Collect",
      rest: " : paniers préparés d'avance sans encombrer la file d'attente au comptoir.",
    },
    {
      strong: "Commissions passives directes",
      rest: " : revenus récurrents reversés sur l'assurance et la télésurveillance sans paperasse.",
    },
  ];

  return (
    <section id="section-01" className="pt-20 sm:pt-24 border-b border-border-subtle bg-white">
      {/* Motif de points en fond de hero, avec halo qui suit le curseur :
          première impression plus "produit premium" qu'un fond blanc plat. */}
      <div className="relative overflow-hidden">
        <BackgroundPattern
          variant="dots"
          spotlight
          cellSize={26}
          className="absolute inset-0 text-primary-soft/70 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_20%,black_40%,transparent_100%)]"
        />

        <div className="relative w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">

          {/* En-Tête Centré */}
          <div className="mb-12 sm:mb-16 text-center max-w-7xl mx-auto">
            <div className="mb-6">
              <SectionEyebrow number="01">VOTRE COMMERCE SUR INTERNET</SectionEyebrow>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
              Votre commerce doit aussi{' '}
              <TextAnimate effect="shimmer" className="text-primary-base">
                exister sur Internet.
              </TextAnimate>
            </h1>

            <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal mb-10 mx-auto max-w-6xl">
              Aujourd’hui, un client cherche, compare et se renseigne sur Internet avant même de pousser la porte d’un commerce. <strong>Votre site devient votre vitrine digitale</strong> : il présente votre commerce, vos services et vos informations pratiques, à toute heure.
            </p>

            {/* Les 3 garanties : colonnes égales pour un alignement robuste
                quel que soit le nombre de lignes que prend chaque texte. */}
            <Separator className="mb-8" />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-8 text-base sm:text-lg text-foreground-strong font-bold mx-auto max-w-5xl">
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
                <span className="leading-tight text-left">Visible sur Google Maps 24h/24</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
                <span className="leading-tight text-left">Zéro maintenance pour vous</span>
              </div>
              <div className="flex items-center justify-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary-base shrink-0" />
                <span className="leading-tight text-left">Le client vous trouve facilement</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* 2. Comparatif Neuro-Vente Expansif Fond Clair */}
      <div className="bg-surface-subtle py-16 sm:py-20 px-4 sm:px-6 lg:px-8 border-b border-border-subtle">
        <div className="w-full max-w-[1780px] mx-auto">

          <div className="text-center mb-14">
            <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-foreground-muted block mb-3">
              LA RÉALITÉ DU MARCHÉ
            </span>
            <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-foreground-intense tracking-tight">
              Pourquoi l'absence de site représente un manque à gagner chaque mois
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
            {/* Sans vitrine */}
            <Card
              className="[--card-radius:1.5rem] shadow-md"
              contentProps={{ className: 'p-10 sm:p-14 border-2 border-rose-200 text-foreground-strong' }}
            >
              <div className="flex items-center gap-3 font-black text-base sm:text-lg uppercase tracking-wider mb-8 text-rose-600">
                <TrendingDown className="w-6 h-6 shrink-0" />
                <span>SANS VITRINE DIGITALE</span>
              </div>
              <ul className="space-y-6 text-base sm:text-lg lg:text-xl text-foreground-muted leading-relaxed">
                {withoutSite.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-4 h-4" />
                    </div>
                    <span><strong className="text-foreground-intense">{item.strong}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </Card>

            {/* Avec solution */}
            <Card
              className="[--card-radius:1.5rem] shadow-md"
              contentProps={{ className: 'p-10 sm:p-14 border-2 border-emerald-300 text-foreground-strong' }}
            >
              <div className="flex items-center gap-3 font-black text-base sm:text-lg uppercase tracking-wider mb-8 text-emerald-600">
                <TrendingUp className="w-6 h-6 shrink-0" />
                <span>AVEC VOTRE SOLUTION DIGITALE</span>
              </div>
              <ul className="space-y-6 text-base sm:text-lg lg:text-xl text-foreground-muted leading-relaxed">
                {withSite.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3.5">
                    <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4" />
                    </div>
                    <span><strong className="text-foreground-intense">{item.strong}</strong>{item.rest}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>

        </div>
      </div>

      {/* 3. Ce que cela change pour vous */}
      <div className="bg-[#fcfbf9] py-16 sm:py-24 border-b border-border-subtle text-center">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center mb-14">
            <div className="mb-3">
              <SectionEyebrow tone="sm">CE QUE CELA CHANGE POUR VOUS</SectionEyebrow>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-foreground-intense tracking-tight">
              Une vitrine ouverte en permanence pour votre commerce
            </h2>
          </div>

          {/* Grille 6 tuiles grand format */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 mb-20 text-left">
            {cards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <Card
                  key={idx}
                  className="[--card-radius:1.5rem] shadow-xs hover:shadow-lg transition-all"
                  contentProps={{
                    className:
                      'p-8 sm:p-10 border-primary-soft/60 hover:border-primary-base/50 transition-colors flex flex-col justify-between',
                  }}
                >
                  <div>
                    <div className="w-14 h-14 rounded-2xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center mb-6 shadow-xs">
                      <Icon className="w-7 h-7" />
                    </div>
                    <CardTitle className="font-display font-black text-xl sm:text-2xl text-foreground-intense mb-3">
                      {card.title}
                    </CardTitle>
                    <CardDescription className="text-base sm:text-lg text-foreground-muted leading-relaxed font-medium">
                      {card.desc}
                    </CardDescription>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Parcours client immersif : numéros fantômes en fond, nœuds
              circulaires reliés par une ligne continue (desktop) ou des
              flèches verticales (mobile), plutôt que 4 cartes identiques. */}
          <Card
            className="[--card-radius:1.5rem] shadow-xs"
            contentProps={{ className: 'p-8 sm:p-14 overflow-visible' }}
          >
            <span className="text-xs sm:text-sm font-black uppercase tracking-wider text-foreground-subtle block mb-12 sm:mb-16">
              Du premier réflexe du client à sa venue dans votre commerce
            </span>

            <div className="relative">
              {/* Ligne de parcours continue reliant les 4 étapes (desktop),
                  avec un filet de lumière qui la parcourt en continu. */}
              <div
                className="hidden lg:block absolute top-8 left-[12.5%] right-[12.5%] h-0.5 rounded-full bg-border-subtle overflow-hidden"
                aria-hidden="true"
              >
                <div className="h-full w-1/4 bg-gradient-to-r from-transparent via-primary-base to-transparent animate-journey-beam" />
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 lg:gap-6">
                {steps.map((s, idx) => {
                  const Icon = s.icon;
                  return (
                    <div key={idx}>
                      <div
                        className="relative flex flex-col items-center text-center group [perspective:900px]"
                      >
                        {/* Numéro au-dessus de la bulle, bien visible plutôt
                            qu'en filigrane derrière. */}
                        <span
                          className="font-display text-sm font-black text-primary-base mb-2 select-none"
                          aria-hidden="true"
                        >
                          {s.num}
                        </span>

                        {/* Contenu de l'étape : léger effet de bascule 3D au
                            survol, au lieu d'un simple agrandissement plat. */}
                        <div className="transition-transform duration-500 ease-out group-hover:[transform:rotateX(8deg)_rotateY(-8deg)_translateY(-4px)] [transform-style:preserve-3d]">
                          <BorderBeam
                            className="rounded-full w-16 h-16 mb-5 mx-auto"
                            color="var(--primary)"
                            length={30}
                            thickness={2}
                            speed={6}
                            delay={idx * -1.4}
                          >
                            <div className="relative z-10 w-full h-full rounded-full bg-white border-2 border-primary-soft text-primary-base flex items-center justify-center shadow-md transition-colors duration-300 group-hover:border-primary-base">
                              <Icon className="w-7 h-7" />
                            </div>
                          </BorderBeam>

                          <h4 className="relative font-display font-black text-lg text-foreground-intense">
                            {s.name}
                          </h4>
                          <span className="relative text-xs font-black text-primary-strong mt-1 uppercase tracking-wider block">
                            {s.role}
                          </span>
                          <span className="relative text-sm text-foreground-muted mt-2 leading-relaxed max-w-[220px] block mx-auto">
                            {s.detail}
                          </span>
                        </div>
                      </div>

                      {/* Connecteur vertical entre étapes, mobile uniquement */}
                      {idx < steps.length - 1 && (
                        <div className="flex lg:hidden flex-col items-center justify-center py-4" aria-hidden="true">
                          <ArrowDown className="w-5 h-5 text-primary-base/60" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </Card>

        </div>
      </div>

    </section>
  );
}
