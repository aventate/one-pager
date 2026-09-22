import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Phone, ChevronRight, LayoutDashboard, ShieldCheck } from 'lucide-react';
import SectionDashboardBuraliste from '../components/SectionDashboardBuraliste';
import ContactModal from '../components/ContactModal';

export default function EspaceBuralistePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#c6283c] selection:text-white relative">
      <Head>
        <title>Espace Buraliste · Console Commerçante | SERVICES INDEP × AVENTATE SAS</title>
        <meta
          name="description"
          content="Espace Buraliste privé : suivi en direct des commissions d'affaires partenaires (Assurance & Alarme), retrait express Click & Collect et tendances d'achats locales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Halo de lumière rouge Aventate OS · Épuré, doux et reposant */}
      <div className="aventate-ambient-glow" aria-hidden="true" />

      {/* Barre de navigation dédiée de l'Espace Buraliste */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border-subtle shadow-xs py-3 text-foreground-intense">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Bouton de retour rapide vers la présentation */}
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-3.5 sm:px-4 py-2 rounded-xl bg-surface-subtle hover:bg-slate-200 border border-border-subtle text-foreground-strong font-bold text-xs sm:text-sm transition-all hover:-translate-x-0.5 shrink-0"
            >
              <ArrowLeft className="w-4 h-4 text-primary-base" />
              <span>Retour à la présentation</span>
            </Link>

            {/* Alliance des Logos avec distinction claire */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <img
                src="/logos/logo-services-indep-dark-cropped.png"
                alt="Services Indep"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain shrink-0"
              />
              <div className="h-6 w-px bg-slate-200 hidden sm:block shrink-0" />
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 leading-none">
                  Opéré par
                </span>
                <img
                  src="/logos/logo-aventate-rouge.svg"
                  alt="Aventate"
                  className="h-4.5 sm:h-5.5 md:h-6 w-auto object-contain shrink-0 mt-0.5"
                />
              </div>
            </div>

            {/* Action Directe */}
            <div className="flex items-center gap-2.5 shrink-0">
              <button
                onClick={() => setIsContactModalOpen(true)}
                className="gold-glow-button inline-flex items-center gap-2 px-4 sm:px-5 py-2 text-xs sm:text-sm font-black text-white rounded-xl shadow transition-all whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Être rappelé par Thomas M.</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Contenu de la Console du Tableau de Bord */}
      <main className="pt-16 sm:pt-20">
        <SectionDashboardBuraliste onOpenContact={() => setIsContactModalOpen(true)} />
      </main>

      {/* Modale de rappel express */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
