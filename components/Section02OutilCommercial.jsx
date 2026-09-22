import { Button, Card, CardTitle, CardDescription } from '@appica/ui-react';
import { ShoppingBag, List, ShoppingCart, Store, ExternalLink, Sparkles } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

export default function Section02OutilCommercial() {
  const demoUrl = "https://website-client1.vercel.app";

  const clientActions = [
    {
      icon: ShoppingBag,
      title: "Consulter vos produits",
      desc: "Votre offre consultable à tout moment sur mobile avec des informations claires et à jour.",
    },
    {
      icon: List,
      title: "Découvrir vos services",
      desc: "Point relais colis, FDJ, timbres, compte Nickel expliqués en toute simplicité.",
    },
    {
      icon: ShoppingCart,
      title: "Préparer une commande",
      desc: "Le client prépare sa demande en amont sans encombrer la file d'attente.",
    },
    {
      icon: Store,
      title: "Retrait express magasin",
      desc: "La commande est préparée d'avance, le client passe simplement la récupérer.",
    },
  ];

  const guarantees = [
    { num: "01", title: "Horaires 7j/7", desc: "Certifiés en temps réel" },
    { num: "02", title: "Rayons & Relais", desc: "FDJ, colis, presse, vapotage" },
    { num: "03", title: "Commissions", desc: "Assurance & Alarme Homiris" },
  ];

  return (
    <section id="section-02" className="py-16 sm:py-20 border-b border-border-subtle bg-[#fcfbf9]">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* En-Tête Centré */}
        <div className="mb-12 sm:mb-16 text-center max-w-7xl mx-auto">
          <div className="mb-6">
            <SectionEyebrow dot>02 · UN SITE QUI DEVIENT UN OUTIL COMMERCIAL</SectionEyebrow>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight text-foreground-intense mb-6">
            Transformer votre site en <span className="text-gradient-aventate">véritable outil commercial.</span>
          </h2>

          <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed font-normal mx-auto max-w-6xl">
            Selon vos besoins et votre mode de travail, votre site va bien plus loin que la simple présentation : il valorise vos services, fluidifie les commandes et capte des opportunités commerciales qualifiées.
          </p>
        </div>

        <div className="mb-16 text-center">
          <div className="mb-3">
            <SectionEyebrow tone="sm">CE QUE VOS CLIENTS PEUVENT Y FAIRE</SectionEyebrow>
          </div>
          <h3 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground-intense tracking-tight">
            Un site qui rend service au quotidien
          </h3>
          <p className="text-base sm:text-lg text-foreground-muted mt-4 max-w-5xl mx-auto font-medium">
            Le fonctionnement est entièrement personnalisé pour chaque établissement. Rien n'est imposé : les modules sont activés selon vos priorités.
          </p>
        </div>

        {/* Grille 4 fonctionnalités grand format */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-left">
          {clientActions.map((action, idx) => {
            const Icon = action.icon;
            return (
              <Card
                key={idx}
                className="[--card-radius:1.5rem] shadow-xs hover:shadow-lg transition-all"
                contentProps={{
                  className:
                    'p-8 sm:p-10 border-primary-soft/60 hover:border-primary-base/50 transition-colors flex flex-col justify-between',
                }}
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center mb-6 shadow-xs">
                    <Icon className="w-7 h-7" />
                  </div>
                  <CardTitle className="font-display font-black text-xl sm:text-2xl text-foreground-intense mb-3">
                    {action.title}
                  </CardTitle>
                  <CardDescription className="text-base text-foreground-muted leading-relaxed font-medium">
                    {action.desc}
                  </CardDescription>
                </div>
              </Card>
            );
          })}
        </div>

        {/* 3. CARTE DE CONVERSION DIRECTE (SANS APERÇU, LIEN DIRECT EN DIRECT) FOND BLANC LUXE */}
        <Card
          className="[--card-radius:2.25rem] shadow-xl"
          contentProps={{
            className:
              'relative overflow-hidden p-10 sm:p-16 lg:p-20 text-center text-foreground-intense hover:border-primary-base/40 transition-colors',
          }}
        >
          <div className="relative z-10 max-w-5xl mx-auto space-y-8">

            <SectionEyebrow tone="lg" icon={Sparkles}>
              DÉMONSTRATION RÉELLE EN LIGNE
            </SectionEyebrow>

            <h4 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground-intense tracking-tight leading-tight">
              Tabac Presse Paris 11 <br />
              <span className="text-gradient-aventate">La vitrine digitale en action</span>
            </h4>

            <p className="text-lg sm:text-xl text-foreground-muted leading-relaxed max-w-6xl mx-auto font-normal">
              Découvrez concrètement l'exemple conçu pour un commerce de quartier (42 rue de la Roquette, Paris 11e). Explorez la fluidité de navigation, la présentation claire des services et la passerelle d'opportunités commerciales.
            </p>

            {/* 3 garanties en pillules fond clair */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 text-left">
              {guarantees.map((g) => (
                <div
                  key={g.num}
                  className="p-5 rounded-2xl bg-surface-subtle border border-border-subtle flex items-center gap-3.5 shadow-sm"
                >
                  <div className="w-10 h-10 rounded-xl bg-primary-subtle text-primary-base flex items-center justify-center shrink-0 font-black">
                    {g.num}
                  </div>
                  <div>
                    <span className="text-sm font-bold text-foreground-intense block">{g.title}</span>
                    <span className="text-xs text-foreground-muted">{g.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* GRAND BOUTON MAJESTUEUX : VISITER LE SITE EN DIRECT */}
            <div className="pt-6">
              <Button
                size="lg"
                className="aventate-glow-button gap-4 px-10 sm:px-14 py-5 h-auto text-lg sm:text-2xl font-black rounded-2xl shadow-xl hover:scale-105"
                render={<a href={demoUrl} target="_blank" rel="noopener noreferrer" />}
              >
                <span>Visiter le site en direct</span>
                <ExternalLink className="w-6 h-6 sm:w-7 sm:h-7" />
              </Button>
            </div>
          </div>
        </Card>

      </div>
    </section>
  );
}
