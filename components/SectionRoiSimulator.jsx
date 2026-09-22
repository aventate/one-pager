import React, { useState } from 'react';
import { Calculator, ArrowRight, Shield, ShoppingBag, CheckCircle2, TrendingUp, DollarSign, Sparkles } from 'lucide-react';

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
  const netBusinessGain = Math.max(0, totalBusinessVolume - Math.round(costMonthly));
  const annualBusinessVolume = totalBusinessVolume * 12;

  // Logique d'autofinancement basée sur le volume généré
  const isZeroActivity = weeklyOrders === 0 && monthlyReferrals === 0;
  const isFullyFunded = totalBusinessVolume >= Math.round(costMonthly);
  const coveragePercent = Math.min(100, Math.round((totalBusinessVolume / costMonthly) * 100));
  const breakEvenDay = isFullyFunded
    ? Math.min(30, Math.max(1, Math.round((costMonthly / totalBusinessVolume) * 30)))
    : null;

  return (
    <section id="section-roi" className="py-16 sm:py-20 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* En-Tête Centré sans retour à la ligne cassé */}
        <div className="mb-10 sm:mb-14 text-center max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft mb-6 shadow-xs">
            <Calculator className="w-4 h-4 text-primary-base shrink-0" />
            <span className="text-xs sm:text-sm font-black tracking-widest text-primary-strong uppercase leading-none">
              SIMULATEUR DE CHIFFRE D'AFFAIRES &amp; COMMISSIONS
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight text-foreground-intense mb-4">
            Combien cette solution rapporte-t-elle à votre commerce&nbsp;?
          </h2>

          <p className="text-base sm:text-lg lg:text-xl text-foreground-strong leading-relaxed font-normal mx-auto max-w-5xl">
            Ajustez les curseurs selon votre trafic. Visualisez immédiatement le volume d'affaires additionnel et l'autofinancement de la solution.
          </p>
        </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
            
            {/* GAUCHE : LES 2 CURSEURS MAJEURS (7 COLS) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 lg:p-10 rounded-[28px] border border-border-subtle shadow-sm flex flex-col justify-between space-y-8">
              
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
                      <span className="text-xs sm:text-sm text-slate-500">
                        Paniers retirés en boutique · Panier moyen estimé à {avgBasket} €
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="font-display font-black text-4xl sm:text-5xl text-foreground-intense">
                      {weeklyOrders}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-bold block">
                      / semaine
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="40"
                  step="1"
                  value={weeklyOrders}
                  onChange={e => setWeeklyOrders(Number(e.target.value))}
                  className="w-full h-3.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />

                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-medium">
                  <span>0 commande</span>
                  <span>20 commandes</span>
                  <span>40 commandes</span>
                </div>

                <div className="pt-1">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-emerald-100/70 text-emerald-800 text-xs sm:text-sm font-bold">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 shrink-0" />
                    <span>CA généré : +{clickCollectCA} € / mois</span>
                  </div>
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
                      <span className="text-xs sm:text-sm text-slate-500">
                        Contacts transmis et finalisés par Services Indep
                      </span>
                    </div>
                  </div>

                  <div className="text-left sm:text-right">
                    <span className="font-display font-black text-4xl sm:text-5xl text-foreground-intense">
                      {monthlyReferrals}
                    </span>
                    <span className="text-xs sm:text-sm text-slate-500 font-bold block">
                      / mois
                    </span>
                  </div>
                </div>

                <input
                  type="range"
                  min="0"
                  max="4"
                  step="1"
                  value={monthlyReferrals}
                  onChange={e => setMonthlyReferrals(Number(e.target.value))}
                  className="w-full h-3.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
                />

                <div className="flex items-center justify-between text-xs sm:text-sm text-slate-400 font-medium">
                  <span>0 dossier</span>
                  <span>2 dossiers</span>
                  <span>4 dossiers</span>
                </div>

                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-indigo-100/70 text-indigo-800 text-xs sm:text-sm font-bold">
                  <span className="w-2.5 h-2.5 rounded-full bg-indigo-600 shrink-0" />
                  <span>Commissions 100% nettes : +{commissionsProfit} € / mois</span>
                </div>
              </div>

              {/* Formule de paiement */}
              <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-base">
                <span className="font-bold text-foreground-strong">Rythme d'abonnement :</span>
                <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
                  <button
                    onClick={() => setIsAnnual(false)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      !isAnnual ? 'bg-[#1c1715] text-white shadow-sm' : 'text-slate-600 hover:text-[#1c1715]'
                    }`}
                  >
                    Mensuel (149 €/m)
                  </button>
                  <button
                    onClick={() => setIsAnnual(true)}
                    className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                      isAnnual ? 'bg-primary-base text-white shadow-sm' : 'text-slate-600 hover:text-[#1c1715]'
                    }`}
                  >
                    Annuel (119 €/m · -20%)
                  </button>
                </div>
              </div>

            </div>


            {/* DROITE : COCKPIT DE RENTABILITÉ (5 COLS) */}
            <div className="lg:col-span-5 bg-white text-foreground-intense p-6 sm:p-8 lg:p-10 rounded-[28px] shadow-xl border-2 border-primary-base flex flex-col justify-between text-center lg:text-left relative overflow-hidden">
              
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
                    <span className="text-slate-500 text-base sm:text-lg font-bold">/ mois</span>
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
                <div className="space-y-3 py-5 border-t border-b border-border-subtle text-sm sm:text-base font-medium">
                  <div className="flex justify-between text-foreground-strong">
                    <span>CA Click &amp; Collect :</span>
                    <span className="font-bold text-emerald-700">+{clickCollectCA} € / mois</span>
                  </div>
                  <div className="flex justify-between text-foreground-strong">
                    <span>Commissions partenaires :</span>
                    <span className="font-bold text-indigo-700">+{commissionsProfit} € / mois</span>
                  </div>
                  <div className="flex justify-between text-slate-500 pt-1">
                    <span>Abonnement de gestion :</span>
                    <span className="text-rose-600 font-bold">-{costMonthly.toFixed(0)} €</span>
                  </div>
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
                    <span className={`px-2.5 py-0.5 rounded-full font-bold text-xs sm:text-sm border ${
                      isZeroActivity
                        ? "text-slate-600 bg-slate-100 border-slate-200"
                        : isFullyFunded
                        ? "text-primary-strong bg-primary-subtle border-primary-soft"
                        : "text-slate-700 bg-slate-100 border-slate-200"
                    }`}>
                      {isZeroActivity
                        ? "0% d'activité"
                        : isFullyFunded
                        ? "100% amorti"
                        : `${coveragePercent}% couvert`}
                    </span>
                  </div>
                  
                  {/* Barre de progression visuelle sobre & élégante */}
                  <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${
                        isZeroActivity
                          ? "w-0"
                          : isFullyFunded
                          ? "bg-primary-base w-full shadow-xs"
                          : "bg-primary-base/70"
                      }`}
                      style={{
                        width: isZeroActivity ? "0%" : isFullyFunded ? "100%" : `${coveragePercent}%`
                      }}
                    />
                  </div>

                  <span className="text-xs text-slate-500 block pt-0.5 font-medium">
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
                <button
                  onClick={onOpenContact}
                  className="gold-glow-button w-full py-5 px-8 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl flex items-center justify-center gap-3 group hover:scale-[1.02] active:scale-[0.98] transition-all"
                >
                  <span>Sécuriser cette rentabilité avec Thomas M.</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                </button>
              </div>

            </div>

          </div>        </div>

    </section>
  );
}

