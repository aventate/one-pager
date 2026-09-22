import { useState } from 'react';
import { Button, Card, Slider } from '@appica/ui-react';
import { Calculator, ArrowRight, ShoppingBag, Shield } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function SectionRoiSimulator({ onOpenContact }) {
  const [weeklyOrders, setWeeklyOrders] = useState(12);
  const [monthlyReferrals, setMonthlyReferrals] = useState(1);

  const avgBasket = 18; // Panier moyen estimé d'un buraliste (15€ - 20€)
  const commissionPerLead = 150; // 150 € / contrat signé

  const monthlyOrders = Math.round(weeklyOrders * 4.33);
  const clickCollectCA = Math.round(monthlyOrders * avgBasket);
  const commissionsProfit = Math.round(monthlyReferrals * commissionPerLead);
  const totalBusinessVolume = clickCollectCA + commissionsProfit;

  const readSliderValue = (v) => (Array.isArray(v) ? v[0] : v);

  return (
    <section id="section-roi" className="py-14 sm:py-16 border-b border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Version volontairement courte : un aperçu rapide, pas un
            détail financier complet (renvoyé vers l'appel avec Thomas). */}
        <div className="mb-8 text-center max-w-4xl mx-auto">
          <div className="mb-4">
            <SectionEyebrow icon={Calculator}>APERÇU RAPIDE</SectionEyebrow>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-tight text-foreground-intense">
            Un ordre d'idée du volume d'affaires généré
          </h2>
        </div>

        <Card
          className="max-w-5xl mx-auto [--card-radius:1.75rem] shadow-sm"
          contentProps={{ className: 'p-6 sm:p-8 lg:p-10' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            {/* CURSEUR 1 : CLICK & COLLECT */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-bold text-sm text-foreground-intense">
                  <ShoppingBag className="w-4 h-4 text-emerald-700 shrink-0" />
                  Commandes Click &amp; Collect
                </span>
                <span className="font-display font-black text-2xl text-foreground-intense">
                  {weeklyOrders}<span className="text-xs text-foreground-muted font-bold">/sem</span>
                </span>
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
            </div>

            {/* CURSEUR 2 : ASSURANCE & ALARME */}
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 font-bold text-sm text-foreground-intense">
                  <Shield className="w-4 h-4 text-indigo-700 shrink-0" />
                  Dossiers Assurance &amp; Alarme
                </span>
                <span className="font-display font-black text-2xl text-foreground-intense">
                  {monthlyReferrals}<span className="text-xs text-foreground-muted font-bold">/mois</span>
                </span>
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
            </div>
          </div>

          {/* Résultat unique, sans décomposition ni jauge */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-7 rounded-2xl bg-primary-subtle/50 border border-primary-soft">
            <div className="text-center sm:text-left">
              <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-strong block mb-1">
                Volume d'affaires estimé
              </span>
              <span className="font-display text-4xl sm:text-5xl font-black text-gradient-gold">
                +{totalBusinessVolume} €<span className="text-lg text-foreground-muted font-bold"> / mois</span>
              </span>
            </div>
            <Button
              size="lg"
              onClick={onOpenContact}
              className="aventate-glow-button group h-auto py-4 px-7 font-black text-sm sm:text-base rounded-2xl shadow-xl gap-2.5 hover:scale-[1.02] shrink-0"
            >
              <span>Sécuriser ce chiffre avec Thomas M.</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </Button>
          </div>
        </Card>

      </div>
    </section>
  );
}
