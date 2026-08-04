export interface City {
  slug: string;
  name: string;
  region: string;
}

export const cities: City[] = [
  { slug: 'montreal', name: 'Montréal', region: "l'Île de Montréal" },
  { slug: 'laval', name: 'Laval', region: 'Laval' },
  { slug: 'longueuil', name: 'Longueuil', region: 'la Montérégie' },
  { slug: 'repentigny', name: 'Repentigny', region: 'Lanaudière' },
  { slug: 'terrebonne', name: 'Terrebonne', region: 'Lanaudière' },
  { slug: 'saint-eustache', name: 'Saint-Eustache', region: 'les Laurentides' },
  { slug: 'blainville', name: 'Blainville', region: 'les Laurentides' },
  { slug: 'mirabel', name: 'Mirabel', region: 'les Laurentides' },
  { slug: 'boisbriand', name: 'Boisbriand', region: 'les Laurentides' },
  { slug: 'beaconsfield', name: 'Beaconsfield', region: "l'Ouest-de-l'Île de Montréal" },
  { slug: 'pointe-claire', name: 'Pointe-Claire', region: "l'Ouest-de-l'Île de Montréal" },
  { slug: 'dollard-des-ormeaux', name: 'Dollard-Des Ormeaux', region: "l'Ouest-de-l'Île de Montréal" },
  { slug: 'kirkland', name: 'Kirkland', region: "l'Ouest-de-l'Île de Montréal" },
  { slug: 'vaudreuil-dorion', name: 'Vaudreuil-Dorion', region: 'Vaudreuil-Soulanges' },
  { slug: 'saint-lazare', name: 'Saint-Lazare', region: 'Vaudreuil-Soulanges' },
  { slug: 'ile-perrot', name: "L'Île-Perrot", region: 'Vaudreuil-Soulanges' },
  { slug: 'pincourt', name: 'Pincourt', region: 'Vaudreuil-Soulanges' },
];

export const regionOrder = [
  "l'Île de Montréal",
  'Laval',
  'la Montérégie',
  'Lanaudière',
  'les Laurentides',
  "l'Ouest-de-l'Île de Montréal",
  'Vaudreuil-Soulanges',
];

export interface RegionProfile {
  buildingContext: string;
  exposureNote: string;
  propertyTypes: string;
}

// General regional character used to vary location-page copy across the 17
// cities without inventing city-specific facts we can't verify.
export const regionProfiles: Record<string, RegionProfile> = {
  "l'Île de Montréal": {
    buildingContext: 'un mélange dense de condos, plex et maisons de ville, souvent avec de grandes fenêtres orientées sur rue',
    exposureNote: "l'éblouissement des écrans et le vis-à-vis avec les logements voisins reviennent parmi les demandes les plus fréquentes",
    propertyTypes: 'condominiums, plex et commerces de quartier',
  },
  Laval: {
    buildingContext: 'des maisons unifamiliales de banlieue et des immeubles à condos plus récents avec de grandes fenêtres à double vitrage',
    exposureNote: "la chaleur en après-midi sur les façades orientées sud ou ouest est un enjeu courant",
    propertyTypes: 'maisons unifamiliales, condos et commerces de proximité',
  },
  'la Montérégie': {
    buildingContext: 'un mélange de quartiers résidentiels établis et de secteurs commerciaux près du fleuve',
    exposureNote: "aussi bien la réduction de chaleur résidentielle que le renforcement de vitrines commerciales sont demandés",
    propertyTypes: 'maisons, copropriétés et commerces',
  },
  Lanaudière: {
    buildingContext: 'des banlieues en expansion avec des maisons neuves à grandes baies vitrées orientées sud',
    exposureNote: "la surchauffe des pièces à vivre en après-midi et la décoloration des planchers sont des motifs d'appel fréquents",
    propertyTypes: 'maisons neuves et propriétés unifamiliales',
  },
  'les Laurentides': {
    buildingContext: 'des développements résidentiels récents et des propriétés avec vérandas ou solariums fortement exposés au soleil',
    exposureNote: 'les vérandas et solariums difficiles à utiliser en été reviennent souvent dans les demandes',
    propertyTypes: 'maisons unifamiliales, vérandas et solariums',
  },
  "l'Ouest-de-l'Île de Montréal": {
    buildingContext: 'de grandes propriétés unifamiliales matures avec beaucoup de vitrage sur cour et sur rue',
    exposureNote: "l'intimité par rapport au voisinage et la protection des meubles contre la décoloration sont des priorités courantes",
    propertyTypes: 'grandes maisons unifamiliales et bureaux',
  },
  'Vaudreuil-Soulanges': {
    buildingContext: 'un secteur en forte croissance avec de nombreuses constructions neuves et de grandes fenêtres modernes',
    exposureNote: "le renforcement du vitrage au rez-de-chaussée et la réduction de chaleur sont des demandes fréquentes sur les constructions récentes",
    propertyTypes: 'maisons neuves, copropriétés et commerces locaux',
  },
};

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function nearbyCities(slug: string, count = 6): City[] {
  const others = cities.filter((c) => c.slug !== slug);
  return others.slice(0, count);
}
