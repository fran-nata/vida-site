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

export function getCityBySlug(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}

export function nearbyCities(slug: string, count = 6): City[] {
  const others = cities.filter((c) => c.slug !== slug);
  return others.slice(0, count);
}
