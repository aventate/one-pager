import { useState } from 'react';
import { Badge, Button, Card, Progress, Separator, Slider, ToggleGroup, Toggle } from '@appica/ui-react';
import { Calculator, ArrowRight, Shield, ShoppingBag } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function SectionRoiSimulator({ onOpenContact }) {
  const [weeklyOrders, setWeeklyOrders] = useState(12);
  const [monthlyReferrals, setMonthlyReferrals] = useState(1);
  const [isAnnual, setIsAnnual] = useState(false);

  const avgBasket = 18; // Panier moyen estimé d'un buraliste (15€ - 20€)
  const commissionPerLead = 150; // 150 € / contrat signé
  const costMonthly = isAnnual ? 119.20 : 149;

  // Calculs : 100% Chiffre d'Affaires et Commissions directes
  const monthlyOrders = Math.round(weeklyOrders * 4.33);
  const clickCollectCA = Math.round(monthlyOrders * avgBasket);
  const commissionsProfit = Math.round(monthlyReferrals * commissionPerLead);

  const totalBusinessVolume = clickCollectCA + commissionsProfit;
  const annualBusinessVolume = totalBusinessVolume * 12;

  // Logique d'autofinancement basée sur le volume généré
  const isZeroActivity = weeklyOrders === 0 && monthlyReferrals === 0;
  const isFullyFunded = totalBusinessVolume >= Math.round(costMonthly);
  const coveragePercent = Math.min(100, Math.round((totalBusinessVolume / costMonthly) * 100));
  const breakEvenDay = isFullyFunded
    ? Math.min(30, Math.max(1, Math.round((costMonthly / totalBusinessVolume) * 30)))
    : null;

  // Le Slider de Base UI peut remonter un nombre ou un tableau selon le nombre de poignées.
  const readSliderValue = (v) => (Array.isArray(v) ? v[0] : v);

  const gaugePercent = isZeroActivity ? 0 : isFullyFunded ? 100 : coveragePercent;

  return (
    <section id="section-roi" className="py-16 sm:py-20 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-Tête Centré sans retour à la ligne cassé */}
        <div className="mb-10 sm:mb-14 text-center max-w-7xl mx-auto">
          <div className="mb-6">
            <SectionEyebrow icon={Calculator}>
              SIMULATEUR DE CHIFFRE D'AFFAIRES &amp; COMMISSIONS
            </SectionEyebrow>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground-intense mb-4">
            Combien cette solution rapporte-t-elle à votre commerce&nbsp;?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-foreground-strong leading-relaxed font-normal mx-auto max-w-6xl">
            Ajustez les curseurs selon votre trafic. Visualisez immédiatement le volume d'affaires additionnel et l'autofinancement de la solution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">

          {/* GAUCHE : LES 2 CURSEURS MAJEURS (7 COLS) */}
          <Card
            className="lg:col-span-7 [--card-radius:1.75rem] shadow-sm"
            contentProps={{ className: 'p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-8' }}
          >

            <div>
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-base block mb-1.5">
                ESTIMATION INSTANTANÉE
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                Votre flux d'activité potentiel
              </h3>
            </div>

            {/* CURSEUR 1 : CLICK & COLLECT */}
            <div className="p-6 sm:p-8 bg-surface-subtle rounded-3xl border border-border-subtle space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg sm:text-xl text-foreground-intense block">
                      Commandes Click &amp; Collect
                    </span>
                    <span className="text-xs sm:text-sm text-foreground-muted">
                      Paniers retirés en boutique · Panier moyen estimé à {avgBasket} €
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="font-display font-black text-4xl sm:text-5xl text-foreground-intense">
                    {weeklyOrders}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground-muted font-bold block">
                    / semaine
                  </span>
                </div>
              </div>

              <Slider
                min={0}
                max={40}
                step={1}
                value={weeklyOrders}
                onValueChange={(v) => setWeeklyOrders(readSliderValue(v))}
                thumbAriaLabel="Commandes Click & Collect par semaine"
                className="w-full"
              />

              <div className="flex items-center justify-between text-xs sm:text-sm text-foreground-subtle font-medium">
                <span>0 commande</span>
                <span>20 commandes</span>
                <span>40 commandes</span>
              </div>

              <div className="pt-1">
                <Badge
                  variant="success"
                  className="gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-100/70 text-emerald-800 text-xs sm:text-sm font-bold"
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                  <span>CA généré : +{clickCollectCA} € / mois</span>
                </Badge>
              </div>
            </div>

            {/* CURSEUR 2 : ASSURANCE & ALARME */}
            <div className="p-6 sm:p-8 bg-surface-subtle rounded-3xl border border-border-subtle space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-800 flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="font-display font-bold text-lg sm:text-xl text-foreground-intense block">
                      Dossiers Assurance &amp; Alarme
                    </span>
                    <span className="text-xs sm:text-sm text-foreground-muted">
                      Contacts transmis et finalisés par Services Indep
                    </span>
                  </div>
                </div>

                <div className="text-left sm:text-right">
                  <span className="font-display font-black text-4xl sm:text-5xl text-foreground-intense">
                    {monthlyReferrals}
                  </span>
                  <span className="text-xs sm:text-sm text-foreground-muted font-bold block">
                    / mois
                  </span>
                </div>
              </div>

              <Slider
                min={0}
                max={4}
                step={1}
                value={monthlyReferrals}
                onValueChange={(v) => setMonthlyReferrals(readSliderValue(v))}
                thumbAriaLabel="Dossiers Assurance & Alarme par mois"
                className="w-full"
              />

              <div className="flex items-center justify-between text-xs sm:text-sm text-foreground-subtle font-medium">
                <span>0 dossier</span>
                <span>2 dossiers</span>
                <span>4 dossiers</span>
              </div>

              <Badge
                variant="secondary"
                className="gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-100/70 text-indigo-800 text-xs sm:text-sm font-bold"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0" />
                <span>Commissions 100% nettes : +{commissionsProfit} € / mois</span>
              </Badge>
            </div>

            {/* Formule de paiement */}
            <div className="pt-6 border-t border-border-muted flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-base">
              <span className="font-bold text-foreground-strong">Rythme d'abonnement :</span>
              <ToggleGroup
                value={[isAnnual ? 'annual' : 'monthly']}
                onValueChange={(v) => {
                  // Un clic sur l'option déjà active renvoie un tableau vide : on ignore,
                  // le choix doit rester binaire.
                  if (v.length) setIsAnnual(v[0] === 'annual');
                }}
                aria-label="Rythme d'abonnement"
                className="flex items-center gap-2 bg-surface-muted p-1.5 rounded-2xl"
              >
                <Toggle
                  value="monthly"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all data-pressed:bg-foreground-intense data-pressed:text-white data-pressed:shadow-sm"
                >
                  Mensuel (149 €/m)
                </Toggle>
                <Toggle
                  value="annual"
                  className="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all data-pressed:bg-primary-base data-pressed:text-white data-pressed:shadow-sm"
                >
                  Annuel (119 €/m · -20%)
                </Toggle>
              </ToggleGroup>
            </div>

          </Card>


          {/* DROITE : COCKPIT DE RENTABILITÉ (5 COLS) */}
          <Card
            className="lg:col-span-5 [--card-radius:1.75rem] shadow-xl"
            contentProps={{
              className:
                'border-2 border-primary-base p-6 sm:p-8 lg:p-10 text-foreground-intense flex flex-col justify-between text-center lg:text-left relative overflow-hidden',
            }}
          >

            <div className="relative z-10 space-y-6">

              <div className="flex items-center justify-between">
                <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase">
                  VOLUME D'AFFAIRES GÉNÉRÉ
                </span>
              </div>

              <div>
                <div className="flex items-baseline justify-center lg:justify-start gap-2.5">
                  <span className="font-display text-5xl sm:text-6xl font-black text-gradient-gold">
                    +{totalBusinessVolume} €
                  </span>
                  <span className="text-foreground-muted text-base sm:text-lg font-bold">/ mois</span>
                </div>
              </div>

              {/* Gain annuel valorisé */}
              <div className="p-5 rounded-2xl bg-primary-subtle border border-primary-soft text-center lg:text-left">
                <span className="text-xs sm:text-sm text-primary-strong font-bold block">
                  Projection volume sur 12 mois :
                </span>
                <strong className="font-display text-2xl sm:text-3xl font-black text-primary-strong">
                  +{annualBusinessVolume.toLocaleString('fr-FR')} € / an
                </strong>
              </div>

              {/* Décomposition financière */}
              <div>
                <Separator />
                <div className="space-y-3 py-5 text-sm sm:text-base font-medium">
                  <div className="flex justify-between text-foreground-strong">
                    <span>CA Click &amp; Collect :</span>
                    <span className="font-bold text-emerald-700">+{clickCollectCA} € / mois</span>
                  </div>
                  <div className="flex justify-between text-foreground-strong">
                    <span>Commissions partenaires :</span>
                    <span className="font-bold text-indigo-700">+{commissionsProfit} € / mois</span>
                  </div>
                  <div className="flex justify-between text-foreground-muted pt-1">
                    <span>Abonnement de gestion :</span>
                    <span className="text-rose-600 font-bold">-{costMonthly.toFixed(0)} €</span>
                  </div>
                </div>
                <Separator />
              </div>

              {/* Jauge d'autofinancement corrigée */}
              <div className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle text-sm sm:text-base space-y-3">
                <div className="flex justify-between items-center">
                  <span className="font-bold text-foreground-intense">
                    {isZeroActivity
                      ? "Autofinancement en attente"
                      : isFullyFunded
                      ? `Autofinancé dès le ${breakEvenDay}${breakEvenDay === 1 ? 'er' : 'e'} jour`
                      : "Autofinancement partiel"}
                  </span>
                  <Badge
                    variant={isZeroActivity ? 'outline' : isFullyFunded ? 'soft' : 'outline'}
                    className={`px-2.5 py-0.5 font-bold text-xs sm:text-sm border ${
                      isZeroActivity
                        ? "text-foreground-muted bg-surface-muted border-border-subtle"
                        : isFullyFunded
                        ? "text-primary-strong bg-primary-subtle border-primary-soft before:bg-primary-subtle"
                        : "text-foreground-strong bg-surface-muted border-border-subtle"
                    }`}
                  >
                    {isZeroActivity
                      ? "0% d'activité"
                      : isFullyFunded
                      ? "100% amorti"
                      : `${coveragePercent}% couvert`}
                  </Badge>
                </div>

                {/* Barre de progression visuelle sobre & élégante */}
                <Progress
                  value={gaugePercent}
                  aria-label="Couverture de l'abonnement par le volume d'affaires"
                  className="w-full"
                />

                <span className="text-xs text-foreground-muted block pt-0.5 font-medium">
                  {isZeroActivity
                    ? "Déplacez au moins un curseur pour estimer le seuil d'amortissement de l'abonnement."
                    : isFullyFunded
                    ? "Dès ce jour atteint, chaque vente et chaque commission est du pur bénéfice net."
                    : `Encore ${Math.max(0, Math.round(costMonthly - totalBusinessVolume))} € de volume d'affaires pour couvrir 100% des frais.`}
                </span>
              </div>

            </div>

            {/* Bouton d'action */}
            <div className="mt-10 pt-2 relative z-10">
              <Button
                size="lg"
                onClick={onOpenContact}
                className="aventate-glow-button group w-full h-auto py-5 px-8 font-black text-base sm:text-lg rounded-2xl shadow-xl gap-3 hover:scale-[1.02]"
              >
                <span>Sécuriser cette rentabilité avec Thomas M.</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
              </Button>
            </div>

          </Card>

        </div>
      </div>

    </section>
  );
}
