import { Badge, Card, Separator } from '@appica/ui-react';
import { Clock, Check, X, Store, ShoppingBag, LayoutDashboard, Shield, Wrench, CheckCircle2 } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function Section05AbonnementDetail() {
  const inclusions = [
    "Modification de textes, prix, horaires et coordonnées",
    "Remplacement et ajout de photos de votre point de vente",
    "Mise en avant de nouveaux produits (vape, CBD, presse)",
    "Ajustement de bannières, boutons et liens pratiques",
    "Maintenance technique, hébergement haute vitesse et sécurité",
  ];

  const exclusions = [
    "Création d'intranet ou d'application complexe sur-mesure",
    "Connexion caisse propriétaire nécessitant développement lourd",
    "Refonte visuelle intégrale hors périmètre initial",
  ];

  const pillars = [
    { icon: Store, label: "Site Vitrine 24h/24" },
    { icon: ShoppingBag, label: "Click & Collect Clé en Main" },
    { icon: LayoutDashboard, label: "Espace Buraliste Privé" },
    { icon: Shield, label: "Commissions 150 € / contrat" },
    { icon: Wrench, label: "4h / mois d'assistance" },
  ];

  return (
    <section id="section-05" className="py-12 sm:py-16 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-Tête Centré Compact */}
        <div className="mb-8 sm:mb-10 text-center max-w-6xl mx-auto">
          <div className="mb-4">
            <SectionEyebrow number="05">VOTRE ABONNEMENT EN DÉTAIL</SectionEyebrow>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground-intense mb-3">
            Ce que comprend <span className="text-gradient-gold">votre abonnement.</span>
          </h2>

          <p className="text-base sm:text-lg text-foreground-strong leading-relaxed font-normal mx-auto max-w-6xl">
            Gestion complète, réactivité garantie et <strong className="text-foreground-intense font-black">4 heures d'ajustements chaque mois</strong> incluses sans supplément.
          </p>
        </div>

        {/* CARTE UNIQUE CONDENSÉE & ÉLARGIE */}
        <Card
          className="[--card-radius:1.75rem] shadow-lg w-full max-w-[1500px] mx-auto"
          contentProps={{ className: 'p-6 sm:p-10' }}
        >

          {/* Bandeau supérieur 4h/mois */}
          <div className="p-5 sm:p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-4 sm:gap-5">
              <div className="w-14 h-14 rounded-2xl bg-white border border-primary-soft text-primary-base flex items-center justify-center shrink-0 shadow-xs">
                <Clock className="w-7 h-7" />
              </div>
              <div>
                <span className="text-xs font-black uppercase tracking-widest text-primary-strong block">
                  INCLUS SANS SURCOÛT
                </span>
                <div className="font-display text-2xl sm:text-3xl font-black text-foreground-intense">
                  4 heures de modifications / mois
                </div>
              </div>
            </div>

            <Badge
              variant="success"
              className="gap-2 text-xs sm:text-sm text-emerald-800 bg-emerald-50 px-4 py-2.5 rounded-xl border border-emerald-200 font-bold shrink-0"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Traitement sous 24h à 48h ouvrées</span>
            </Badge>
          </div>

          {/* Grille Inclus vs Sur Étude */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-8">

            {/* Colonne Inclus (7 cols) */}
            <div className="md:col-span-7 space-y-3.5">
              <Badge
                variant="success"
                className="gap-2 text-xs font-black tracking-wider text-emerald-800 uppercase bg-emerald-50 px-3.5 py-1.5 rounded-lg border border-emerald-200 mb-1"
              >
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Pris en charge au quotidien</span>
              </Badge>

              <ul className="space-y-2.5 text-sm sm:text-base text-foreground-strong">
                {inclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Colonne Sur étude (5 cols) */}
            <div className="md:col-span-5 space-y-3.5 md:border-l md:border-border-subtle md:pl-8">
              <Badge
                variant="outline"
                className="gap-2 text-xs font-black tracking-wider text-foreground-strong uppercase bg-surface-muted px-3.5 py-1.5 rounded-lg border border-border-subtle mb-1"
              >
                <X className="w-4 h-4 text-foreground-muted" />
                <span>Hors forfait (sur devis)</span>
              </Badge>

              <ul className="space-y-2.5 text-sm sm:text-base text-foreground-muted">
                {exclusions.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-surface-muted text-foreground-muted flex items-center justify-center shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5" />
                    </div>
                    <span className="leading-snug">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Synthèse 5 Piliers élargie strictement sur 1 seule ligne */}
          <Separator className="mb-6" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 w-full">
            {pillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="p-3.5 px-3 rounded-xl bg-primary-subtle/50 border border-primary-soft hover:bg-primary-subtle flex items-center justify-center gap-2.5 text-center transition-colors"
                >
                  <Icon className="w-4 h-4 text-primary-base shrink-0" />
                  <span className="text-xs sm:text-sm font-bold text-foreground-intense whitespace-nowrap">
                    {p.label}
                  </span>
                </div>
              );
            })}
          </div>

        </Card>

      </div>
    </section>
  );
}
