import React, { useState } from 'react';
import { Phone, CheckCircle2, ArrowRight, ShieldCheck, Mail, MapPin } from 'lucide-react';

export default function Section06ClosingContact() {
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    business: '',
    phone: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  return (
    <section id="section-contact" className="bg-transparent text-foreground-intense py-16 sm:py-24 border-t border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-white p-8 sm:p-12 lg:p-16 rounded-[32px] border border-border-subtle shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* GAUCHE : ARGUMENTAIRE CLOSING (7 COLS) */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-primary-subtle border border-primary-soft text-primary-strong text-xs sm:text-sm font-black uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-primary-base animate-pulse" />
                <span>Passez à l'action</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground-intense tracking-tight leading-[1.1]">
                Modernisez votre commerce et sécurisez vos marges.
              </h2>

              <p className="text-foreground-strong text-lg sm:text-xl leading-relaxed max-w-4xl mx-auto lg:mx-0 font-normal">
                Thomas M. et l’équipe AVENTATE sont à vos côtés pour déployer votre solution clé en main, sans aucune charge technique pour vous.
              </p>

              {/* 3 garanties compactes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="p-5 sm:p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft text-center">
                  <span className="text-primary-strong font-bold text-sm sm:text-base uppercase block mb-1.5">
                    01. Étude Locale
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Audit de visibilité sur votre secteur.
                  </p>
                </div>
                <div className="p-5 sm:p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft text-center">
                  <span className="text-primary-strong font-bold text-sm sm:text-base uppercase block mb-1.5">
                    02. Sur-Mesure
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Vos photos, logos et horaires réels.
                  </p>
                </div>
                <div className="p-5 sm:p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft text-center">
                  <span className="text-primary-strong font-bold text-sm sm:text-base uppercase block mb-1.5">
                    03. Zéro Souci
                  </span>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    Maintenance &amp; 4h/mois incluses.
                  </p>
                </div>
              </div>

            </div>

            {/* DROITE : FORMULAIRE THOMAS (5 COLS) */}
            <div className="lg:col-span-5 bg-surface-subtle text-foreground-intense p-8 sm:p-12 rounded-[32px] shadow-md border border-border-subtle">
              
              {!formSent ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-primary-base block mb-1">
                      CONTACT DIRECT DÉDIÉ
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                      Être rappelé par Thomas M.
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 mt-1 font-medium">
                      Échange téléphonique de 10 minutes sous 24h ouvrées.
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-foreground-strong mb-1.5">
                      Votre Nom &amp; Prénom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Jean Martin"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-border-subtle text-base text-foreground-intense focus:outline-none focus:border-primary-base transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-foreground-strong mb-1.5">
                      Nom de votre commerce
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Tabac Presse de la Gare"
                      value={formData.business}
                      onChange={e => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-border-subtle text-base text-foreground-intense focus:outline-none focus:border-primary-base transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-bold text-foreground-strong mb-1.5">
                      Numéro de téléphone
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-5 py-3.5 rounded-2xl bg-white border border-border-subtle text-base text-foreground-intense focus:outline-none focus:border-primary-base transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="gold-glow-button w-full py-4 px-8 text-white font-black text-base sm:text-lg rounded-2xl shadow-xl transition-all flex items-center justify-center gap-3 mt-3"
                  >
                    <span>Valider ma demande de rappel</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              ) : (
                <div className="text-center py-10 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-display font-black text-2xl text-foreground-intense">Demande enregistrée</h4>
                  <p className="text-base text-foreground-strong leading-relaxed font-medium">
                    Thomas M. a bien reçu votre demande et vous recontactera sous 24h ouvrées.
                  </p>
                </div>
              )}

            </div>

          </div>
        </div>

        {/* FOOTER AVEC LOGOS OFFICIELS SUR FOND CLAIR */}
        <div className="mt-16 pt-12 border-t border-border-subtle flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-5">
              <img
                src="/logos/logo-services-indep-dark-cropped.png"
                alt="Services Indep"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
              <span className="h-8 w-px bg-slate-300 hidden sm:block" />
              <img
                src="/logos/logo-aventate-rouge.svg"
                alt="Aventate"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-500 text-center lg:text-right font-medium max-w-xl">
            Partenariat officiel : solution métier conçue pour <strong>Services Indep</strong> et opérée techniquement par <strong>AVENTATE SAS</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
