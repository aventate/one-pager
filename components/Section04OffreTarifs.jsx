import { Badge, BorderBeam, Button, Card, CardTitle } from '@appica/ui-react';
import { Check, Plus, Star, Sparkles, ArrowRight, Store, TrendingUp, Rocket } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

/**
 * Les 3 formules sont volontairement décrites sans aucun jargon technique
 * (pas de "Next.js", "API"…) : le public visé est un commerçant, pas un
 * développeur. Chaque option d'ajout reprend le libellé et le prix exacts
 * validés avec le client.
 */
const TIERS = [
  {
    id: 'essentiel',
    icon: Store,
    accent: 'from-slate-400 to-slate-600',
    title: 'ESSENTIEL',
    subtitle: "Le socle digital moderne pour être vu et trouvé dans votre quartier.",
    creationPrice: '5 000 €',
    monthlyPrice: '99 €',
    features: [
      "Site internet sur-mesure ultra-rapide sur smartphone",
      "Référencement local prioritaire sur Google (Tabac, Presse, Colis, FDJ, Vape, etc.)",
      "Synchronisation officielle de votre fiche Google Maps",
      "Boutons d'action immédiate : Appel direct en 1 clic & Itinéraire GPS",
      "Affichage en direct de l'état de vos services (relais colis ouvert, borne en service)",
      "Encart partenaire officiel Services Indep (Assurance)",
    ],
    ctaLabel: "Choisir l'offre Essentiel",
    highlighted: false,
    options: [
      { label: "Tableau de bord smartphone + MAJ horaires par SMS", price: "+ 1 200 € HT | + 30 €/m" },
      { label: "Réservation express au comptoir", price: "+ 800 € HT | + 20 €/m" },
      { label: "Standardiste automatique WhatsApp 24/7", price: "+ 1 500 € HT | + 30 €/m" },
      { label: "Pass Fidélité Apple & Google Wallet", price: "+ 1 200 € HT | + 25 €/m" },
    ],
  },
  {
    id: 'commercant',
    icon: TrendingUp,
    accent: 'from-primary-base to-primary-strong',
    title: 'COMMERÇANT',
    subtitle: "Le site qui devient un véritable outil de gestion et de gain de temps au comptoir.",
    creationPrice: '7 000 €',
    monthlyPrice: '149 €',
    monthlyNote: 'inclut jusqu’à 4h de modifications par mois',
    features: [
      "Tout ce qui est inclus dans l'offre Essentiel",
      "Tableau de bord privé sur smartphone (suivi des recherches du quartier et des visites)",
      "Mise à jour de vos horaires fériés et congés par simple SMS en 10 secondes",
      "Guide interactif des démarches au guichet (checklist pièces pour colis et compte Nickel)",
      "Module de réservation express au comptoir (sans toucher à votre logiciel de caisse)",
    ],
    ctaLabel: "Choisir l'offre Commerçant",
    highlighted: true,
    badge: "FORMULE CONSEILLÉE",
    options: [
      { label: "Standardiste automatique WhatsApp 24/7", price: "+ 1 500 € HT | + 30 €/m" },
      { label: "Pass Fidélité Apple & Google Wallet", price: "+ 1 200 € HT | + 25 €/m" },
    ],
  },
  {
    id: 'performance',
    icon: Rocket,
    accent: 'from-amber-500 to-amber-700',
    title: 'PERFORMANCE',
    subtitle: "La solution complète pour filtrer les appels parasites et fidéliser votre flux client.",
    creationPrice: '9 500 €',
    monthlyPrice: '199 €',
    monthlyNote: 'support prioritaire',
    features: [
      "Tout ce qui est inclus dans l'offre Commerçant",
      "Standardiste automatique WhatsApp 24/7 (filtre 80 % des appels sur les colis et horaires)",
      "Pass Fidélité dématérialisé Apple Wallet & Google Wallet dans le téléphone des clients",
      "Notifications gratuites sur l'écran verrouillé des smartphones du quartier",
    ],
    ctaLabel: "Choisir l'offre Performance",
    highlighted: false,
    reassurance: "Formule intégrale : toutes les fonctionnalités et options sont déjà incluses.",
  },
];

export default function Section04OffreTarifs({ onOpenContact }) {
  return (
    <section id="section-04" className="py-16 sm:py-20 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-Tête Centré */}
        <div className="mb-10 sm:mb-14 text-center max-w-7xl mx-auto">
          <div className="mb-6">
            <SectionEyebrow number="04">VOTRE OFFRE TARIFAIRE</SectionEyebrow>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground-intense mb-4">
            Une offre claire, adaptée à votre projet.
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-foreground-strong leading-relaxed font-normal mx-auto max-w-6xl">
            Sa création initiale sur-mesure, puis sa gestion complète au quotidien avec un engagement de 24 mois.
          </p>
        </div>

        {/* Grille comparative des 3 offres : l'offre conseillée est
            légèrement surélevée (pattern classique des grilles tarifaires)
            et chaque formule porte une couleur d'accent + icône propres
            pour ne pas se ressembler visuellement. */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {TIERS.map((tier) => {
            const Icon = tier.icon;
            const card = (
              <Card
                className={`[--card-radius:1.5rem] group transition-all duration-300 h-full overflow-hidden hover:-translate-y-1.5 ${
                  tier.highlighted
                    ? 'shadow-xl ring-1 ring-primary-soft'
                    : 'shadow-xs hover:shadow-lg'
                }`}
                contentProps={{
                  className: `flex flex-col h-full ${
                    tier.highlighted ? 'border-2 border-primary-base' : ''
                  }`,
                }}
              >
              {/* Bandeau d'accent coloré propre à chaque formule */}
              <div className={`h-2 w-full bg-gradient-to-r ${tier.accent} shrink-0`} aria-hidden="true" />

              <div className="p-6 sm:p-8 flex flex-col h-full">

              {/* Badge de mise en avant discrète, tier « Commerçant » uniquement */}
              {tier.badge && (
                <Badge
                  variant="primary"
                  className="self-start gap-1.5 mb-4 px-3 py-1 text-[11px] font-black uppercase tracking-wider"
                >
                  <Star className="w-3 h-3 fill-current" />
                  <span>{tier.badge}</span>
                </Badge>
              )}
              {!tier.badge && <div className="mb-4 h-[26px]" aria-hidden="true" />}

              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${tier.accent} text-white flex items-center justify-center shrink-0 shadow-md mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                <Icon className="w-6 h-6" />
              </div>

              <CardTitle className="font-display font-black text-2xl text-foreground-intense tracking-tight">
                {tier.title}
              </CardTitle>
              <p className="text-sm text-foreground-muted mt-2 leading-relaxed min-h-[3.5rem]">
                {tier.subtitle}
              </p>

              {/* Tarification, mise en valeur dans un encart dédié */}
              <div className={`mt-5 p-4 rounded-2xl ${tier.highlighted ? 'bg-primary-subtle/60 border border-primary-soft' : 'bg-surface-subtle border border-border-subtle'}`}>
                <div className="flex items-baseline gap-2">
                  <span className="text-xs text-foreground-subtle font-bold uppercase tracking-wider">Création</span>
                  <span className="font-display text-2xl font-black text-foreground-intense">{tier.creationPrice}</span>
                  <span className="text-xs font-bold text-foreground-muted">HT</span>
                </div>
                <div className="flex items-baseline gap-2 mt-1.5">
                  <span className="text-xs text-foreground-subtle font-bold uppercase tracking-wider">Gestion</span>
                  <span className="font-display text-lg font-black text-primary-base">{tier.monthlyPrice}</span>
                  <span className="text-xs font-bold text-foreground-muted">HT / mois</span>
                </div>
                <span className="text-xs text-foreground-muted block mt-1">
                  Engagement 24 mois{tier.monthlyNote ? ` · ${tier.monthlyNote}` : ''}
                </span>
              </div>

              {/* Fonctionnalités incluses */}
              <ul className="space-y-2.5 mt-6 text-sm text-foreground-strong">
                {tier.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="leading-snug">{f}</span>
                  </li>
                ))}
              </ul>

              {/* Le reste du contenu (bouton + options) est ancré en bas de
                  carte pour que les 3 boutons restent alignés horizontalement
                  quel que soit le nombre de lignes au-dessus. */}
              <div className="mt-auto pt-6">
                <Button
                  size="lg"
                  onClick={onOpenContact}
                  className={`w-full h-auto py-3.5 font-black text-sm rounded-xl gap-2 transition-transform group-hover:scale-[1.02] ${
                    tier.highlighted ? 'aventate-glow-button shadow-md' : ''
                  }`}
                  variant={tier.highlighted ? undefined : 'outline'}
                >
                  <span>{tier.ctaLabel}</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>

                {tier.options ? (
                  <div className="mt-5 pt-5 border-t border-border-subtle">
                    <span className="text-xs font-black uppercase tracking-wider text-foreground-subtle block mb-3">
                      Options à ajouter dès la commande :
                    </span>
                    <ul className="space-y-2.5">
                      {tier.options.map((opt) => (
                        <li key={opt.label} className="flex items-start gap-2 text-xs">
                          <Plus className="w-3.5 h-3.5 text-primary-base shrink-0 mt-0.5" />
                          <span className="text-foreground-strong leading-snug flex-1">
                            {opt.label}
                            <span className="block text-foreground-muted font-bold mt-0.5">{opt.price}</span>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="mt-5 pt-5 border-t border-border-subtle flex items-start gap-2.5 text-xs text-primary-strong font-bold">
                    <Sparkles className="w-4 h-4 text-primary-base shrink-0 mt-0.5" />
                    <span className="leading-snug">{tier.reassurance}</span>
                  </div>
                )}
              </div>
              </div>
              </Card>
            );

            // Filet lumineux discret + légère surélévation autour de la
            // seule offre mise en avant, pour guider l'œil sans surcharger.
            return tier.highlighted ? (
              <BorderBeam
                key={tier.id}
                className="rounded-2xl h-full md:-mt-4"
                color="var(--primary-soft)"
                length={22}
                thickness={1.5}
                speed={9}
              >
                {card}
              </BorderBeam>
            ) : (
              <div key={tier.id} className="h-full">{card}</div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
