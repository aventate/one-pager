import { useState } from 'react';
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

// Définir NEXT_PUBLIC_SITE_URL une fois le nom de domaine définitif connu
// (Vercel, domaine personnalisé…) : il alimente l'URL canonique et l'image
// Open Graph. En développement, il retombe sur localhost sans casser le build.
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://votre-domaine.fr';
const PAGE_TITLE = 'Solution Digitale Commerces & Buralistes | SERVICES INDEP × AVENTATE SAS';
const PAGE_DESCRIPTION =
  "Votre commerce doit aussi exister sur Internet. Site vitrine clé en main, commandes Click & Collect, opportunités commissionnées et simulateur de rentabilité financière.";

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-foreground-intense font-sans relative">
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#c6283c" />
        <link rel="canonical" href={SITE_URL} />
        <link rel="icon" href="/logos/icon-aventate-rouge.svg" type="image/svg+xml" />

        {/* Open Graph / réseaux sociaux */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Services Indep × Aventate" />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={SITE_URL} />
        <meta property="og:image" content={`${SITE_URL}/logos/logo-aventate-rouge.svg`} />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={PAGE_TITLE} />
        <meta name="twitter:description" content={PAGE_DESCRIPTION} />
        <meta name="twitter:image" content={`${SITE_URL}/logos/logo-aventate-rouge.svg`} />

        {/* Données structurées : aide les moteurs à identifier l'éditeur
            du site plutôt que de deviner depuis le texte de la page. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Services Indep × Aventate',
              url: SITE_URL,
              logo: `${SITE_URL}/logos/logo-aventate-rouge.svg`,
              description: PAGE_DESCRIPTION,
              areaServed: 'FR',
            }),
          }}
        />
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

        {/* 06 — Conclusion et prise de contact avec Thomas */}
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
