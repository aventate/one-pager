import { Badge } from '@appica/ui-react';

/**
 * Chapeau de section de la charte Aventate.
 *
 * Deux présentations :
 * - avec `number` : chapeau de section principale ("01", "02"…), style éditorial
 *   pastille numérotée + filet + libellé, pour casser la répétition visuelle
 *   des pilules pleines répétées section après section.
 * - sans `number` : pilule pleine (fond rose, bordure), utilisée pour les
 *   sous-titres de blocs internes ou les chapeaux sans numérotation.
 *
 * @param {'lg'|'sm'} tone    `lg` = chapeau de section, `sm` = sous-titre d'un bloc interne.
 * @param {string}    number  Numéro de section ("01"…). Active le style éditorial.
 * @param {boolean}   dot     Pilule uniquement : affiche la pastille rouge pulsante.
 * @param {Function}  icon    Composant d'icône lucide-react affiché à gauche.
 */
export default function SectionEyebrow({
  children,
  tone = 'lg',
  number,
  dot = false,
  icon: Icon,
  className = '',
}) {
  if (number) {
    return (
      <div className={`inline-flex items-center gap-3.5 ${className}`}>
        <span className="flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-primary-base text-white font-display font-black text-sm sm:text-base shrink-0 shadow-sm">
          {number}
        </span>
        <span className="h-px w-8 sm:w-12 bg-primary-soft shrink-0" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-black uppercase tracking-widest text-primary-strong leading-none">
          {children}
        </span>
      </div>
    );
  }

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
