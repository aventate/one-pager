import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogBody,
  DialogClose,
  Button,
  Field,
  FieldLabel,
  Input,
} from '@appica/ui-react';
import { Phone, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [sent, setSent] = useState(false);
  const [data, setData] = useState({
    name: '',
    business: '',
    phone: '',
  });

  // Toute fermeture (bouton, Échap, clic sur le fond) réinitialise l'écran de confirmation.
  const handleOpenChange = (open) => {
    if (!open) {
      onClose();
      setSent(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent
        frame={false}
        closeLabel="Fermer"
        className="w-full max-w-md rounded-3xl p-6 sm:p-8"
      >
        {!sent ? (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-4"
          >
            <DialogHeader className="flex-row items-center gap-3 mb-2 space-y-0">
              <div className="w-10 h-10 rounded-xl bg-primary-subtle border border-primary-soft text-primary-base flex items-center justify-center font-bold shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <DialogTitle className="font-display font-extrabold text-lg text-foreground-intense">
                  Échanger avec Thomas M.
                </DialogTitle>
                <DialogDescription className="text-xs text-foreground-muted">
                  SERVICES INDEP × AVENTATE SAS
                </DialogDescription>
              </div>
            </DialogHeader>

            <DialogBody className="space-y-4 p-0">
              <p className="text-xs text-foreground-strong leading-relaxed">
                Indiquez vos coordonnées pour faire le point sur votre projet et tester vos opportunités de gains sur votre secteur.
              </p>

              <Field>
                <FieldLabel className="text-xs font-bold text-foreground-strong mb-1">
                  Votre Nom &amp; Prénom
                </FieldLabel>
                <Input
                  type="text"
                  required
                  inputSize="sm"
                  placeholder="Ex: Alexandre Dubois"
                  value={data.name}
                  onChange={e => setData({ ...data, name: e.target.value })}
                  className="rounded-xl text-xs"
                />
              </Field>

              <Field>
                <FieldLabel className="text-xs font-bold text-foreground-strong mb-1">
                  Nom de votre commerce
                </FieldLabel>
                <Input
                  type="text"
                  required
                  inputSize="sm"
                  placeholder="Ex: Le Vincennes - Tabac FDJ"
                  value={data.business}
                  onChange={e => setData({ ...data, business: e.target.value })}
                  className="rounded-xl text-xs"
                />
              </Field>

              <Field>
                <FieldLabel className="text-xs font-bold text-foreground-strong mb-1">
                  Numéro de téléphone
                </FieldLabel>
                <Input
                  type="tel"
                  required
                  inputSize="sm"
                  placeholder="06 00 00 00 00"
                  value={data.phone}
                  onChange={e => setData({ ...data, phone: e.target.value })}
                  className="rounded-xl text-xs"
                />
              </Field>

              <Button
                type="submit"
                className="aventate-glow-button w-full rounded-xl font-bold text-xs py-3.5"
              >
                <span>Demander un rappel prioritaire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Button>
            </DialogBody>
          </form>
        ) : (
          <div className="text-center py-6 space-y-3">
            <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-7 h-7" />
            </div>
            <DialogTitle className="font-display font-bold text-lg text-foreground-intense">
              Demande envoyée !
            </DialogTitle>
            <DialogDescription className="text-xs text-foreground-strong max-w-xs mx-auto">
              Thomas M. vous contactera directement sous 24h ouvrées.
            </DialogDescription>
            <DialogClose
              render={
                <Button variant="soft" size="sm" className="mt-4 rounded-xl font-bold text-xs">
                  Fermer
                </Button>
              }
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
