import React, { useState } from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Section01Presence from '../components/Section01Presence';
import Section02OutilCommercial from '../components/Section02OutilCommercial';
import Section03Opportunites from '../components/Section03Opportunites';
import SectionDashboardTeaser from '../components/SectionDashboardTeaser';
import SectionRoiSimulator from '../components/SectionRoiSimulator';
import Section04OffreTarifs from '../components/Section04OffreTarifs';
import Section05AbonnementDetail from '../components/Section05AbonnementDetail';
import Section06ClosingContact from '../components/Section06ClosingContact';
import ContactModal from '../components/ContactModal';
import FloatingDock from '../components/FloatingDock';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-[#c6283c] selection:text-white relative">
      <Head>
        <title>Solution Digitale Commerces &amp; Buralistes | SERVICES INDEP × AVENTATE SAS</title>
        <meta
          name="description"
          content="Votre commerce doit aussi exister sur Internet. Site vitrine clé en main, commandes Click & Collect, opportunités commissionnées et simulateur de rentabilité financière."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Halo de lumière rouge Aventate OS · Épuré, doux et reposant */}
      <div className="aventate-ambient-glow" aria-hidden="true" />

      {/* Barre de navigation avec les deux logos officiels */}
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />

      <main>
        {/* 01 — Votre commerce sur Internet (Page 1 PDF + Aversion à la perte) */}
        <Section01Presence />

        {/* 02 — Un site qui devient un outil commercial + Showroom interactif natif & Flash QR Code (Page 2 PDF) */}
        <Section02OutilCommercial />

        {/* 03 — Opportunités complémentaires : Assurance & Alarme en 5 étapes (Page 3 PDF) */}
        <Section03Opportunites />

        {/* Carte Teaser Espace Buraliste : Redirection interne vers /espace-buraliste */}
        <SectionDashboardTeaser />

        {/* Module Interactif : Simulateur ROI express & Autofinancement en 3 secondes */}
        <SectionRoiSimulator onOpenContact={() => setIsContactModalOpen(true)} />

        {/* 04 — Votre offre : Création + Formules d'abonnement + 9 piliers techniques (Page 4 PDF) */}
        <Section04OffreTarifs onOpenContact={() => setIsContactModalOpen(true)} />

        {/* 05 — Votre abonnement en détail : 4h incluses + Inclus/Non inclus (Page 5 PDF) */}
        <Section05AbonnementDetail />

        {/* 06 — Conclusion, Prise de contact avec Thomas & Impression PDF */}
        <Section06ClosingContact />
      </main>

      {/* Barre de navigation rapide flottante (aide au parcours client) */}
      <FloatingDock onOpenContact={() => setIsContactModalOpen(true)} />

      {/* Modale de rappel express avec Thomas */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
