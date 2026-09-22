import { Badge } from '@appica/ui-react';

/**
 * Encart chapeau rose-rouge de la charte Aventate.
 *
 * Ce motif était copié-collé à l'identique dans une quinzaine d'endroits.
 * Il s'appuie sur le Badge d'Appica, dont la variante `soft` est neutre par
 * défaut : le fond et la bordure sont portés par le pseudo-élément `before`,
 * qu'on reteinte ici aux couleurs de la marque.
 *
 * @param {'lg'|'sm'} tone  `lg` = chapeau de section, `sm` = sous-titre d'un bloc interne.
 * @param {boolean}   dot   Affiche la pastille rouge pulsante.
 * @param {Function}  icon  Composant d'icône lucide-react affiché à gauche.
 */
export default function SectionEyebrow({
  children,
  tone = 'lg',
  dot = false,
  icon: Icon,
  className = '',
}) {
  const sizing =
    tone === 'lg'
      ? 'gap-2.5 px-5 py-2 text-xs sm:text-sm'
      : 'gap-2 px-3.5 py-1.5 text-xs';

  return (
    <Badge
      variant="soft"
      className={`${sizing} font-black uppercase tracking-wider leading-none text-primary-strong before:bg-primary-subtle before:border before:border-primary-soft ${className}`}
    >
      {dot && <span className="w-2.5 h-2.5 rounded-full bg-primary-base animate-pulse shrink-0" />}
      {Icon && <Icon className="w-4 h-4 text-primary-base shrink-0" />}
      <span>{children}</span>
    </Badge>
  );
}
