export interface FAQ {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  icon: string;
  hue: number;
  heroTitle: string;
  heroDescription: string;
  cardDescription: string;
  photoCaption: string;
  benefits: { title: string; description: string }[];
  tags: string;
  useCases?: string[];
  faqs: FAQ[];
}

export const services: Service[] = [
  {
    slug: 'pellicule-solaire',
    name: 'Pellicule Solaire',
    shortName: 'solaire',
    tagline: "Confort & efficacité énergétique",
    icon: '☀️',
    hue: 230,
    heroTitle: 'Pellicule solaire pour fenêtres à Montréal',
    heroDescription:
      "La pellicule solaire réduit la chaleur, l'éblouissement et bloque jusqu'à 99% des rayons UV nuisibles — tout en préservant la clarté de vos fenêtres et la lumière naturelle. Idéale pour les maisons, condos et bureaux exposés au soleil.",
    cardDescription:
      "La pellicule solaire réduit la chaleur, l'éblouissement et bloque jusqu'à 99% des rayons UV nuisibles, tout en laissant entrer la lumière naturelle.",
    photoCaption: 'pellicule solaire installée sur grande fenêtre de salon',
    benefits: [
      { title: 'Réduction de chaleur', description: "Jusqu'à 80% de rejet de chaleur solaire, pour un intérieur plus frais en été." },
      { title: 'Protection UV', description: "Bloque jusqu'à 99% des rayons UV, protégeant planchers, meubles et tissus contre la décoloration." },
      { title: "Réduction d'éblouissement", description: 'Regardez vos écrans et profitez de vos pièces sans plisser les yeux.' },
      { title: "Économies d'énergie", description: "Moins de charge sur la climatisation, des factures d'énergie allégées." },
    ],
    tags: 'Maisons · Condos · Bureaux · Commerces',
    useCases: ['Maisons unifamiliales', 'Condominiums', 'Vérandas & solariums', 'Bureaux & commerces', 'Cliniques médicales', 'Immeubles professionnels'],
    faqs: [
      { question: 'La pellicule solaire assombrit-elle la pièce ?', answer: 'Non — la plupart de nos pellicules solaires laissent passer 60 à 70% de la lumière visible tout en bloquant la chaleur et les UV.' },
      { question: "Combien coûte l'installation de pellicule solaire ?", answer: 'Le coût dépend de la surface vitrée et du type de pellicule choisi. Obtenez une estimation gratuite et personnalisée en quelques minutes.' },
      { question: 'Quelle est la durée de vie de la pellicule solaire ?', answer: 'Nos pellicules Tekton Performance Films sont garanties pour durer de nombreuses années sans jaunir ni se décoller.' },
    ],
  },
  {
    slug: 'pellicule-intimite',
    name: "Pellicule d'Intimité",
    shortName: 'intimité',
    tagline: 'Discrétion & confort',
    icon: '🌫️',
    hue: 280,
    heroTitle: "Pellicule d'Intimité pour fenêtres à Montréal",
    heroDescription:
      "La pellicule d'intimité crée des espaces privés sans sacrifier la lumière naturelle — idéale pour salles de bain, portes d'entrée et fenêtres donnant sur la rue.",
    cardDescription:
      "La pellicule d'intimité crée des espaces privés sans sacrifier la lumière naturelle — idéale pour salles de bain, portes d'entrée et fenêtres donnant sur la rue.",
    photoCaption: "installation de pellicule d'intimité",
    benefits: [
      { title: 'Intimité totale', description: "Empêche la vue depuis l'extérieur, de jour comme le soir." },
      { title: 'Lumière préservée', description: 'Un fini dépoli qui garde vos pièces lumineuses.' },
      { title: 'Moins de rideaux', description: 'Réduit le besoin de stores ou de rideaux fermés.' },
      { title: "Résistance à l'humidité", description: 'Parfaite pour les salles de bain et sous-sols.' },
    ],
    tags: 'Salles de bain · Portes d\'entrée · Bureaux à domicile',
    faqs: [
      { question: 'La pellicule d\'intimité bloque-t-elle toute la lumière ?', answer: 'Non, elle diffuse la lumière naturelle tout en empêchant la vue directe.' },
      { question: 'Peut-on voir à travers le soir, lumière allumée ?', answer: 'Nos pellicules givrées réduisent fortement ce risque comparé au verre clair.' },
      { question: "S'installe-t-elle sur les portes vitrées ?", answer: "Oui, c'est une application très courante pour portes d'entrée et vitres latérales." },
    ],
  },
  {
    slug: 'pellicule-securite',
    name: 'Pellicule de Sécurité',
    shortName: 'sécurité',
    tagline: 'Protection & tranquillité d’esprit',
    icon: '🛡️',
    hue: 20,
    heroTitle: 'Pellicule de Sécurité pour fenêtres à Montréal',
    heroDescription:
      "La pellicule de sécurité renforce le vitrage existant contre les chocs, le bris et les tentatives d'effraction, sans remplacer vos fenêtres.",
    cardDescription:
      "La pellicule de sécurité renforce le vitrage existant contre les chocs, le bris et les tentatives d'effraction, sans remplacer vos fenêtres.",
    photoCaption: 'installation de pellicule de sécurité',
    benefits: [
      { title: 'Résistance aux chocs', description: "Maintient les fragments de verre en place lors d'un bris." },
      { title: "Dissuasion d'effraction", description: "Ralentit l'accès, un frein efficace contre l'intrusion." },
      { title: 'Protection des occupants', description: 'Réduit les risques de blessure par éclats de verre.' },
      { title: 'Compatible partout', description: "S'applique sur portes, fenêtres et cloisons vitrées." },
    ],
    tags: 'Maisons · Commerces · Immeubles',
    faqs: [
      { question: 'La pellicule de sécurité remplace-t-elle le verre trempé ?', answer: 'Non, mais elle renforce significativement la résistance du verre existant à moindre coût.' },
      { question: 'Est-ce visible une fois installée ?', answer: 'Très discrète, elle est quasi invisible sur du verre clair.' },
      { question: 'Convient-elle aux commerces ?', answer: 'Oui, très utilisée pour vitrines, portes et cloisons commerciales.' },
    ],
  },
  {
    slug: 'pellicule-decorative',
    name: 'Pellicule Décorative',
    shortName: 'décorative',
    tagline: 'Esthétique & branding',
    icon: '✨',
    hue: 150,
    heroTitle: 'Pellicule Décorative pour fenêtres à Montréal',
    heroDescription:
      'La pellicule décorative modernise vos surfaces vitrées avec des finitions givrées élégantes, personnalisables pour bureaux et commerces.',
    cardDescription:
      'La pellicule décorative modernise vos surfaces vitrées avec des finitions givrées élégantes, personnalisables pour bureaux et commerces.',
    photoCaption: 'installation de pellicule décorative',
    benefits: [
      { title: 'Finitions sur mesure', description: 'Motifs givrés, bandes ou logos selon vos besoins.' },
      { title: 'Image de marque', description: 'Intégrez votre logo directement sur le verre.' },
      { title: 'Cloisons de bureau', description: 'Idéale pour délimiter des espaces sans les fermer.' },
      { title: 'Usage polyvalent', description: 'Résidentiel comme commercial.' },
    ],
    tags: 'Bureaux · Cliniques · Commerces · Salles de conf.',
    faqs: [
      { question: 'Peut-on ajouter un logo personnalisé ?', answer: 'Oui, nous découpons les motifs et logos sur mesure.' },
      { question: 'Cette pellicule convient-elle aux résidences ?', answer: "Oui, très populaire pour salles de bain et portes d'entrée au look moderne." },
      { question: 'Est-elle facile à entretenir ?', answer: "Oui, un nettoyage doux au savon et à l'eau suffit." },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
