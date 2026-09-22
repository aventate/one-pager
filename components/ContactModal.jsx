import React, { useState } from 'react';
import { Phone, X, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: '',
    business: '',
    phone: '',
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1c1715]/70 backdrop-blur-sm">
      <div className="relative w-full max-w-md bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-border-subtle">
        
        {/* Close Button */}
        <button
          onClick={() => {
            onClose();
            setSent(false);
          }}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-foreground-intense rounded-full hover:bg-surface-subtle transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center font-bold">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-display font-extrabold text-lg text-foreground-intense">
                  Échanger avec Thomas M.
                </h3>
                <p className="text-xs text-slate-500">
                  SERVICES INDEP × AVENTATE SAS
                </p>
              </div>
            </div>

            <p className="text-xs text-foreground-strong leading-relaxed">
              Indiquez vos coordonnées pour faire le point sur votre projet et tester vos opportunités de gains sur votre secteur.
            </p>

            <div>
              <label className="block text-xs font-bold text-foreground-strong mb-1">
                Votre Nom &amp; Prénom
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Alexandre Dubois"
                value={data.name}
                onChange={e => setData({ ...data, name: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-border-subtle text-xs text-foreground-intense focus:outline-none focus:border-primary-base"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground-strong mb-1">
                Nom de votre commerce
              </label>
              <input
                type="text"
                required
                placeholder="Ex: Le Vincennes - Tabac FDJ"
                value={data.business}
                onChange={e => setData({ ...data, business: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-border-subtle text-xs text-foreground-intense focus:outline-none focus:border-primary-base"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-foreground-strong mb-1">
                Numéro de téléphone
              </label>
              <input
                type="tel"
                required
                placeholder="06 00 00 00 00"
                value={data.phone}
                onChange={e => setData({ ...data, phone: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-surface-subtle border border-border-subtle text-xs text-foreground-intense focus:outline-none focus:border-primary-base"
              />
            </div>

            <button
              type="submit"
              className="gold-glow-button w-full py-3.5 px-4 text-white font-bold text-xs rounded-xl shadow transition-all flex items-center justify-center gap-2"
            >
              <span>Demander un rappel prioritaire</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <h4 className="font-display font-bold text-lg text-foreground-intense">Demande envoyée !</h4>
            <p className="text-xs text-foreground-strong max-w-xs mx-auto">
              Thomas M. vous contactera directement sous 24h ouvrées.
            </p>
            <button
              onClick={() => {
                onClose();
                setSent(false);
              }}
              className="mt-4 px-4 py-2 bg-surface-subtle text-foreground-intense text-xs font-bold rounded-xl hover:bg-slate-200"
            >
              Fermer
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
