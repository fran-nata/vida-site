export interface ProductSpec {
  label: string;
  value: number;
  max: number;
  suffix: string;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: 'solaire' | 'intimite' | 'securite' | 'decorative';
  categoryLabel: string;
  hue: number;
  description: string;
  specs: ProductSpec[];
  highlights: string[];
  serviceSlug: string;
}

export const products: Product[] = [
  {
    slug: 'clarion',
    name: 'Clarion',
    tagline: 'Clarté totale, contrôle solaire avancé',
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    description:
      "Une pellicule quasi invisible qui laisse passer jusqu'à 70% de la lumière tout en bloquant la chaleur et les UV — le choix par défaut pour préserver la vue et la clarté d'une grande fenêtre.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 70, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Vue et clarté préservées', 'Rejet de chaleur infrarouge élevé', 'Certifié NFRC'],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'keramos',
    name: 'Keramos',
    tagline: 'Film céramique haut de gamme',
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    description:
      "Une technologie céramique qui optimise à la fois la clarté et le rejet de chaleur, sans l'aspect métallisé des pellicules réfléchissantes classiques. Offert en trois teintes selon le niveau de contrôle solaire recherché.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 55, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Apparence naturelle, non réfléchissante', 'Réduit les coûts énergétiques', 'Ralentit la décoloration des meubles'],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'nocturna',
    name: 'Nocturna',
    tagline: 'Intimité subtile, sans effet miroir',
    category: 'intimite',
    categoryLabel: "Intimité",
    hue: 280,
    description:
      "Une intimité de jour discrète, sans le look métallisé d'une pellicule réfléchissante classique — un fini élégant qui convient aussi bien aux résidences modernes qu'aux bâtiments plus classiques.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 30, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Look élevé, sans effet miroir', 'Réduit efficacement l\'éblouissement', 'Résistant aux égratignures'],
    serviceSlug: 'pellicule-intimite',
  },
  {
    slug: 'visio',
    name: 'Visio',
    tagline: 'Intimité double réflexion',
    category: 'intimite',
    categoryLabel: 'Intimité',
    hue: 280,
    description:
      "Une pellicule à double réflexion pensée pour une intimité de jour maximale, tout en gardant une vue claire et naturelle vers l'extérieur une fois la nuit tombée.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 8, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Intimité de jour maximale', 'Vue naturelle conservée le soir', 'Réduit l\'éblouissement'],
    serviceSlug: 'pellicule-intimite',
  },
  {
    slug: 'frost',
    name: 'Frost',
    tagline: "L'apparence du verre givré, sans le remplacer",
    category: 'decorative',
    categoryLabel: 'Décoratif',
    hue: 150,
    description:
      "Le look du verre sablé ou gravé, appliqué directement sur une vitre existante. Laisse entrer la lumière naturelle tout en bloquant complètement la vue directe — parfait pour bureaux, salles de bain et cloisons.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 75, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Look du verre gravé, à moindre coût', 'Découpe de logo & motifs sur mesure', 'Pose et retrait sans résidu'],
    serviceSlug: 'pellicule-decorative',
  },
  {
    slug: 'bronze-reflective',
    name: 'Bronze Reflective',
    tagline: 'Chaleur bloquée, esthétique cuivrée',
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    description:
      "Une pellicule réfléchissante à la teinte cuivrée chaude, pensée pour les façades les plus exposées — elle bloque une bonne partie de la chaleur solaire tout en ajoutant une intimité de jour.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 35, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Idéale pour façades très ensoleillées', 'Intimité de jour incluse', 'Réduit les coûts de climatisation'],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'silver-reflective',
    name: 'Silver Reflective',
    tagline: 'Rejet de chaleur maximal',
    category: 'solaire',
    categoryLabel: 'Contrôle solaire',
    hue: 230,
    description:
      "La pellicule miroir classique, toujours l'une des plus performantes pour le rejet de chaleur solaire. Le choix des bâtiments commerciaux à forte exposition qui veulent maximiser l'efficacité énergétique.",
    specs: [
      { label: 'Transmission lumineuse (VLT)', value: 40, max: 100, suffix: '%' },
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
    ],
    highlights: ['Rejet de chaleur parmi les plus élevés', 'Intimité de jour maximale', 'Idéale pour le commercial'],
    serviceSlug: 'pellicule-solaire',
  },
  {
    slug: 'fortis',
    name: 'Fortis',
    tagline: 'Renforcement du vitrage contre les chocs',
    category: 'securite',
    categoryLabel: 'Sécurité',
    hue: 20,
    description:
      "Une construction multicouche qui maintient les fragments de verre ensemble lors d'un impact, ralentissant considérablement une tentative d'effraction. Offerte en trois épaisseurs selon le niveau de protection recherché.",
    specs: [
      { label: 'Rayons UV bloqués', value: 99, max: 100, suffix: '%' },
      { label: 'Épaisseur maximale offerte', value: 14, max: 14, suffix: ' mil' },
    ],
    highlights: ['Maintient le verre en place lors d\'un bris', 'Ralentit les tentatives d\'intrusion', 'Réduit les blessures par éclats'],
    serviceSlug: 'pellicule-securite',
  },
];

export const productCategories = [
  { key: 'solaire', label: 'Contrôle solaire', hue: 230 },
  { key: 'intimite', label: 'Intimité', hue: 280 },
  { key: 'securite', label: 'Sécurité', hue: 20 },
  { key: 'decorative', label: 'Décoratif', hue: 150 },
] as const;
