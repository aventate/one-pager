# One-Pager — Solution Digitale Commerces & Buralistes

Site vitrine (one-pager) présentant l'offre commune **SERVICES INDEP × AVENTATE** aux commerçants et buralistes : création de site internet, Click & Collect, commissions sur opportunités d'assurance, et un espace de gestion privé ("Espace Buraliste").

Ce document explique, sans jargon technique, ce que contient ce dépôt et comment le consulter ou le faire tourner sur son ordinateur.

---

## 1. Ce que contient le site

Le site a **deux pages** :

### Page d'accueil (`/`)
Le one-pager public, celui qu'un commerçant visiterait pour découvrir l'offre. Il défile en une seule page, section par section :

| Section | Contenu |
|---|---|
| **01 — Présence en ligne** | Pourquoi un commerce doit exister sur Internet aujourd'hui, avec un parcours client animé (recherche Google → site → visite en boutique). |
| **02 — Outil commercial** | Ce que le site permet aux clients de faire (consulter les produits, réserver, retirer en boutique) + une démo réelle en ligne. |
| **03 — Opportunités complémentaires** | L'offre partenaire Assurance (particuliers et professionnels) et le processus en 5 étapes pour toucher une commission. |
| **Teaser Espace Buraliste** | Aperçu du tableau de bord privé, avec un bouton vers la page `/espace-buraliste`. |
| **Simulateur ROI** | Un curseur simple pour estimer le volume d'affaires généré (commandes + commissions). |
| **04 — Offre tarifaire** | Les 3 formules (Essentiel / Commerçant / Performance) avec prix de création et d'abonnement. |
| **05 — Abonnement en détail** | Ce qui est inclus dans l'abonnement mensuel (4h de modifications, etc.) vs ce qui est hors forfait. |
| **06 — Contact** | Prise de contact directe avec Thomas. |

### Espace Buraliste (`/espace-buraliste`)
Une page de **démonstration** (données fictives) du tableau de bord que reçoit un commerçant une fois client : suivi des commissions, des commandes Click & Collect, des tendances d'achats du quartier, et de la fréquentation Google. Cette page n'est pas indexée par Google (elle est marquée `noindex`) puisqu'elle ne sert qu'à la démo.

---

## 2. Voir le site sans rien installer

Le plus simple : demander à Thomas de partager un lien de démonstration (Vercel) une fois le site déployé. Sinon, suivre la section 3 ci-dessous pour le lancer en local.

---

## 3. Lancer le site sur son ordinateur

### Pré-requis
Installer **Node.js** (version 18 ou plus récente) : [nodejs.org](https://nodejs.org) — c'est le seul logiciel nécessaire, tout le reste s'installe automatiquement.

### Étapes

Ouvrir un Terminal, se placer dans le dossier du projet, puis :

```bash
# 1. Installer les dépendances (une seule fois, ou après un changement de code)
npm install

# 2. Lancer le site en local
npm run dev
```

Le Terminal affiche une adresse (en général `http://localhost:3000`) : l'ouvrir dans un navigateur pour voir le site. Toute modification du code se recharge automatiquement.

Pour arrêter le serveur : `Ctrl + C` dans le Terminal.

### Autres commandes utiles

```bash
npm run build   # Vérifie que le site se construit sans erreur (utile avant une mise en ligne)
npm run start   # Lance la version "production" du site (après npm run build)
```

---

## 4. Avec quoi le site est construit

Pas besoin de tout comprendre pour l'utiliser, mais pour référence :

- **[Next.js](https://nextjs.org)** — le framework qui gère les pages et la performance du site.
- **[React](https://react.dev)** — la bibliothèque qui construit l'interface.
- **[Tailwind CSS](https://tailwindcss.com)** — le système de styles (couleurs, espacements, mise en page).
- **[@appica/ui-react](https://appica.com)** — la bibliothèque de composants d'interface (boutons, cartes, onglets, etc.) utilisée dans tout le site.

---

## 5. Organisation des fichiers

```
pages/                    → Les 2 pages du site (accueil et espace buraliste)
components/                → Chaque section du site est un fichier séparé
  Section01Presence.jsx        → Section 01
  Section02OutilCommercial.jsx → Section 02
  Section03Opportunites.jsx    → Section 03
  Section04OffreTarifs.jsx     → Grille tarifaire
  Section05AbonnementDetail.jsx→ Détail de l'abonnement
  Section06ClosingContact.jsx  → Section contact
  SectionDashboardBuraliste.jsx→ Le tableau de bord complet (page Espace Buraliste)
  SectionDashboardTeaser.jsx   → L'aperçu du dashboard sur la page d'accueil
  SectionRoiSimulator.jsx      → Le simulateur de rentabilité
  Navbar.jsx / FloatingDock.jsx→ Barre de navigation et menu flottant
  ContactModal.jsx              → La fenêtre de prise de contact
styles/globals.css        → Couleurs, polices et styles globaux du site
public/                    → Logos, robots.txt, sitemap.xml (fichiers servis tels quels)
```

Chaque section de la page d'accueil correspond donc à un seul fichier dans `components/` : pour modifier un texte, c'est le premier endroit où regarder.

---

## 6. À savoir avant une mise en ligne officielle

Deux réglages sont encore des **placeholders** (valeurs temporaires) à remplacer une fois le nom de domaine définitif connu :

- `public/robots.txt` et `public/sitemap.xml` — contiennent `https://votre-domaine.fr` à remplacer par la vraie adresse.
- `pages/index.js` — utilise la variable `NEXT_PUBLIC_SITE_URL` (à définir dans les réglages du projet une fois hébergé, par exemple sur Vercel) pour l'URL canonique et les aperçus de partage (Open Graph).

Sans cette mise à jour, le site fonctionne normalement mais ces éléments techniques (référencement, partage sur les réseaux) pointeront vers une fausse adresse.

---

## 7. Contact

Pour toute question sur le contenu ou l'offre : **Thomas M.** — contact@aventate.com
