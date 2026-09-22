import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Button, Separator } from '@appica/ui-react';
import { ArrowLeft, Phone, ChevronRight } from 'lucide-react';
import SectionDashboardBuraliste from '../components/SectionDashboardBuraliste';
import ContactModal from '../components/ContactModal';

export default function EspaceBuralistePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground-intense font-sans relative">
      <Head>
        <title>Espace Buraliste · Console Commerçante | SERVICES INDEP × AVENTATE SAS</title>
        <meta
          name="description"
          content="Espace Buraliste privé : suivi en direct des commissions d'affaires partenaires (Assurance), retrait express Click & Collect et tendances d'achats locales."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#c6283c" />
        <link rel="icon" href="/logos/icon-aventate-rouge.svg" type="image/svg+xml" />
        {/* Démo à données fictives : pas d'intérêt à l'indexer, et éviter
            qu'elle ressorte dans une recherche comme un vrai commerce. */}
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Halo de lumière rouge Aventate OS · Épuré, doux et reposant */}
      <div className="aventate-ambient-glow" aria-hidden="true" />

      {/* Barre de navigation dédiée de l'Espace Buraliste */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-border-subtle shadow-xs py-3 text-foreground-intense">
        <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* Bouton de retour rapide vers la présentation */}
            <Button
              variant="soft"
              size="sm"
              className="rounded-xl font-bold text-xs sm:text-sm transition-all hover:-translate-x-0.5 shrink-0"
              render={<Link href="/" />}
            >
              <ArrowLeft className="w-4 h-4 text-primary-base" />
              <span>Retour à la présentation</span>
            </Button>

            {/* Alliance des Logos avec distinction claire */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0">
              <img
                src="/logos/logo-services-indep-dark-cropped.png"
                alt="Services Indep"
                className="h-9 sm:h-11 md:h-12 w-auto object-contain shrink-0"
              />
              <Separator orientation="vertical" className="h-6 hidden sm:block shrink-0" />
              <div className="hidden sm:flex flex-col text-left">
                <span className="text-[9px] font-black uppercase tracking-wider text-foreground-subtle leading-none">
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
              <Button
                onClick={() => setIsContactModalOpen(true)}
                className="aventate-glow-button font-black rounded-xl shadow whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span className="hidden sm:inline">Être rappelé par Thomas M.</span>
                <ChevronRight className="w-4 h-4 opacity-70" />
              </Button>
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
