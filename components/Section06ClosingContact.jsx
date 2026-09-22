import { useState } from 'react';
import { Button, Card, Field, FieldLabel, Input, Separator } from '@appica/ui-react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import SectionEyebrow from './SectionEyebrow';

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

  const guarantees = [
    { title: "01. Étude Locale", desc: "Audit de visibilité sur votre secteur." },
    { title: "02. Sur-Mesure", desc: "Vos photos, logos et horaires réels." },
    { title: "03. Zéro Souci", desc: "Maintenance & 4h/mois incluses." },
  ];

  return (
    <section id="section-contact" className="bg-transparent text-foreground-intense py-16 sm:py-24 border-t border-border-subtle">
      <div className="w-full max-w-[1780px] mx-auto px-4 sm:px-6 lg:px-8">

        <Card
          className="[--card-radius:2rem] shadow-md"
          contentProps={{ className: 'p-8 sm:p-12 lg:p-16' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* GAUCHE : ARGUMENTAIRE CLOSING (7 COLS) */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

              <SectionEyebrow dot>Passez à l'action</SectionEyebrow>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-foreground-intense tracking-tight leading-[1.1]">
                Modernisez votre commerce et sécurisez vos marges.
              </h2>

              <p className="text-foreground-strong text-lg sm:text-xl leading-relaxed max-w-5xl mx-auto lg:mx-0 font-normal">
                Thomas M. et l’équipe AVENTATE sont à vos côtés pour déployer votre solution clé en main, sans aucune charge technique pour vous.
              </p>

              {/* 3 garanties compactes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {guarantees.map((g) => (
                  <div
                    key={g.title}
                    className="p-5 sm:p-6 rounded-2xl bg-primary-subtle/40 border border-primary-soft text-center"
                  >
                    <span className="text-primary-strong font-bold text-sm sm:text-base uppercase block mb-1.5">
                      {g.title}
                    </span>
                    <p className="text-xs sm:text-sm text-foreground-muted font-medium">
                      {g.desc}
                    </p>
                  </div>
                ))}
              </div>

            </div>

            {/* DROITE : FORMULAIRE THOMAS (5 COLS) */}
            <Card
              className="lg:col-span-5 [--card-radius:2rem] shadow-md"
              contentProps={{ className: 'bg-surface-subtle text-foreground-intense p-8 sm:p-12' }}
            >

              {!formSent ? (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  <div>
                    <span className="text-xs font-black uppercase tracking-wider text-primary-base block mb-1">
                      CONTACT DIRECT DÉDIÉ
                    </span>
                    <h3 className="font-display font-black text-2xl sm:text-3xl text-foreground-intense">
                      Être rappelé par Thomas M.
                    </h3>
                    <p className="text-xs sm:text-sm text-foreground-muted mt-1 font-medium">
                      Échange téléphonique de 10 minutes sous 24h ouvrées.
                    </p>
                  </div>

                  <Field>
                    <FieldLabel className="block text-xs sm:text-sm font-bold text-foreground-strong mb-1.5">
                      Votre Nom &amp; Prénom
                    </FieldLabel>
                    <Input
                      type="text"
                      required
                      inputSize="lg"
                      placeholder="Ex: Jean Martin"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-2xl bg-white text-base"
                    />
                  </Field>

                  <Field>
                    <FieldLabel className="block text-xs sm:text-sm font-bold text-foreground-strong mb-1.5">
                      Nom de votre commerce
                    </FieldLabel>
                    <Input
                      type="text"
                      required
                      inputSize="lg"
                      placeholder="Ex: Tabac Presse de la Gare"
                      value={formData.business}
                      onChange={e => setFormData({ ...formData, business: e.target.value })}
                      className="w-full rounded-2xl bg-white text-base"
                    />
                  </Field>

                  <Field>
                    <FieldLabel className="block text-xs sm:text-sm font-bold text-foreground-strong mb-1.5">
                      Numéro de téléphone
                    </FieldLabel>
                    <Input
                      type="tel"
                      required
                      inputSize="lg"
                      placeholder="06 12 34 56 78"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-2xl bg-white text-base"
                    />
                  </Field>

                  <Button
                    type="submit"
                    size="lg"
                    className="aventate-glow-button w-full h-auto py-4 px-8 font-black text-base sm:text-lg rounded-2xl shadow-xl gap-3 mt-3"
                  >
                    <span>Valider ma demande de rappel</span>
                    <ArrowRight className="w-5 h-5" />
                  </Button>
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

            </Card>

          </div>
        </Card>

        {/* FOOTER AVEC LOGOS OFFICIELS SUR FOND CLAIR */}
        <Separator className="mt-16" />
        <div className="pt-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-5">
              <img
                src="/logos/logo-services-indep-dark-cropped.png"
                alt="Services Indep"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
              <Separator orientation="vertical" className="h-8 hidden sm:block" />
              <img
                src="/logos/logo-aventate-rouge.svg"
                alt="Aventate"
                className="h-7 sm:h-8 md:h-9 w-auto object-contain"
              />
            </div>
          </div>

          <p className="text-xs sm:text-sm text-foreground-muted text-center lg:text-right font-medium max-w-3xl">
            Partenariat officiel : solution métier conçue pour <strong>Services Indep</strong> et opérée techniquement par <strong>AVENTATE SAS</strong>.
          </p>
        </div>

      </div>
    </section>
  );
}
