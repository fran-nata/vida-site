// English combo-page copy, built the same way as comboIntros.ts: a unique
// city-flavor sentence + a service-specific sentence make paragraph 1, and a
// fixed closer (varying only by city name) makes paragraph 2. Adapted from
// the French facts, not machine-translated line for line.
export const cityFlavorEn: Record<string, string> = {
  montreal: "Between the Plateau's single-pane triplexes and downtown's heat-trapping condo towers, Montreal covers nearly every building type we install on.",
  laval: 'Many homes in Laval have large panoramic windows at the back, often west-facing toward the yard.',
  longueuil: 'Longueuil mixes condo towers near the metro with older bungalow neighborhoods, each with very different sun exposure.',
  repentigny: "Repentigny stretches along the St. Lawrence River, with homes built around the view — large windows and patio doors facing the water.",
  terrebonne: "Between the historic core of Île-des-Moulins and newer developments, Terrebonne's housing stock varies a lot.",
  'saint-eustache': 'Saint-Eustache sits along the Rivière des Mille Îles, with a historic center and newer residential areas around it.',
  blainville: 'Blainville has built heavily over the last twenty years — big windows front and back, with few mature trees yet for shade.',
  mirabel: 'Mirabel is more rural and spread out, with large properties and generous windows in full sun, with little to slow the heat down.',
  boisbriand: 'Boisbriand, near the Rivière des Mille Îles, is a family-oriented area with many single-family homes and large rear windows.',
  beaconsfield: 'Beaconsfield is one of the most established parts of the West Island, with large treed properties near the water.',
  'pointe-claire': 'Between the old village on Lac Saint-Louis and the Saint-Jean Boulevard commercial strip, Pointe-Claire mixes homes with large-window storefronts.',
  'dollard-des-ormeaux': 'Dollard-Des Ormeaux is mostly 1960s-70s bungalows and split-levels, with large front windows facing the street.',
  kirkland: 'Kirkland shares the quiet residential feel of the rest of the West Island — tree-lined streets, bungalows with big windows.',
  'vaudreuil-dorion': 'Vaudreuil-Dorion, where the Ottawa River meets the St. Lawrence, is in strong residential and commercial growth.',
  'saint-lazare': 'Saint-Lazare is more semi-rural, with large wooded lots, generous glazing, and direct sun exposure for much of the day.',
  'ile-perrot': "L'Île-Perrot is surrounded by water, and many waterfront homes have large picture windows and patio doors facing it.",
  pincourt: 'Pincourt borders Lac Saint-Louis, with several waterfront homes facing strong southern exposure.',
};

export const serviceSentenceEn: Record<string, string> = {
  'heat-control-window-film':
    "That's exactly the kind of exposure where heat control window film makes a real difference: up to 80% heat rejection and 99% of UV blocked, without darkening the room or changing a single window.",
  'privacy-window-film':
    'On this type of facade, privacy is usually the first complaint — frosted film fixes that while keeping natural light in, without having to keep curtains closed all day.',
  'security-window-film':
    'On this kind of glazing, reinforcing the existing glass with security film costs a fraction of a replacement, and significantly slows down breakage or a forced-entry attempt.',
  'decorative-window-film':
    'A custom frosted finish changes how these glass surfaces read in a single visit — popular here for homes just as much as for offices and businesses.',
};

export function closerEn(cityName: string): string {
  return `Our technicians come directly to you in ${cityName} to assess your windows and recommend the right solution — no pressure, no discount pitch, just a free estimate and an honest opinion.`;
}
