export interface ProductSpec {
  label: string;
  value: number;
  max: number;
  suffix: string;
  outcome: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  hook: string;
  category: 'solaire' | 'intimite' | 'securite' | 'decorative';
  categoryLabel: string;
  hue: number;
  photo: string;
  specs: ProductSpec[];
  serviceSlug: string;
}

export const products: Product[] = [
  {
    slug: 'clarion',
    name: 'Clarion',
    tagline: 'Clarté totale, contrôle solaire avancé',
    hook: "Vos fenêtres restent aussi claires qu'avant — la chaleur et les UV en moins.",
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    photo: '/images/pellicule-tekton-clarion-fenetre-vue-montagne.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 70, max: 100, suffix: '%', outcome: "La pièce garde toute sa luminosité — aucun effet « vitre teintée »." },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Planchers, meubles et tissus arrêtent de jaunir au soleil.' },
    ],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'keramos',
    name: 'Keramos',
    tagline: 'Film céramique haut de gamme',
    hook: "Le contrôle solaire d'une pellicule réfléchissante, sans jamais en avoir l'air.",
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    photo: '/images/pellicule-tekton-keramos-ceramique-fenetre.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 55, max: 100, suffix: '%', outcome: "Assez de lumière pour ne jamais avoir à allumer en plein jour." },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Vos meubles et planchers protégés, sans y penser.' },
    ],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'nocturna',
    name: 'Nocturna',
    tagline: 'Intimité subtile, sans effet miroir',
    hook: 'Personne ne voit à l\'intérieur le jour — vous, vous voyez toujours dehors le soir.',
    category: 'intimite',
    categoryLabel: 'Intimité',
    hue: 280,
    photo: '/images/pellicule-tekton-nocturna-intimite-fenetre.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 30, max: 100, suffix: '%', outcome: 'Assez de clarté pour garder la pièce vivante toute la journée.' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Vos meubles protégés en prime.' },
    ],
    serviceSlug: 'pellicule-intimite',
  },
  {
    slug: 'visio',
    name: 'Visio',
    tagline: 'Intimité double réflexion',
    hook: 'Intimité maximale le jour, vue intacte une fois la nuit tombée.',
    category: 'intimite',
    categoryLabel: 'Intimité',
    hue: 280,
    photo: '/images/pellicule-tekton-visio-double-reflexion-fenetre.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 8, max: 100, suffix: '%', outcome: 'Personne ne devine ce qui se passe à l\'intérieur, même en plein jour.' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Protection UV incluse, sans effort de plus.' },
    ],
    serviceSlug: 'pellicule-intimite',
  },
  {
    slug: 'frost',
    name: 'Frost',
    tagline: "L'apparence du verre givré, sans le remplacer",
    hook: "Le look du verre gravé, posé en une visite — sans les frais d'un vitrier.",
    category: 'decorative',
    categoryLabel: 'Décoratif',
    hue: 150,
    photo: '/images/pellicule-tekton-frost-givree-fenetre.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 75, max: 100, suffix: '%', outcome: 'La pièce reste lumineuse — c\'est la vue directe qui disparaît.' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Une protection qu\'on n\'a pas à payer en plus.' },
    ],
    serviceSlug: 'pellicule-decorative',
  },
  {
    slug: 'bronze-reflective',
    name: 'Bronze Reflective',
    tagline: 'Chaleur bloquée, esthétique cuivrée',
    hook: 'La fenêtre la plus chaude de la maison redevient vivable — été comme hiver.',
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    photo: '/images/pellicule-tekton-bronze-reflective-fenetre.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 35, max: 100, suffix: '%', outcome: 'Le soleil de plomb est filtré sans assombrir la pièce.' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Meubles et planchers protégés à long terme.' },
    ],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'silver-reflective',
    name: 'Silver Reflective',
    tagline: 'Rejet de chaleur maximal',
    hook: "Le rejet de chaleur le plus poussé de la gamme — pour les façades qui n'ont jamais de répit.",
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    photo: '/images/pellicule-tekton-silver-reflective-fenetre.jpg',
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 40, max: 100, suffix: '%', outcome: 'La climatisation travaille moins fort, tout l\'été.' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Vos intérieurs protégés du jaunissement.' },
    ],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'fortis',
    name: 'Fortis',
    tagline: 'Renforcement du vitrage contre les chocs',
    hook: 'Le verre se fissure, mais il reste en place — l\'effraction est ralentie, pas juste dissuadée.',
    category: 'securite',
    categoryLabel: 'Sécurité',
    hue: 20,
    photo: '/images/pellicule-tekton-fortis-securite-vitre-fissuree.jpg',
    specs: [
      { label: 'Épaisseur maximale offerte', value: 14, max: 14, suffix: ' mil', outcome: 'Environ 7 fois plus épaisse que notre pellicule décorative Frost (2 mil).' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Une protection supplémentaire pour vos meubles, en prime.' },
    ],
    serviceSlug: 'pellicule-securite',
  },
  {
    slug: 'fortis-specialty',
    name: 'Fortis Specialty',
    tagline: 'Sécurité et fini décoratif combinés',
    hook: 'La protection Fortis, avec le fini givré, réfléchissant ou teinté en prime — un seul film, deux fonctions.',
    category: 'securite',
    categoryLabel: 'Sécurité',
    hue: 20,
    photo: '/images/pellicule-tekton-fortis-securite-vitre-fissuree.jpg',
    specs: [
      { label: 'Épaisseur (variante Frost 13)', value: 13, max: 14, suffix: ' mil', outcome: 'Presque aussi robuste que notre Fortis 14, avec un fini givré intégré.' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Protection UV incluse sur les trois finis offerts.' },
    ],
    serviceSlug: 'pellicule-securite',
  },
  {
    slug: 'fortis-graffiti',
    name: 'Fortis Graffiti',
    tagline: 'Bouclier sacrificiel contre les graffitis et égratignures',
    hook: 'Le graffiti abîme le film, pas votre vitrine — on le remplace, la vitre ne bouge pas.',
    category: 'securite',
    categoryLabel: 'Sécurité',
    hue: 20,
    photo: '/images/pellicule-tekton-fortis-graffiti-cloison-vitree.jpg',
    specs: [
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%', outcome: 'Vos surfaces protégées du jaunissement, en plus du blindage anti-graffiti.' },
    ],
    serviceSlug: 'pellicule-securite',
  },
];

export const productCategories = [
  { key: 'solaire', label: 'Contrôle solaire', hue: 230 },
  { key: 'intimite', label: 'Intimité', hue: 280 },
  { key: 'securite', label: 'Sécurité', hue: 20 },
  { key: 'decorative', label: 'Décoratif', hue: 150 },
] as const;
